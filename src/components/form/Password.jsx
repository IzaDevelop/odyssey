import { useEffect, useState } from "react";
import { convertLabel } from "../../util/convertLabel";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export function Password(props) {
    const [validate, setValidate] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (props.value !== '' && props.compare && props.compare !== '') {
            if (props.value === props.compare)
                setValidate(true)
            else
                setValidate(false)
        }

    }, [props.value, props.compare])

    useEffect(() => {
        if (props.extraValidation) {
            if (validate)
                props.extraValidation(false)
            else
                props.extraValidation(true)
        }
    }, [validate])

    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={props.id} className="text-sm text-alternate">
                {props.label}{props.required ? ' *' : ''}
            </label>
            <div className="relative w-full flex flex-col">
                <input
                    type={showPassword ? "text" : "password"}
                    name={convertLabel(props.label)}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    required={props.required}
                    autoComplete="new-password"
                    className="w-full rounded-xl border-zinc-300"
                />
                <div className="absolute h-full w-12 top-0 right-0">
                    <button
                        type="button"
                        className="w-full h-full flex items-center justify-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ?
                            <EyeSlash size={22} />
                            :
                            <Eye size={22} />
                        }
                    </button>
                </div>
            </div>
            {props.totalValidated !== undefined &&
                <div className="flex flex-col gap-2 w-full">
                    <small className="text-alternate">
                        <b>Sua senha deve conter:</b> Maiúsculo • Minúsculo • Número • Caractere especial (! @ # ?) • Mínimo 8 caracteres
                    </small>
                    <div className="w-full h-2 bg-separator rounded overflow-hidden relative">
                        <div className={
                            props.totalValidated >= 5 ?
                                "w-full bg-success absolute inset-0" :
                                props.totalValidated > 2 && props.totalValidated < 5 ?
                                    "w-2/3 bg-info absolute inset-0" :
                                    props.totalValidated <= 2 && props.totalValidated !== 0 ?
                                        "w-1/3 bg-alert absolute inset-0" :
                                        "w-auto bg-separator absolute inset-0"
                        } />
                    </div>
                </div>
            }
            {props.value !== '' && !validate && props.compare && props.compare !== '' &&
                <p className="text-xs text-client-primary">
                    As senhas não são iguais.
                </p>
            }
        </div>
    )
}