export function convertLabel(props) {
    return props.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').toLocaleLowerCase()
}