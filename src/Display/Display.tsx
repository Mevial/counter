import React from "react";

type DisplayPropsType = {
    count: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    return (

        <div className={props.count === 5 ? 'DisplayNum DisplayRed' : 'DisplayNum'}>{props.count}
        </div>
    )

}