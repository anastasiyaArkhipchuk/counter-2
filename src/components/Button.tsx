

type ButtonPropsType = {
    onClick?: () => void,
    disabled?: boolean,
    title: string,
}

export const Button = ({onClick,disabled,title}: ButtonPropsType) => {
    return (
        <button onClick={onClick} disabled={disabled}>{title}</button>
    )
}