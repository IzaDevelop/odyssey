import { Article01, Article02, Article03, Article04 } from "../assets";

export function Article() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="font-sans text-3xl text-center tracking-tight sm:text-4xl sm:leading-none">Acesse nossos <span className="text-verde">Artigos</span></h2>
            <p className="text-xl text-center font-light py-5">Fique por dentro de todas as nossas atividades e receba nossos artigos repleto de informações para auxiliar em sua saúde e bem estar.</p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 pb-4">
                <div className="h-40 lg:h-96 rounded-lg duration-300 transform hover:-translate-y-2">
                <img src={Article01} alt="" className="object-cover w-full h-full rounded-ss-3xl rounded-ee-3xl"/>
                </div>
                <div className="h-32 lg:h-96 rounded-lg duration-300 transform hover:-translate-y-2">
                <img src={Article02} alt="" className="object-cover w-full h-full rounded-se-3xl rounded-es-3xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="h-40 lg:h-96 rounded-lg duration-300 transform hover:-translate-y-2">
                <img src={Article03} alt="" className="object-cover w-full h-full rounded-se-3xl rounded-es-3xl"/>
                </div>
                <div className="h-40 lg:h-96 rounded-lg duration-300 transform hover:-translate-y-2">
                <img src={Article04} alt="" className="object-cover w-full h-full rounded-ss-3xl rounded-ee-3xl" />
                </div>
            </div>
        </div>
    )
}