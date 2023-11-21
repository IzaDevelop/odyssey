import { useState } from "react";
import { Layout } from "../../components/Layout";
import { Card } from "../../components/Card";
import { Options } from "../../components/Options";
import { Emergency } from "../../components/Emergency";
import { iconAlert, iconChecklist, iconHeart, iconRemedy } from "../../assets";

export function Home() {
    const [modal, setModal] = useState(false)

    return (
        <Layout>
            <section className="flex flex-wrap justify-between items-center gap-5 p-10">
                <Options />
                
                <Card
                    icon={iconAlert}
                    title={'Chamar emergência'}
                    text={'Encontre ambulâncias perto de chame e chame imediatamente. '}
                    link={''}
                    button={'Chamar socorrista imediatamente'}
                    custom={'border-orange-500'}
                    function={() => setModal(true)}
                />

                <Card
                    icon={iconHeart}
                    title={'Ficha médica'}
                    text={'Tenha acesso aos seus dados de saúde na palma da sua mão! '}
                    link={''}
                    button={'Acessar ficha médica'}
                    custom={'border-red-500'}
                />

                <Card
                    icon={iconChecklist}
                    title={'Checklist de saúde'}
                    text={'Configure seus dados de saúde e mantenha-os atualizados!'}
                    link={''}
                    button={'Realizar checklist de saúde'}
                    custom={'border-green-500'}
                />

                <Card
                    icon={iconRemedy}
                    title={'Medicamentos'}
                    text={'Configure todos os seus medicamentos em um só lugar.'}
                    link={''}
                    button={'Controle de medicamentos'}
                    custom={'border-blue-500'}
                />
            </section>
            {modal && <Emergency open={modal} close={setModal}/>}
        </Layout>
    )
}