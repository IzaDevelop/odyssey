export function Content(props) {
    return (
        <div className="px-4 pb-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:pb-20" id={props.id}>
            <div className="w-full pt-10">
                <div className="w-full">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                        {props.title} {' '}
                        <span className={`uppercase max-w-lg font-sans text-3xl font-bold tracking-tight ${props.custom1} sm:text-4xl sm:leading-none`}>
                            {props.emphasis1}
                        </span> e <span className={`uppercase max-w-lg font-sans text-3xl font-bold tracking-tight ${props.custom2} sm:text-4xl sm:leading-none`}>
                            {props.emphasis2}
                        </span>.
                    </h2>
                    <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                        {props.text}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="inset-y-0 top-0 right-0 w-full">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={props.image1}
                        alt={props.alt1}
                    />
                </div>
                <div className="inset-y-0 top-0 right-0 w-full">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={props.image2}
                        alt={props.alt2}
                    />
                </div>
            </div>

        </div>
    );
};