import { Nav } from "./Nav";
import { Modal } from "./Modal";
import { Footer } from "./Footer";
import { useAppContext } from "../context/AppContext";

export function Layout(props) {
    const { modal } = useAppContext()

    return (
        <>
            <Nav/>
            <main className={`w-full relative`}>
                <article className={`mx-auto max-w-7xl min-h-[calc(100vh-150px)] flex flex-col`}>
                    {props.children}
                </article>
            </main>
            <Footer />
            {modal.state && <Modal />}
        </>
    )
}