import { convertLabel } from "../../util/convertLabel";

export function Text(props) {
    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? ' *' : ''}
            </label>
            <input
                type="text"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                className="w-full rounded-xl border-zinc-300  disabled:opacity-75 disabled:bg-neutral-200"
            />
        </div>
    )
}