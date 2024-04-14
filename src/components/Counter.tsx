import React from "react";
import Button from "./Button";
import {CounterScreen} from "./CounterScreen";
import s from './Counter.module.css';

type CounterPropsType = {
    count: string
    changeCount: () => void
    resetCount: () => void
    disableReset: boolean
    disableInc: boolean
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterBody}>
            <div className={s.screenCounter}>
                <CounterScreen
                    count={props.count}
                    disable={props.disableInc}
                />
            </div>
            <div className={s.buttonsCounter}>
                <div className={s.buttonINC}>
                    <Button name={"inc"}
                            onClick={props.changeCount}
                            disabled={props.disableInc}

                    />
                </div>
                <div className={s.buttonRESET}>
                    <Button name={"reset"}
                            onClick={props.resetCount}
                            disabled={props.disableReset}
                    />
                </div>
            </div>
        </div>
    )
}
