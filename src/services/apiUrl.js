function currentUrl() {
    const isLocalHost = window.location.href.includes("localhost")

    // if (isLocalHost) {
    //     return "https://fihrworkspace-fiap-challange-fhir.fhir.azurehealthcareapis.com/"
    // } else {
    //     return "https://fihrworkspace-fiap-challange-fhir.fhir.azurehealthcareapis.com/"
    // }

    if (isLocalHost) {
        return "https://8f2h46dm4m.execute-api.us-east-1.amazonaws.com"
    } else {
        return "https://8f2h46dm4m.execute-api.us-east-1.amazonaws.com"
    }
}

const apiUrl = currentUrl()

export default apiUrl