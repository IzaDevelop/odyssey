import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CaretLeft } from "@phosphor-icons/react";
import { useAppContext } from "../../context/AppContext";
import { Email } from "../../components/form/Email";
import { Password } from "../../components/form/Password";
import { Button } from "../../components/form/Button";
import { Modal } from "../../components/Modal";

export function Register() {
    const { handleCreateParticipant, modal } = useAppContext()

    const [fields, setFields] = useState({
        cnpj: "",
        company: "",
        representative: "",
        branch: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: "",
        status: "",
        conditions: false,
    });

    const [currentData, setCurrentData] = useState({});
    const [disable, setDisable] = useState(false);
    const [validation, setValidation] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)
    const [extraValidation, setExtraValidation] = useState(true)
    const [conditionsPassword, setConditionsPassword] = useState({
        lowerCase: false,
        upperCase: false,
        digit: false,
        specialChar: false,
        minLength: false,
    });
    const [totalValidated, setTotalValidated] = useState(0);

    function handleValidationPassword() {
        const lowerCase = new RegExp("(?=.*[a-z])");
        const upperCase = new RegExp("(?=.*[A-Z])");
        const digit = new RegExp("(?=.*[0-9])");
        const specialChar = new RegExp("(?=.*[(!@#$%&*()-+.,;?{}^><:)])");
        const minLength = new RegExp("(?=.{8,})");

        if (lowerCase.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, lowerCase: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, lowerCase: false }))
        }

        if (upperCase.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, upperCase: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, upperCase: false }))
        }

        if (digit.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, digit: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, digit: false }))
        }

        if (specialChar.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, specialChar: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, specialChar: false }))
        }

        if (minLength.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, minLength: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, minLength: false }))
        }
    }

    function checkValidations(data) {
        var value = 0;

        for (const key in data)
            value += data[key]

        setTotalValidated(value)
    }

    async function handleSubmit(props) {
        handleCreateParticipant(props)
    }

    function disabledButton() {
        if (totalValidated == 5 && fields.password === fields.confirmPassword) {
            setExtraValidation(false)
        } else {
            setExtraValidation(true)
        }
    }

    const onFieldChange = (event) => {
        let value = event.target.value

        if (event.target.id === 'cnpj' || event.target.id === 'cpf') {
            value = value.replace(/[^\w\s]/gi, '')
        }

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

    useEffect(() => {
        handleValidationPassword()
    }, [fields.password, fields.confirmPassword])

    useEffect(() => {
        disabledButton()
        checkValidations(conditionsPassword)
    }, [fields.password, fields.confirmPassword, conditionsPassword])


    useEffect(() => {
        if (validation) {
            handleSubmit(fields)
        }
    }, [validation])

    useEffect(() => {
        if (Object.keys(currentData).length !== 0) {
            setFields({
                ...fields,
                cnpj: currentData.tax_id || '',
                company: currentData.company_name || '',
                representative: currentData.name || '',
                branch: currentData.group || '',
                email: currentData.email || '',
                status: 'Approved',
            })
        }
    }, [currentData])

    useEffect(() => {
        if (location.search) {
            setCurrentData(JSON.parse(atob(location.search.replace('?company=', ''))))
            setDisable(true)
        }
    }, [location])

    return (
        <main className="relative w-full h-auto min-h-screen bg-gradient-to-b from-client-primary to-client-secondary">
            <article className="max-w-5xl h-full mx-auto py-8 px-10 md:px-12 bg-white text-body flex flex-col gap-8">
                <header className="h-16 pb-4 border-b">
                    <div className="w-full flex justify-center">
                        <img src={Car} alt="" />
                    </div>
                </header>

                <section className="flex-1 flex flex-col items-center">
                    <div className="text-center py-7">
                        <h1 className="uppercase font-extrabold text-3xl text-center text-client-primary font-titillium">Finalize o seu cadastro para <br className="hidden lg:block" />participar das campanhas</h1>
                        <p className="text-base pt-3">Preencha os campos abaixo para se cadastrar.</p>
                    </div>

                    <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 lg:w-1/2">
                        <TaxCode
                            label={'CNPJ da sua empresa'}
                            id={'cnpj'}
                            onChange={onFieldChange}
                            value={fields.cnpj}
                            disabled={disable}
                            required
                        />

                        <Text
                            label={'Razão social'}
                            id={'company'}
                            onChange={onFieldChange}
                            value={fields.company}
                            disabled={disable}
                            required
                        />

                        <Text
                            label={'Nome do representante'}
                            id={'representative'}
                            onChange={onFieldChange}
                            value={fields.representative}
                            required
                        />

                        <Select
                            label="Qual filial atende?"
                            id="branch"
                            onChange={onFieldChange}
                            value={fields.branch}
                            required
                            placeholder={'Selecione uma filial'}
                            options={filiais}
                        />

                        <Email
                            label={'E-mail'}
                            id={'email'}
                            onChange={onFieldChange}
                            value={fields.email}
                            disabled={disable}
                            required
                        />

                        <TaxID
                            label={'CPF'}
                            id={'cpf'}
                            onChange={onFieldChange}
                            value={fields.cpf}
                            required
                        />

                        <Password
                            label={'Digite sua senha'}
                            id={'password'}
                            onChange={onFieldChange}
                            value={fields.password}
                            extraValidation={setExtraValidation}
                            totalValidated={totalValidated}
                            compare={fields.confirmPassword}
                            required
                        />

                        <Password
                            label={'Confirme a senha'}
                            id={'confirmPassword'}
                            onChange={onFieldChange}
                            value={fields.confirmPassword}
                            extraValidation={setExtraValidation}
                            compare={fields.password}
                            required
                        />

                        <section className="flex justify-between items-center">
                            <Link to={"/"} className="text-client-primary text-lg font-semibold"><CaretLeft size={24} weight="bold" className="inline" /> Voltar</Link>

                            <Button
                                label={'Cadastrar'} disabled={extraValidation}
                            />
                        </section>
                    </form>
                </section>

                <footer className="pt-6 border-t flex flex-col md:items-center gap-1">
                    <p>
                        Dúvidas? Escreva para: <br className="md:hidden"/> <a href="mailto:atendimento@campanhasrolesrpr.com.br" className="text-client-primary font-semibold">atendimento@campanhasrolesrpr.com.br</a>
                    </p>
                    <small className="text-justify">
                        Antes de participar, consulte o regulamento completo para demais informações, produtos participantes e condições. Imagens meramente ilustrativas.
                    </small>
                </footer>
            </article>
            {modal.state && <Modal />}
        </main>
    )
}