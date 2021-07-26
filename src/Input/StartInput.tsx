import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    text: string
    startCount: number
    getStartCount: (e: ChangeEvent<HTMLInputElement>)=> void


}

export const StartInput: React.FC<InputPropsType> = (props) => {


    return (

        <div className={"SuperInput"}>{props.text}<input type="number" onChange={props.getStartCount} value={props.startCount}/>
        </div>

    )

}