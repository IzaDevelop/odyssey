import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

export function Card(props) {
    return (
        <div className="w-full md:max-w-[290px] h-30">
            <div className={`p-5 bg-white border ${props.custom} rounded shadow-sm`}>
                <div className="flex items-center justify-center w-12 h-12 pb-4">
                    <img src={props.icon} alt="" />
                </div>
                <h6 className="mb-2 text-xl font-semibold leading-5">{props.title}</h6>
                <p className="py-5 text-gray-900">
                    {props.text}
                </p>
                <Link
                    to={props.link}
                    className="text-neutral-500 text-sm"
                >
                    {props.button} <CaretRight className="inline" size={20} />
                </Link>
            </div>
        </div >
    )
}