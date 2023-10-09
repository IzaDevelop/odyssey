import { createContext, useContext, useState, useEffect } from "react";
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
                        redirect: "/login",
                        custom: ""
                    }
                ]
            });
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

    return (
        <AppContext.Provider value={{
            theme,
            handleToggleTheme,

            menu,
            setMenu,

            modal,
            setModal,

            handleCreatePatient
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)