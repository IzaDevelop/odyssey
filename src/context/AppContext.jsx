import { createContext, useContext, useState, useEffect } from "react";
import moment from 'moment';
import api from "../services/api";

const AppContext = createContext({})

export function AppContextProvider({ children }) {
    // THEME

    const [theme, setTheme] = useState(() => localStorage.theme === "dark");

    function handleToggleTheme() {
        setTheme(!theme)
    }

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = theme

        const prevTheme = currentTheme ? "light" : "dark"
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? "dark" : "light"
        rootElement.classList.add(nextTheme)

        localStorage.setItem("theme", nextTheme)
    }, [theme])


    //  WINDOS DIMENSION

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // MENU

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMenu(windowDimensions.width > 768 ? false : menu);
    }, [windowDimensions]);

    // MODAL

    const [modal, setModal] = useState({
        state: false,
        title: "",
        message: "",
        children: null,
        buttons: [
            {
                text: "",
                function: undefined,
                reload: false,
                redirect: "",
                custom: false
            }
        ]
    });

    // PATIENT

    async function handleCreatePatient(data) {
        const birthDate = new Date(data.birth);
        const formattedBirthDate = `${birthDate.getFullYear()}-${(birthDate.getMonth() + 1).toString().padStart(2, '0')}-${birthDate.getDate().toString().padStart(2, '0')}`;

        await api.post("Prod/patient", {
            resourceType: "Patient",
            active: true,
            name: [
                {
                    use: "official",
                    family: data.lastName,
                    given: [data.firstName, data.middleName]
                }
            ],
            telecom: [
                {
                    system: "phone",
                    value: data.phone,
                    use: "mobile",
                    rank: 1
                }
            ],
            gender: data.gender,
            birthDate: formattedBirthDate,
            address: [
                {
                    use: "home",
                    type: "both",
                    text: [data.street - data.complement],
                    line: [data.street, data.complement],
                    city: data.city,
                    district: data.district,
                    state: data.state,
                    postalCode: data.zip,
                    period: { "start": "1994-09-26" }

                }
            ]
        }).then(response => {
            setModal({
                state: true,
                title: "Sucesso",
                message: 'Paciente criado com sucesso',
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "/app",
                        custom: ""
                    }
                ]
            });

            localStorage.setItem('token', response.data)
        }).catch(err => {
            console.log(err)

            setModal({
                state: true,
                title: "Ops",
                message: "Não foi possível cadastrar esse paciente",
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                        custom: "alert"
                    }
                ]
            });
        });
    }

    // EMERGENCY DATA

    async function handleDataEmergency() {

        var ocurrence = localStorage.getItem('ocurrenceID')

        await api.get(`Prod/occurrence/${ocurrence}`).then(response => {
            console.log(response.data)

            setModal({
                state: true,
                title: "Dados da ocorrência",
                message: `A ambulância chegara <br/>` + moment(response.data.effectiveDateTime).format('DD/MM/YYYY, h:mm:ss a'),
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                        custom: ""
                    }
                ]
            });
        }).catch(err => {
            console.log(err)

            setModal({
                state: true,
                title: "Ops",
                message: "Não foi possível encontrar os dados da ocorrência",
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                        custom: ""
                    }
                ]
            });
        });
    }

    // EMERGENCY

    async function handleEmergency() {

        var token = localStorage.getItem('token')

        await api.post("Prod/occurrence", {
            "resourceType": "Observation",
            "id": token,
            "meta": {
                "versionId": "1",
                "lastUpdated": "2023-10-06T17:16:07.756+00:00"
            },
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "789-8",
                        "display": "Body Weight"
                    }
                ],
                "text": "Body Weight"
            },
            "subject": {
                "reference": `Patient/${token}`
            },
            "effectiveDateTime": "2023-10-06T10:30:00Z",
            "valueQuantity": {
                "value": 70,
                "unit": "kg",
                "system": "http://unitsofmeasure.org",
                "code": "kg"
            }
        }).then(response => {
            localStorage.setItem('ocurrenceID', response.data.id)

            setModal({
                state: true,
                title: "Sucesso",
                message: 'A ambulância foi chamada sucesso',
                children: null,
                buttons: [
                    {
                        text: "Aguarde",
                        function: setTimeout(() => {
                            handleDataEmergency()
                        }, 5000),
                        reload: false,
                        redirect: "",
                        custom: "disabled opacity-70 cursor-wait"
                    }
                ]
            });
        }).catch(err => {
            console.log(err)

            setModal({
                state: true,
                title: "Ops",
                message: "Não foi possível chamar a ambulância",
                children: null,
                buttons: [
                    {
                        text: "Fechar",
                        function: undefined,
                        reload: false,
                        redirect: "",
                        custom: "alert"
                    }
                ]
            });
        });
    }

    return (
        <AppContext.Provider value={{
            theme,
            handleToggleTheme,

            menu,
            setMenu,

            modal,
            setModal,

            handleCreatePatient,
            handleEmergency,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)