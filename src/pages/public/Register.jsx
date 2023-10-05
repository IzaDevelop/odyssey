import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { useAppContext } from "../../context/AppContext";
import { Text } from "../../components/form/Text";
import { Phone } from "../../components/form/Phone";
import { Radio } from "../../components/form/Radio";
import { Date } from "../../components/form/Date";
import { Zip } from "../../components/form/Zip";
import { Button } from "../../components/form/Button";
import { Modal } from "../../components/Modal";

export function Register() {
    const { handleCreateParticipant, modal } = useAppContext()

    const [fields, setFields] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        gender: "",
        birth: "",
        street: "",
        complement: "",
        city: "",
        district: "",
        state: "",
        zip: "",
    });

    const [validation, setValidation] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)

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

    function createNewParticipant() {
        handleCreateParticipant(fields)

        setValidation(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setLoadingValidation(true)

        setTimeout(() => {
            event.target.reportValidity() ? setValidation(event.target.reportValidity()) : setValidation(false)
            setLoadingValidation(false)
        }, 1000)

        setValidation(false)
    };

    var cep = fields.zip.replace(/[^0-9]/g, '');

    async function handleZip() {
        const response = await axios.get("https://viacep.com.br/ws/" + cep + "/json")

        if (!response.data.erro)
            setFields({
                ...fields,
                street: response.data.logradouro,
                district: response.data.bairro,
                city: response.data.localidade,
                state: response.data.uf,
            })
    }

    useEffect(() => {
        if (fields.zip) {
            handleZip()
        }
    }, [fields.zip])

    useEffect(() => {
        if (validation)
            createNewParticipant()
    }, [validation])

    return (
        <main className="relative w-full h-auto min-h-screen bg-gradient-to-b from-client-primary to-client-secondary">
            <article className="max-w-5xl h-full mx-auto py-8 px-10 md:px-12 bg-white text-body flex flex-col gap-8">

                <section className="flex-1 flex flex-col items-center">
                    <div className="text-center py-7">
                        <h1 className="uppercase font-extrabold text-3xl text-center text-client-primary font-titillium">Cadastre-se</h1>
                        <p className="text-base pt-3">Preencha os campos abaixo para se cadastrar.</p>
                    </div>

                    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 lg:w-1/2">
                        <Text
                            label={'Nome'}
                            id={'firstName'}
                            onChange={onFieldChange}
                            value={fields.firstName}
                            required
                        />

                        <Text
                            label={'Nome do meio'}
                            id={'middleName'}
                            onChange={onFieldChange}
                            value={fields.middleName}
                        />

                        <Text
                            label={'Sobrenome'}
                            id={'lastName'}
                            onChange={onFieldChange}
                            value={fields.lastName}
                            required
                        />

                        <Phone
                            label={'Celular'}
                            id={'phone'}
                            onChange={onFieldChange}
                            value={fields.phone}
                            required
                        />

                        <Radio
                            label={'Gênero'}
                            id={'gender'}
                            onChange={onFieldChange}
                            value={fields.gender}
                            // required
                            options={[
                                {
                                    label: "Feminino",
                                    value: "female"
                                },
                                {
                                    label: "Masculino",
                                    value: "male"
                                }
                            ]}
                        />

                        <Date
                            label={'Data de nascimento'}
                            id={'birth'}
                            onChange={onFieldChange}
                            value={fields.birth}
                            required
                        />

                        <Zip
                            label={'CEP'}
                            id={'zip'}
                            onChange={onFieldChange}
                            value={fields.zip}
                            required
                        />

                        <Text
                            label={'Rua'}
                            id={'street'}
                            onChange={onFieldChange}
                            value={fields.street}
                            disabled={true}
                            required
                        />

                        <Text
                            label={'Número'}
                            id={'complement'}
                            onChange={onFieldChange}
                            value={fields.complement}
                            required
                        />

                        <Text
                            label={'Bairro'}
                            id={'district'}
                            onChange={onFieldChange}
                            value={fields.district}
                            disabled={true}
                            required
                        />

                        <Text
                            label={'Cidade'}
                            id={'city'}
                            onChange={onFieldChange}
                            value={fields.city}
                            disabled={true}
                            required
                        />

                        <Text
                            label={'UF'}
                            id={'state'}
                            onChange={onFieldChange}
                            value={fields.state}
                            disabled={true}
                            required
                        />

                        <section className="flex justify-between items-center">
                            <Link to={"/"} className="text-client-primary text-lg font-semibold"><CaretLeft size={24} weight="bold" className="inline" /> Voltar</Link>

                            <Button
                                label={'Cadastrar'}
                            />
                        </section>
                    </form>
                </section>

            </article>
            {modal.state && <Modal />}
        </main>
    )
}