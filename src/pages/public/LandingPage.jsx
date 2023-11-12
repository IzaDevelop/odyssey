import { Layout } from "../../components/Layout";
import { Content } from "../../components/Content";
import { Article } from "../../components/Article";
import { Price } from "../../components/Price";
import { News } from "../../components/News";

export function LP() {
    return (
        <Layout>
            <article id="content" className="w-full relative min-h-screen">
                <section className="w-full min-h-[calc(100vh-80px)] flex flex-col">
                    <Content
                        title={'Para'}
                        emphasis1={'PACIENTES'}
                        emphasis2={'SOCORRISTAS'}
                        custom1={'text-rosa'}
                        custom2={'text-azul'}
                        text={'um serviço de emergência pronto para te atender 24h com profissionais qualificados e referêacias na área da saúde para pacientes e ambulâncias adaptadas com equipamentos de altíssima qualidade e máximo conforto para socorristas, com tecnologia de ponta para receber os chamados.'}
                        button={'Saiba mais !'}
                        image1={'https://star.med.br/wp-content/uploads/2022/10/medica-em-relacao-com-o-paciente-pediatra.jpg'}
                        image2={'https://centraldecursos.com/wp-content/uploads/2021/02/Curso-de-socorrista.jpg'}
                        alt1={'paciente'}
                        alt2={'socorrista'}
                        id={'sobre'}
                    />

                    <Article/>

                    <Price/>

                    <News/>
                </section>
            </article>
        </Layout>
    )
}