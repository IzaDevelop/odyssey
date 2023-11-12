import { Nav } from "./Nav";
import { Navbar } from "./Navbar";
import { useState, useEffect } from "react";
import { HeaderBackground } from "../assets";
import { useLocation } from "react-router-dom";

export function Header() {
    let location = useLocation()

    const [app, setApp] = useState()

    const replacePath = () => {
        var path = location.pathname

        if (path === "/app") {
            setApp(true)
        } else {
            setApp(false)
        }
    }

    useEffect(() => {
        replacePath()
    }, [location])

    return (
        <div className="relative h-[500px]">
            <img
                src={HeaderBackground}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-azul bg-opacity-50 h-full w-full">
                {app ? <Nav /> : <Navbar />}

                <div className="flex flex-col items-center justify-center h-[400px]">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        {app ?
                            <>
                                <h2 className="font-sans text-center text-white text-3xl sm:text-4xl font-bold tracking-tight sm:leading-none pb-10">
                                    Bem-vindo ao seu portal de saúde pessoal
                                </h2>
                                <p className="text-base text-center text-white md:text-lg sm:px-4">
                                    Oferecemos uma plataforma completa e acessível para você acompanhar sua saúde e receber assistência.
                                </p>
                            </>
                            :
                            <>
                                <h2 className="font-sans text-center text-white text-3xl sm:text-4xl font-bold tracking-tight sm:leading-none pb-10">
                                    Conheça mais sobre nossos serviços de emergência médica
                                </h2>
                                <p className="pb-2 text-lg text-white text-center">
                                    Saiba mais!
                                </p>
                                <a
                                    href="#content"
                                    aria-label="Scroll down"
                                    className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="#fff"
                                    >
                                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                    </svg>
                                </a>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};