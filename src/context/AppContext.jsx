import { createContext, useContext, useState, useEffect } from "react";
// import api from "../services/api";

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

    // TOKEN

    const aadTenant = 'https://login.microsoftonline.com/';
    const aadTenantId = '1ed38c46-5933-4072-9caf-1e9b956330b9';

    const appId = 'a8c9fa18-b3be-47dd-bb80-7eac4fb91fd1';
    const appSecret = 'BW~8Q~0WKd4n9nN.M5HQ9C2BGMMNPmzOK5Ujfbtl';

    const fhirEndpoint = 'https://fihrworkspace-fiap-challange-fhir.fhir.azurehealthcareapis.com/';

    async function getAuthToken() {
        try {
            const response = await axios.post(
                aadTenant + aadTenantId + '/oauth2/token', {
                client_id: appId,
                client_secret: appSecret,
                grant_type: 'client_credentials',
                esource: fhirEndpoint,
            },
                // new URLSearchParams({
                //     client_id: appId,
                //     client_secret: appSecret,
                //     grant_type: 'client_credentials',
                //     resource: fhirEndpoint,
                // }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            console.log(response)
            const accessToken = response.data.access_token;
            console.log('\tAAD Access Token acquired: ' + accessToken.substring(0, 50) + '...');
            return accessToken;
        } catch (error) {
            console.log(error.response.data);
            console.log('\tError getting token: ' + error.response.status);
            return null;
        }
    }

    async function getAuthToken() {
        try {
            const response = await axios.post(
                aadTenant + aadTenantId + '/oauth2/token', {
                client_id: appId,
                client_secret: appSecret,
                grant_type: 'client_credentials',
                resource: fhirEndpoint,
            },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            console.log(response);
            const accessToken = response.data.access_token;
            console.log('\tAAD Access Token acquired: ' + accessToken.substring(0, 50) + '...');
            return accessToken;
        } catch (error) {
            console.error('\tError getting token:', error);
            return null;
        }
    }

    function printResourceData(resource) {
        const resourceType = resource['resourceType'];
        const itemId = resource['id'];
        if (resourceType === 'OperationOutcome') {
            console.log('\t' + JSON.stringify(resource));
        } else {
            console.log('\t' + resourceType + '/' + itemId);
        }
    }

    function printResponseResults(response) {
        const responseAsJson = response.data;

        if (!responseAsJson.entry) {
            printResourceData(responseAsJson);
        } else {
            for (const item of responseAsJson.entry) {
                const resource = item['resource'];
                printResourceData(resource);
            }
        }
    }

    function getHttpHeader(accessToken) {
        return {
            Authorization: 'Bearer ' + accessToken,
            'Content-type': 'application/json',
        };
    }

    // PATIENT

    // async function handleCreateParticipant(data) {
    //     const patientData = {
    //         resourceType: "Patient",
    //         active: true,
    //         name: [
    //             {
    //                 use: "official",
    //                 family: data.lastName,
    //                 given: [data.firstName, data.middleName]
    //             }
    //         ],
    //         telecom: [
    //             {
    //                 system: "phone",
    //                 value: data.phone,
    //                 use: "mobile",
    //                 rank: 1
    //             }
    //         ],
    //         gender: data.gender,
    //         birthDate: data.birth,
    //         address: [
    //             {
    //                 use: "home",
    //                 type: "both",
    //                 text: [data.street - data.complement],
    //                 line: [data.street, data.complement],
    //                 city: data.city,
    //                 district: data.district,
    //                 state: data.state,
    //                 postalCode: data.zip,
    //                 period: { "start": "1994-09-26" }

    //             }
    //         ]
    //     };

    //     try {
    //         const response = await axios.post(fhirEndpoint + 'Patient', patientData, {
    //             headers: getHttpHeader(accessToken),
    //         });
    //         const resourceId = response.data.id;
    //         console.log('\tPatient ingested: ' + resourceId + '. HTTP ' + response.status);
    //         return resourceId;
    //     } catch (error) {
    //         console.error('\tError persisting patient: ' + error.response.status);
    //         return null;
    //     }
    // }

    return (
        <AppContext.Provider value={{
            theme,
            handleToggleTheme,

            menu,
            setMenu,

            modal,
            setModal,

            getHttpHeader,
            // printResponseResults,
            // getAuthToken,

            // handleCreateParticipant,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)