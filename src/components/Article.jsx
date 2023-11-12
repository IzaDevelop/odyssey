export function Article() {
    return (
        <div className="px-4 pt-5 pb-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:pb-20" id='artigos'>
            <div className="md:mb-8">
                <h2 className="mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:leading-none md:mb-6 group">
                    <span className="inline-block">
                        Explore o Conhecimento Científico em Saúde:
                        <br className="hidden lg:block" /> {' '}
                        Descubra Nossos Artigos Inovadores!
                    </span>
                </h2>
                <p className="text-gray-700 lg:text-md mb-5">
                    Você está convidado a mergulhar no vasto mundo da pesquisa científica em saúde através dos nossos artigos especializados. Nossa plataforma oferece acesso a uma coleção abrangente de estudos inovadores, abordando temas essenciais para o avanço da saúde e bem-estar.
                </p>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://assets-global.website-files.com/6320c82a55215f60d9e97f8b/63c2da0b3d2f73304af4621d_tendencias-de-tecnologia-na-saude-em-2023.jpg"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Inovação e Avanços Tecnológicos</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Acompanhe as mais recentes inovações tecnológicas aplicadas à saúde. Dos avanços em terapias personalizadas à implementação de tecnologias de ponta, nossos artigos destacam o futuro promissor da assistência médica.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.impresa.pt/sicnot/2022-04-06-psicologia-psiquiatria-estetoscopio-saude-mental"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Bem-Estar e Saúde Mental
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Explore artigos dedicados ao bem-estar global, incluindo saúde mental e práticas de autocuidado. Descubra abordagens holísticas para promover uma vida saudável e equilibrada.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://neomed.com.br/wp-content/uploads/2021/07/CONHECA-AS-TENDENCIAS-GLOBAIS-DE-INVESTIMENTO-EM-SAUDE.jpg"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Tendências Emergentes</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Fique à frente das últimas descobertas e tendências no campo da saúde. Nossos pesquisadores estão comprometidos em explorar novas fronteiras para melhorar a compreensão e o tratamento de diversas condições.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://www.cepic.com.br/blog/wp-content/uploads/2023/03/pesquisa-clinica-e-suas-fases.png"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                Pesquisa Clínica e Estudos de Caso
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Profundize-se em pesquisas clínicas e estudos de caso que oferecem insights valiosos sobre diagnósticos, tratamentos eficazes e melhores práticas clínicas. Conheça os desafios enfrentados pelos profissionais de saúde e as soluções encontradas.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Descobrir galeria
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};