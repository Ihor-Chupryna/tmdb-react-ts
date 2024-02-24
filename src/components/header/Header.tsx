import { FC } from "react";
import css from './header.module.css';

interface IProps {

}

const theme = false

const Header: FC<IProps> = () => {
    return (
        <div className={`${css.mainStyle} ${theme ? css.headerLightTheme : css.headerDarkTheme}`}>
            <h1>Header</h1>
        </div>
    );
};

export { Header };