import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout(props) {

    return (
        <>
            <Nav/>
            <main className={`w-full relative min-h-screen`}>
                <article className={`mx-auto max-w-7xl min-h-[calc(100vh-80px)] flex flex-col`}>
                    {props.children}
                </article>
            </main>
            <Footer />
        </>
    )
}