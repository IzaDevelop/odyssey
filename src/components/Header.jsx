import { Navbar } from "./Navbar";
import { HeaderBackground } from "../assets";

export function Header() {
    return (
        <div className="relative h-[500px]">
            <img
                src={HeaderBackground}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-azul bg-opacity-50 h-full w-full">
                <Navbar />

                <div className="flex flex-col items-center justify-center h-[400px]">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                        <h2 className="font-sans text-center text-white text-3xl sm:text-4xl font-bold tracking-tight sm:leading-none">
                            Serviços de emergência médica
                        </h2>
                        <div className="py-10 text-lg text-white text-center">
                            <a href="" className="border border-white rounded px-5 py-2">Assista ao nosso vídeo</a>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
};