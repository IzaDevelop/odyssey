import { useState } from "react";
import { Email } from "./form/Email";

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
        <div className="px-4 pb-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:pb-20" id='news'>
            <div className="relative flex flex-col items-center mt-10 bg-white border border-gray-400 rounded shadow-sm xl:flex-row">
                <div className="w-full p-6 py-8 sm:p-12 xl:w-1/2">
                    <h3 className="mb-4 text-2xl font-extrabold leading-none sm:text-2xl">Assine Nossa Newsletter e Transforme Sua Jornada para uma Vida Mais Saudável!</h3>
                    <p className="mb-6 text-base text-gray-700">Receba em sua caixa de entrada conteúdo exclusivo, elaborado por especialistas em saúde. Desde dicas de nutrição até práticas de autocuidado, oferecemos insights únicos para fortalecer seu compromisso com um estilo de vida saudável.</p>
                    <form onSubmit={onSubmit}>
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
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-neutral-950 border border-none bg-blue-200 hover:bg-blue-300 rounded"
                            >
                                Inscrever-se
                            </button>
                        </div>
                        <p className="text-xs text-neutral-400 sm:text-xs">
                            Nós respeitamos sua privacidade. Você pode se desinscrever a qualquer momento.
                        </p>
                    </form>
                </div>
                <div className="flex w-full xl:w-1/2">
                    <object className="relative hidden h-auto xl:block">
                        <svg viewBox="0 0 190 1440" className="w-16 h-full text-blue-200" preserveAspectRatio="none" strokeWidth="0"><path d="M-0.000203125 6.34766e-06H190V1440H-0.000203125C-0.000203125 1440 113.574 1059.66 114.317 699.623C115.06 339.589 -0.000203125 6.34766e-06 -0.000203125 6.34766e-06Z" fill="currentColor"></path></svg>
                    </object>
                    <div className="w-full py-2 pl-1 bg-blue-200 lg:py-0 xl:rounded-r sm:pl-2 xl:pl-0">
                        <div className="w-full h-full transform xl:mt-5 lg:scale-110 xl:scale-135 gatsby-image-wrapper flex justify-center items-center">
                            <img src="https://kitwind.io/static/7277c9785e82b31b79de9c72e716bce1/8309f/human.png" alt="" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}