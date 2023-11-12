export function Button(props) {
    return (
        <div className="flex">
            <button
                type="submit"
                disabled={props.disabled}
                className="bg-blue-700 text-white py-2 px-8 transition-colors hover:bg-blue-800 rounded-lg font-semibold disabled:opacity-60"
            >
                {props.label}
            </button>
        </div>
    )
}