function currentUrl() {
    const isLocalHost = window.location.href.includes("localhost")

    if (isLocalHost) {
        return "https://fihrworkspace-fiap-challange-fhir.fhir.azurehealthcareapis.com/"
    } else {
        return "https://fihrworkspace-fiap-challange-fhir.fhir.azurehealthcareapis.com/"
    }
}

const apiUrl = currentUrl()

export default apiUrl