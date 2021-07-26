import React, {ChangeEvent, useState} from "react";

type InputPropsType = {
    text: string
    getMaxCount: (e: ChangeEvent<HTMLInputElement>)=> void
}

export const MaxInput: React.FC<InputPropsType> = (props) => {


    return (
        <div className={"SuperInput"}>{props.text}<input type="number" onChange={props.getMaxCount}/>
        </div>

    )

}