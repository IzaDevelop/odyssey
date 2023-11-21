import { convertLabel } from "../../util/convertLabel";

export function Email(props) {
    return (
        <div className="w-full flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? ' *' : ''}
            </label>
            <input
                type="email"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                className="w-full rounded-xl border disabled:opacity-75 disabled:bg-neutral-200"
            />
        </div>
    );
}