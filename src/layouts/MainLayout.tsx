import { Outlet } from "react-router-dom";

import { Header } from "../components";
import css from './mainLayout.module.css'
import { useAppContext } from "../hooks";

const MainLayout = () => {
    const {themeTrigger} = useAppContext();
    return (
        <div className={`${themeTrigger ? css.mainStyleDerkTheme : css.mainStyleLightDark}`}>
            <Header/>
            <div><Outlet/></div>
        </div>
    );
};

export { MainLayout };