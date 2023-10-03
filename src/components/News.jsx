import { useState } from "react";
import { Text } from "./form/Text";
import { Email } from "./form/Email";
import { Ambulancia } from "../assets";

export function News() {
    const [fields, setFields] = useState({
        name: "",
        email: "",
    });

    const [validation, setValidation] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)

    const onFieldChange = (event) => {
        let value = event.target.value
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }

        setFields({ ...fields, [event.target.id]: value });
        setValidation(false)
    };

    const onSubmit = (event) => {
        event.preventDefault();

        setLoadingValidation(true)

        setTimeout(() => {
            event.target.reportValidity() ? setValidation(event.target.reportValidity()) : setValidation(false)
            setLoadingValidation(false)
        }, 1000)

        setValidation(false)
    };

    return (
        <div className="relative h-[500px]">
            <img
                src={Ambulancia}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative flex justify-center items-center h-full px-5">
                <div className="max-w-7xl mx-auto bg-azul text-white bg-opacity-80 backdrop-blur-sm rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-3xl text-center font-bold">
                        Assine nossa <span className="text-verdeClaro">newsletter</span>
                    </h3>
                    <form onSubmit={onSubmit}>
                        <div className="pb-5">
                            <Text
                                label={'Nome'}
                                id={'name'}
                                onChange={onFieldChange}
                                value={fields.name}
                                placeholder={'Seu nome'}
                                required
                            />
                        </div>
                        <div className="pb-5">
                            <Email
                                label={'E-mail'}
                                id={'email'}
                                onChange={onFieldChange}
                                value={fields.email}
                                placeholder={'exemplo@gmail.com'}
                                required
                            />
                        </div>
                        <div className="pb-5">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white border border-white rounded"
                            >
                                Inscrever-se
                            </button>
                        </div>
                        <p className="text-xs text-white sm:text-xs">
                            Nós respeitamos sua privacidade. Você pode se desinscrever a qualquer momento.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}