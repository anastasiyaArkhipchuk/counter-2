import React from "react";
import s from './Counter.module.css';
type CounterScreenPropsType = {
count: string
    disable: boolean
}

export const CounterScreen = (props: CounterScreenPropsType) => {
    let isNumber = !isNaN(Number(props.count))
    let styles = `${isNumber ? s.numberText : s.Text} 
    ${props.count === "incorrect value" ? s.TextRed : s.Text}
    ${props.disable === true ? s.numberTextRed : s.numberText}`

    return (
        <div className={styles}>{props.count}</div>
    )
}