import {Button} from "./Button";

type CounterProps = {
    currentCount: number;
    incrementCount: () => void;
    resetCount: () => void;
    disabled: boolean;
    maxLimit: number;
    message: string| null;
    setOnSet: ()=>void;
}

export const Counter = ({currentCount,incrementCount,resetCount,disabled,maxLimit, message,setOnSet }: CounterProps) => {

    return (

        <div>
            <div>
                <div>
                    {message || currentCount}
                </div>
            </div>
            <Button onClick={incrementCount} disabled={!disabled || maxLimit === currentCount} title={"inc"}/>
            <Button onClick={resetCount} disabled={!disabled} title={"reset"}/>
            <Button title={"set"} onClick={setOnSet}/>
        </div>
    )
}