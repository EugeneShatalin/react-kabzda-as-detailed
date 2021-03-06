import React from "react";
import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} setRatingValue={props.setRatingValue} value={1}/>
            <Star selected={props.value > 1} setRatingValue={props.setRatingValue} value={2}/>
            <Star selected={props.value > 2} setRatingValue={props.setRatingValue} value={3}/>
            <Star selected={props.value > 3} setRatingValue={props.setRatingValue} value={4}/>
            <Star selected={props.value > 4} setRatingValue={props.setRatingValue} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
    return <span
        style={props.selected ? {color: "yellow"} : {color: "white"}}
        onClick={() => props.setRatingValue(props.value)}
    >
        <b>star </b>
    </span>

}