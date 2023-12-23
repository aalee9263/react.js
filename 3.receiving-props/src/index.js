import React from 'react';
import reactDOM from 'react-dom';
import "./index.css"


let Card = (props) => {
    return<div>Hello {props.firstName}</div>
}

//If function return in one line then..

let Card = (props) => <div>Hello {props.firstName}</div>

//If there are only one parameter then..erase the braces around 'props'

let Card = props => <div>Hello {props.firstName}</div>
