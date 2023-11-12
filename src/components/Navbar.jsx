import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { CaretDown } from "@phosphor-icons/react";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { useAppContext } from "../context/AppContext";

export function Navbar() {
    const { menu, setMenu } = useAppContext()

    return (
        <div className="relative flex items-center justify-between py-5 px-10 z-10">
            <a
                href="/"
                aria-label="Odyssey"
                title="Odyssey"
                className="inline-flex items-center"
            >
                <img src={Logo} alt="" />
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                    <a
                        href="#sobre"
                        aria-label="Para Socorristas"
                        title="Para Socorristas"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Pacientes/Socorristas <CaretDown size={20} className="inline" />
                    </a>
                </li>
                <li>
                    <a
                        href="#artigos"
                        aria-label="Para Pacientes"
                        title="Para Pacientes"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Artigos <CaretDown size={20} className="inline" />
                    </a>
                </li>
                <li>
                    <a
                        href="#planos"
                        aria-label="Para Pacientes"
                        title="Para Pacientes"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Planos <CaretDown size={20} className="inline" />
                    </a>
                </li>
                <li>
                    <a
                        href="#news"
                        aria-label="Para Pacientes"
                        title="Para Pacientes"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Newsletter <CaretDown size={20} className="inline" />
                    </a>
                </li>
                <li>
                    <Link
                        to={'/app'}
                        aria-label="Nosso App"
                        title="Nosso App"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Nosso App
                    </Link>
                </li>
            </ul>
            <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                    <Link
                        to="/register"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white rounded border border-white"
                        aria-label="Cadastro"
                        title="Cadastro"
                    >
                        Cadastre-se
                    </Link>
                </li>
            </ul>
            <div className="lg:hidden">
                <button
                    aria-label="Abrir"
                    title="Abrir"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setMenu(true)}
                >
                    <List size={30} weight="bold" className="text-white" />
                </button>

                <div className={`absolute top-0 left-0 w-full ${menu ? 'visible' : 'hidden'}`} onClick={() => setMenu(false)}>
                    <div className="p-5 bg-blue-400 text-white">
                        <div className="flex items-center justify-between mb-4 px-5">
                            <div>
                                <a
                                    href="/"
                                    aria-label="Odyssey"
                                    title="Odyssey"
                                    className="inline-flex items-center"
                                >
                                    <img src={Logo} alt="" />
                                </a>
                            </div>
                            <div>
                                <button
                                    aria-label="Fechar"
                                    title="Fechar"
                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                >
                                    <svg className="w-5 text-white" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav>
                            <ul className="space-y-4 px-5">
                                <li>
                                    <a
                                        href="#sobre"
                                        aria-label="Para Socorristas"
                                        title="Para Socorristas"
                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Pacientes/Socorristas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#artigos"
                                        aria-label="Para Pacientes"
                                        title="Para Pacientes"
                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Artigos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#planos"
                                        aria-label="Para Pacientes"
                                        title="Para Pacientes"
                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Planos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#news"
                                        aria-label="Para Pacientes"
                                        title="Para Pacientes"
                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Newsletter
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to={'/app'}
                                        aria-label="Nosso App"
                                        title="Nosso App"
                                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Nosso App
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white rounded border-none bg-azul w-full"
                                        aria-label="Cadastro"
                                        title="Cadastro"
                                    >
                                        Cadastre-se
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};