import InputMask from "react-input-mask";
import { convertLabel } from "../../util/convertLabel";

export function Date(props) {
    return (
        <div className="w-full flex flex-col gap-2">
            <label
                htmlFor={props.id}
                className="text-sm"
            >
                {props.label}{props.required ? ' *' : ''}
            </label>
            <InputMask
                mask={'99/99/9999'}
                maskChar={''}
                type="text"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                autoComplete="off"
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                className="w-full rounded-xl text-neutral-800 border-none disabled:opacity-75 disabled:bg-neutral-200"
            />
        </div>
    );
}