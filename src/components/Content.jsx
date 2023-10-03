export function Content(props) {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl" id={props.id}>
            <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl">
                        <p className="text-xl font-light pb-2">
                            {props.title}
                        </p>
                        <h2 className={`uppercase max-w-lg font-sans text-3xl font-bold tracking-tight ${props.custom} sm:text-4xl sm:leading-none`}>
                            {props.emphasis}
                        </h2>
                        <p className="text-xl font-light py-5">
                            {props.text}
                        </p>
                        <button className="text-verde text-lg font-semibold">{props.button}</button>
                    </div>
                </div>
                <div>
                    <img
                        className="object-contain w-full h-40 sm:h-96"
                        src={props.image}
                        alt={props.alt}
                    />
                </div>
            </div>
        </div>
    );
};