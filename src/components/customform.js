import React, { useState } from 'react';

/*
    Pure Input Element
*/
export const InputElement = (props) => {

    const [isValidInput, setIsValidInput] = useState(true);
    const [inputVal, setInputVal] = useState(props.textvalue);

    const validateInput = (val) => {
        //TODO this should accept and eval a regular expression on the val
        const re = new RegExp(props.acceptFormatRegExp);
        const result = re.test(val);
        console.log(`The val: ${val} The result: ${result}`);
        //return (val.length > 0);
        return result;
    }

    const getClassName = (bool) => {
        const cssClassString = 'text-box ' + (bool ? '' : 'is-invalid');
        return cssClassString;
    }

    const onBlurHandler = (event) => {
        const inputValidated = validateInput(event.target.value);
        setIsValidInput(inputValidated);
        // pass the error state back to parent
        if (props.onValidateOptional) {
            props.onValidateOptional(inputValidated);
        }
        if (inputValidated) {
            // it is an validate value so we can put it into the Store
            // call action to update redux here
            props.validateSuccess && props.validateSuccess(event.target.value);
        }
    }

    const onChangeHandler = (val) => {
        //setInputVal(val);
       
    }

    const onFocusHandler = (event) => {
        setIsValidInput(true);
    }

    return (
        <input
            className={getClassName(isValidInput)}
            type={props.inputType}
            placeholder={props.placeHolderText}
            id={props.id}
            defaultValue={inputVal}
            onBlur={ (e) => onBlurHandler(e) } 
            onChange={ (e) => onChangeHandler(e.target.value) }
            onFocus={ (e) => onFocusHandler(e) } />
    )
}

/*
    Label Title of Pure Input Element
*/
export const InputLabel = (props) => {
    return (
        <label
            htmlFor={props.id}>{props.text}</label>
    )
}

/*
    Error Message of Pure Input Element
*/
export const InputErrorMessage = (props) => {
    const getClassName = (bool) => {
        const cssClassString = 'error-message ' + (bool ? '' : 'is-invalid');
        return cssClassString;
    }

    return (
        <label
            className={getClassName(props.isValid)}
            htmlFor={props.id}>{props.text}</label>
    )
}

/*
    Continue button
*/
export const ContinueButton = (props) => {

    const onClickHandler = (event) => {
        event.preventDefault();
        console.log('Continue button clicked');
    }

    return (
        <button
            onClick={ (e) => onClickHandler(e) }>{props.buttonText}</button>
    )
}

/*
    A composite component combining:
        - input title
        - input element
        - validated flag
        - input error message
*/
export const InputGroup = (props) => {

    const [isValidInputGroup, setIsValidInputGroup] = useState(true);
    const [showValidatedFlag, setShowValidatedFlag] = useState(false);

    const onValidationChange = (isValid) => {
        /* callback for child component - a child input component will call this to pass
        any data or state back to this composite component
        */
        setIsValidInputGroup(isValid);
        // this prop value will be passed down to the error message label
        setShowValidatedFlag(isValid);
    }

    const getClassForValidatedFlag = (bool) => {
        const cssClassString = 'validated-flag ' + (bool ? 'is-valid' : '');
        return cssClassString;
    }

    return (
        <div className="input-group">
            <InputLabel
                id={props.id}
                text={props.text}></InputLabel>
            <InputElement
                textvalue={props.textvalue}
                acceptFormatRegExp={props.validationRegExp}
                id={props.id}
                inputType={props.type}
                placeHolderText={props.text}
                validateSuccess={props.validateSuccess}
                onValidateOptional={onValidationChange}></InputElement>
            <span className={getClassForValidatedFlag(showValidatedFlag)}>Done</span>
            <InputErrorMessage
                id={props.id}
                text={props.errorText}
                isValid={isValidInputGroup}></InputErrorMessage>
        </div>
    )
}

/*
    A composite component combining:
        - multiple input groups
*/
export const Customform = (props) => {
/*
    - each InputGroup should have a function that can be called to validate the input?
    - when Continue button is clicked, it will go through each InputGroup, call the valiation function?
    - how does Continue button knows all the InputGroup is validated and is ready to move on?
*/

    return (
        <div className="form-group">
            <form noValidate>
                <InputGroup
                    id="text1"
                    errorText="Please enter first name"
                    text="First name"
                    type="text"
                    textvalue={props.firstNameVal}
                    validateSuccess={props.updateFirstName}
                    validationRegExp="[a-zA-Z]{1,}$"></InputGroup>
                <InputGroup
                    id="text2"
                    errorText="Please enter middle name"
                    text="Middle name"
                    type="text"
                    textvalue={props.middleNameVal}
                    validateSuccess={props.updateMiddleName}
                    validationRegExp="[a-zA-Z]{1,}$"></InputGroup>
                <InputGroup
                    id="text3"
                    errorText="Please enter last name"
                    text="Last name"
                    type="text"
                    textvalue={props.lastNameVal}
                    validateSuccess={props.updateLastName}
                    validationRegExp="[a-zA-Z]{1,}$"></InputGroup>
                <div className="button-group">
                    <ContinueButton buttonText="Continue..."></ContinueButton>
                </div>
            </form>
        </div>
    )
}

/*
    A composite component:
        - get a form data model
        - create mulitple input groups
*/
export const Jsonform = (props) => {

    /* 
        TODO 
        - filter the models by the type [text, radio, select, checkbox]
        - call the matching custom element
    */
    const createJsonForm = (models = []) => {
        let createdForm = models.map((model, i) => {
            return (
                <InputGroup
                    id={model.id}
                    errorText={model.errortext}
                    key={i}
                    placeholder={model.placeholdertext}
                    text={model.labeltext}
                    type={model.type}
                    validationRegExp={model.regexp}></InputGroup>
            )
        })
        return createdForm;
    };

    return (
        <div className="form-group">
            <p>The following form elements will be created from <strong>JSON data</strong>.</p>
            {createJsonForm(props.models)}
        </div>
    )
}