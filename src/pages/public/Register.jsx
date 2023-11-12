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
    const { handleCreatePatient, modal } = useAppContext()

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
        handleCreatePatient(fields)

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
        <>
            <div>
                <div className="min-h-screen flex items-stretch text-white">
                    <div className="lg:flex w-full hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url(https://atlanticoplanosdesaude.com.br/wp-content/uploads//2022/06/troca-de-plano-de-saude-empresarial.jpg)" }}>
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                        <div className="w-full px-24 z-10">
                            <h1 className="text-5xl font-bold text-left tracking-wide">Cadastre-se</h1>
                            <p className="text-3xl my-4">Você merece o melhor cuidado para uma vida plena e saudáve</p>
                        </div>
                        {/* <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                            <span>
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </span>
                            <span>
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </span>
                            <span>
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </span>
                        </div> */}
                        <div className="lg:w-full w-full flex items-center justify-center px-0 z-0 bg-blur bg-opacity-50 bg-neutral-950">
                        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)" }}>
                        </div>
                        <div className="w-full flex justify-center h-screen overflow-x-hidden pt-10 z-20">
                            <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 px-10">
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

                                <section className="flex justify-between items-center pb-10">
                                    <Link to={"/"} className="text-client-primary text-lg font-semibold"><CaretLeft size={24} weight="bold" className="inline" /> Voltar</Link>

                                    <Button
                                        label={'Cadastrar'}
                                    />
                                </section>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}