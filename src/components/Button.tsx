import React from "react";
type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}
const Button = (props: ButtonPropsType) => {
    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.name}</button>
    )
}
export default Button;