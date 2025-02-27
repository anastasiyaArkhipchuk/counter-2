import { Button } from "./Button";
import {ChangeEvent} from "react";

type SettingsPropsType = {
    handleStartValueChange: (newStartValue: number) => void;
    handleMaxValueChange: (newMaxValue: number) => void;
    applySettings: (maxValue: number, startValue: number) => void;
    disabled: boolean;
    maxLimit: number;
    startLimit: number;
};

export const Settings = (
    {handleStartValueChange,handleMaxValueChange,applySettings,disabled,maxLimit,startLimit}
    : SettingsPropsType) => {

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        handleMaxValueChange(Number(e.target.value));
    };

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        handleStartValueChange(Number(e.target.value));
    };

    const onClickHandler = () => {
        applySettings(maxLimit, startLimit);
    };

    return (
        <div>
            <span>max value: </span>
            <input
                value={maxLimit}
                type="number"
                onChange={changeMaxValueHandler}
            />

            <span>start value: </span>
            <input
                value={startLimit}
                type="number"
                onChange={changeStartValueHandler}
            />

            <Button onClick={onClickHandler} disabled={disabled} title={"Set"} />
        </div>
    );
};
