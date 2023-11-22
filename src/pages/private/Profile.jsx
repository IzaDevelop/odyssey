import api from "../../services/api";
import { useState, useEffect } from "react";

export function Profile() {
    const [list, setList] = useState('')

    const EmergencyList = async () => {
        try {
            const response = await api.get("/calls")

            if (response.status === 200) {
                setList(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (list.length === 0) {
            EmergencyList()
        }
    }, [list])

    return (
        <section className="p-10">
            <div>

                <div className="w-full h-auto py-3 grid items-center bg-client-primary text-neutral-950">
                    <span className="relative flex justify-center">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                        ></div>

                        <span className="relative z-10 bg-white px-6">Histórico de Chamadas de Emergência</span>
                    </span>
                </div>

                <div className="w-full max-w-3xl flex flex-col mx-auto pt-8">
                    <div className="w-full h-auto py-3 grid grid-cols-4 items-center bg-blue-800 text-white">
                        <div className="text-center font-semibold">
                            <p>
                                Nome do Paciente
                            </p>
                        </div>
                        <div className="text-center font-semibold">
                            <p>
                                Contato
                            </p>
                        </div>
                        <div className="text-center font-semibold">
                            <p>
                                Tempo de espera
                            </p>
                        </div>
                    </div>
                    <div className="mt-2">
                        {list && list.map((row, key) =>
                            <div className="w-full h-auto py-3 grid grid-cols-4 items-center bg-client-ghost mb-2 border text-sm bg-blue-200" key={key}>
                                <div className="text-center uppercase">
                                    <p>
                                        {row.patient_name}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p>
                                        {row.patient_phone}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p>
                                        {row.estimated_time_of_completion}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-5 rounded-md">Detalhes</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section >
    )
}