import { News } from "../../components/News";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Content } from "../../components/Content";
import { Article } from "../../components/Article";
import { Paciente, Socorrista } from "../../assets";
import { useAppContext } from "../../context/AppContext";

export function LP() {
    return (
        <>
            <Header />
            <article id="content" className="w-full relative min-h-screen">
                <section className="w-full min-h-[calc(100vh-80px)] flex flex-col">
                    <Content
                        id={'socorristas'}
                        title={'Para'}
                        emphasis={'SOCORRISTAS,'}
                        custom={'text-azul'}
                        text={'ambulâncias adaptadas com equipamentos de altíssima qualidade e máximo conforto para seus plantões com tecnologia de ponta para receber os chamados.'}
                        button={'Saiba mais!'}
                        image={Socorrista}
                        alt={'paciente'}
                    />

                    <Content
                        id={'pacientes'}
                        title={'Para'}
                        emphasis={'PACIENTES,'}
                        custom={'text-rosa'}
                        text={'um serviço de emergência pronto para te atender 24h com profissionais qualificados e referêacias na área da saúde.'}
                        button={'Saiba mais!'}
                        image={Paciente}
                        alt={'paciente'}
                    />

                    <Article />

                    <News />
                </section>
            </article>
            <Footer />
        </>
    )
}