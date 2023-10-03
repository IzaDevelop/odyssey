import { Navigate, Route, Routes } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/private/Home";

import { LP } from "../pages/public/LandingPage";
import { Register } from "../pages/public/Register";

export function Router() {
    const { loadingScreen } = useAppContext()

    return (
        <ScrollToTop>
            {!loadingScreen ?
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />

                    <Route element={<PublicRoute />}>
                        <Route path="/" element={<LP />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    {/* <Route element={<PrivateRoute />}> */}
                        <Route path="/home" element={<Home />} />
                    {/* </Route> */}
                </Routes>
                :
                <Loading />
            }
        </ScrollToTop>
    )
}