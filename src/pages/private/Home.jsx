import { Tag } from "../../components/Tag";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import { AppLogo, iconAlert, iconChecklist, iconHeart, iconRemedy } from "../../assets";

export function Home() {
    return (
        <Layout>
            <section className="flex flex-wrap justify-between items-center gap-5 p-10">
                <div className="w-full">
                    <div className="max-w-screen-sm sm:text-center sm:mx-auto">
                        
                        <h2 className="mb-4 font-sans text-xl font-bold tracking-tight sm:text-3xl sm:leading-none">
                            Bem-vindo ao seu portal de saúde pessoal
                        </h2>
                        <p className="text-base md:text-lg sm:px-4">
                            Oferecemos uma plataforma completa e acessível para você acompanhar sua saúde e receber assistência em momentos críticos.
                        </p>
                        <hr className="w-full my-8 border-gray-300" />
                    </div>
                </div>

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
        </Layout>
    )
}