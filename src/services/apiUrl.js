function currentUrl() {
    const isLocalHost = window.location.href.includes("localhost")

    if (isLocalHost) {
        return "https://odysseyservice-bd94c0e9dba7.herokuapp.com"
    } else {
        return "https://odysseyservice-bd94c0e9dba7.herokuapp.com"
    }
}

const apiUrl = currentUrl()

export default apiUrl