import { convertLabel } from "../../util/convertLabel";

export function Radio(props) {
    return (
        <div className="w-full flex flex-col gap-3">
            <label htmlFor={props.id} className="text-sm">
                {props.label}{props.required ? " *" : ""}
            </label>
            <div className="flex gap-4">
                {props.options.map((option, key) => {
                    return (
                        <div key={key} className="flex items-center gap-1">
                            <input
                                tabIndex={-1}
                                type="radio"
                                name={convertLabel(option.label)}
                                id={option.id}
                                value={option.value}
                                onChange={props.onChange}
                                checked={props.value === option.value ? true : false}
                                disabled={option.disabled}
                                required={props.required}
                                alt={option.label}
                                data-tag={props.id}
                                className="form-radio text-blue-300 checked:bg-blue-400 focus:ring-blue-400"
                            />
                            <label htmlFor={option.id}>
                                {option.label}
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}