import React from "react";

type DisplayPropsType = {
    displayValue: number
    maxCount: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    const maxInputValue = props.maxCount

    return (

        <div className=
                 {props.displayValue === maxInputValue ? 'DisplayNum DisplayRed' : 'DisplayNum'}
        >{props.displayValue}
        </div>

    )

}