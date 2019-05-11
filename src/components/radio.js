import React, { Fragment, useState } from 'react';
import { InputLabel } from './customform.js';

/*
    Radio input
*/
export const RadioElement = (props) => {
    return (
        <div className="radio-input">
            <input
                checked={props.checked}
                className={props.cssClass}
                id={props.id}
                name={props.name}
                type="radio"
                value={props.value}
                onChange={ () => console.log(`radio changed ${props.value}`) } />
            <InputLabel
                id={props.id}
                text={props.text}></InputLabel>
        </div>
    )
}

const createRadioElement = (models = [], 
                            selectedRadioValue = '', 
                            setRadioValue
                            ) => {

    const onChangeHandler = (e) => {
        setRadioValue(e.target.value);
    }

    let renderedRadios = models.map((model, i) => {
      return (
        <Fragment key={model.id + i}>
        <div className="radio-input">
            <input
                checked={selectedRadioValue === model.value ? true : false}
                id={model.id}
                
                name={model.name}
                value={model.value}
                text={model.labeltext}
                type="radio"
                onChange={ (e) => onChangeHandler(e) } />
            <InputLabel
                id={model.id}
                text={model.labeltext}></InputLabel>
        </div>
        </Fragment>
      )  
    })
    return renderedRadios;
}

/*
    Radio group
*/
export const RadioGroup = (props) => {
    //TODO where do i put the selected radio state?
    const [selectedRadio, setSelectedRadio] = useState(props.selectedRadioValue);

    return (
        <div className="radio-group">
            {createRadioElement(
                props.models, 
                selectedRadio, 
                setSelectedRadio,
                props.onTabSelected)}
        </div>
    )
}