import { ChangeEvent } from "react";
import { Switch } from "@mui/material";

import { useAppContext } from "../../hooks";

const Switcher = () => {
    const {themeTrigger, setThemeTrigger} = useAppContext();
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setThemeTrigger(event.target.checked)
    }

    return (
        <div>
            <span>light</span>
            <Switch
                checked={themeTrigger}
                onChange={handleChange}
                inputProps={{'aria-label': 'controlled'}}
            />
            <span>dark</span>
        </div>
    );
}

export { Switcher };