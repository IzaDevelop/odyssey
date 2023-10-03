import { Link } from "react-router-dom";
import { AppLogo, Logo } from "../assets";
import { CaretDown } from "@phosphor-icons/react";
import { useAppContext } from "../context/AppContext";
import { List } from "@phosphor-icons/react/dist/ssr/List";

export function Nav() {
    const { menu, setMenu } = useAppContext()

    return (
        <div className="relative flex items-center justify-between py-5 px-10 z-10">
            <a
                href="/"
                aria-label="Odyssey"
                title="Odyssey"
                className="inline-flex items-center"
            >
                <img src={AppLogo} alt="" />
            </a>
            <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                    <Link
                        to={'/'}
                        aria-label="Inicio"
                        title="Inicio"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to={''}
                        aria-label="Emergência"
                        title="Emergência"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Emergência <CaretDown size={20} className="inline" />
                    </Link>
                </li>
                <li>
                    <Link
                        to={''}
                        aria-label="Pesquisa"
                        title="Pesquisa"
                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Pesquisa <CaretDown size={20} className="inline" />
                    </Link>
                </li>
            </ul>
            <ul className="items-center hidden space-x-8 lg:flex">
            </ul>
            <div className="lg:hidden">
                <button
                    aria-label="Abrir"
                    title="Abrir"
                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                    onClick={() => setMenu(true)}
                >
                    <List size={30} weight="bold" className="text-azul" />
                </button>

                <div className={`absolute top-0 left-0 w-full ${menu ? 'visible' : 'hidden'}`} onClick={() => setMenu(false)}>
                    <div className="p-5 bg-azul text-white">
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
                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                >
                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
                                    <Link
                                        to={'/'}
                                        aria-label="Nosso App"
                                        title="Nosso App"
                                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={''}
                                        aria-label="Nosso App"
                                        title="Nosso App"
                                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Emergência
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={''}
                                        aria-label="Nosso App"
                                        title="Nosso App"
                                        className="font-medium tracking-wide transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Pesquisa
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}