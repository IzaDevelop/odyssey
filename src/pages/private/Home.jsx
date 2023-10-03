import { Tag } from "../../components/Tag";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { iconAlert, iconChecklist, iconHeart, iconRemedy } from "../../assets";

export function Home() {
    return (
        <Layout>
            <section className="flex flex-wrap justify-between items-center gap-3 p-10">
                <Card
                    icon={iconAlert}
                    title={'Chamar emergência'}
                    text={'Encontre ambulâncias perto de chame e chame imediatamente. '}
                    link={''}
                    button={'Chamar socorrista imediatamente'}
                    custom={'border-orange-500'}
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
                    text={'Configure seus dados de saúde e mantenha-os sempre atualizados!'}
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

            <section className="flex flex-col justify-start flex-wrap gap-3 pb-10 px-10">
                <h1 className="text-xl md:text-3xl font-semibold">Acesse</h1>
                <div className="flex justify-start items-center flex-wrap gap-3 ">
                    <Tag
                        link={''}
                        text={'Suas ultimas chamadas'}
                    />

                    <Tag
                        link={''}
                        text={'Histórico de emergências'}
                    />

                    <Tag
                        link={''}
                        text={'Registros de saúde'}
                    />
                </div>
            </section>
        </Layout>
    )
}