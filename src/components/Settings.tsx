import React from "react";
import Button from "./Button";
import {SettingsScreen} from "./SettingsScreen";
import s from './Settings.module.css';

type SettingsPropsType = {
    changeNumberMax: (valueMax:string)=> void
    changeNumberStart: (valueStart:string)=> void
    changeSet: ()=>void
    disable: boolean
}
export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <div className={s.settingsBody}>
                <div className={s.screenSettings}>
                    <SettingsScreen
                        name1={"max value:"}
                        name2={"start value:"}
                        changeNumberMax={props.changeNumberMax}
                        changeNumberStart={props.changeNumberStart}
                    />
                </div>
            </div>
            <div className={s.buttonsSettings}>
                <div className={s.button}>
                    <Button name={"set"}
                            onClick={props.changeSet}
                            disabled={props.disable}
                    />
                </div>
            </div>
        </div>
    )
}
