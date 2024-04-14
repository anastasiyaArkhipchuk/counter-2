import React, {ChangeEvent} from "react";

type SettingsScreenPropsType = {
    name1: string
    name2: string
    changeNumberMax: (valueMax:string)=> void
    changeNumberStart: (valueStart:string)=> void
}
export const SettingsScreen = (props: SettingsScreenPropsType) => {
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueMax=e.currentTarget.value
        props.changeNumberMax(valueMax)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let valueStart=e.currentTarget.value
        props.changeNumberStart(valueStart)
    }

    return (
        <div>
            <div>
                <div>{props.name1}</div>
                <div>{props.name2}</div>
            </div>
           <div>
               <input type={"number"}
                      placeholder={"5"}
                      onChange={onChangeMaxHandler}/>
               <input type={"number"}
                      placeholder={"0"}
                      onChange={onChangeStartHandler}/>
           </div>
        </div>
    )
}