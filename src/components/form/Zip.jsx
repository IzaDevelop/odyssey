import InputMask from "react-input-mask";
import { convertLabel } from "../../util/convertLabel";

export function Zip(props) {
    return (
        <div className="w-full flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? ' *' : ''}
            </label>
            <InputMask
                mask={"99999-9999"}
                maskChar={""}
                type="text"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                className="w-full rounded-xl border"
            />
        </div>
    );
}