import { Link } from "react-router-dom";

export function Tag(props) {
    return(
        <Link to={props.link} className="border border-neutral-600 text-neutral-600 p-5 rounded max-w-[150px] text-center">
            {props.text}
        </Link>
    )
}