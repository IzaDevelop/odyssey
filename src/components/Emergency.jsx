import api from "../services/api";
import { useState, useEffect } from "react";
import { Text } from "./form/Text";
import { Phone } from "./form/Phone";
import { Button } from "./form/Button";

export function Emergency(props) {
    const [fields, setFields] = useState({
        name: "",
        phone: "",
        details: "",
        type: "",
        conditions: false,
    });

    const [validation, setValidation] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)
    const [status, setStatus] = useState(false)
    const [time, setTime] = useState('')
    const [disableButton, setDisableButton] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault();

        setLoadingValidation(true)

        setTimeout(() => {
            event.target.reportValidity() ? setValidation(event.target.reportValidity()) : setValidation(false)
            setLoadingValidation(false)
            setDisableButton(true)
        }, 1000)

        setValidation(false)
    };

    const onFieldChange = (event) => {
        let value = event.target.value

        if (event.target.id === 'cep') {
            value = value.replace(/[^\w\s]/gi, '')
        }

        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }

        if (event.target.dataset.tag) {
            setFields({ ...fields, [event.target.dataset.tag]: value })
            return null
        }

        setFields({ ...fields, [event.target.id]: value });
        setValidation(false)
    };

    const handleEmergency = async () => {
        try {
            const response = await api.post("/call", {
                "location": "-23.569149%2C-46.643681",
                "emergency_type": fields.type,
                "emergency_details": fields.details,
                "patient_name": fields.name,
                "patient_phone": fields.phone,
                "patient_address": "your_patient_address_value",
                "call_status": "your_call_status_value",
                "called_at": "your_called_at_value",
                "accepted_at": "your_accepted_at_value",
                "rejected_at": "your_rejected_at_value",
                "arrived_at": "your_arrived_at_value",
                "completed_at": "your_completed_at_value",
                "estimated_time_of_arrival": "your_estimated_time_of_arrival_value",
                "estimated_time_of_completion": "your_estimated_time_of_completion_value"
            })

            if (response.status === 200) {
                setTime(response.data.estimated_time_of_arrival)
                setStatus(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (validation)
            handleEmergency()
    }, [validation])

    function handleCloseModal() {
        props.close(false)
    }

    return (
        <div className="w-full h-screen fixed inset-0 flex items-center justify-center z-30 bg-neutral-600 bg-opacity-60">
            <div className="bg-zinc-100 mx-3 w-full max-w-lg h-auto min-h-[250px] flex flex-col p-7 rounded-2xl">
                <div className="flex justify-center items-center pb-2">
                    <h5 className="font-titillium font-extrabold text-center text-2xl text-client-primary">Dados sobre a emergência</h5>
                </div>

                {status ? (
                    <div className="flex flex-1 flex-col justify-center items-center text-center">
                        <h5 className="pb-5">A ambulância chegara em {time} <br/> Aguarde no local informado.</h5>

                        <button type="button" onClick={() => handleCloseModal()} className="text-white bg-blue-400 hover:bg-blue-500 rounded-lg px-5 py-2 text-lg font-semibold">Fechar</button>
                    </div>
                ) : (
                    <div className="flex-1 flex text-start text-lg items-center justify-center max-h-[500px] overflow-auto">
                        <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 px-10">
                            <Text
                                label={'Nome'}
                                id={'name'}
                                onChange={onFieldChange}
                                value={fields.name}
                                required
                            />

                            <Phone
                                label={'Celular'}
                                id={'phone'}
                                onChange={onFieldChange}
                                value={fields.phone}
                                required
                            />

                            <Text
                                label={'Tipo de emergência'}
                                id={'type'}
                                onChange={onFieldChange}
                                value={fields.type}
                                required
                            />


                            <Text
                                label={'Detalhes da emergência'}
                                id={'details'}
                                onChange={onFieldChange}
                                value={fields.details}
                                required
                            />

                            <section className="flex justify-between items-center">
                                <Button
                                    label={'Chamar socorrista'}
                                    disabled={disableButton}
                                />

                                <button type="button" onClick={() => handleCloseModal()} className="text-white bg-blue-400 hover:bg-blue-500 rounded-lg px-5 py-2 text-lg font-semibold">Fechar</button>
                            </section>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}