import React from "react";

type ButtonPropsType = {
    disabled: boolean
    callback: () => void
    text: string
}

export const Button  = (props: ButtonPropsType) => {
    return (
    <button className={"Button__counter"} disabled={props.disabled}
            onClick={props.callback}>
        {props.text}
    </button>
    )
}