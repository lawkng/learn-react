import React, { useState } from 'react';
import { InputElement, InputLabel } from './customform';
import Custombutton from './buttons';

/*
    A composite component:
        - create two input groups and a button
*/
export const AddForm = (props) => {

    const [nameVal, setNameVal] = useState('');
    const [priceVal, setPriceVal] = useState('');

    const addValueWhenButtonClicked = () => {
        console.log(nameVal);
        console.log(priceVal);
        props.addHandler(nameVal, priceVal);
    };

    return (
        <div className="form-group">
            <InputLabel
                id="crypto-name"
                text="Name"></InputLabel><br />
            <InputElement
                textvalue=""
                acceptFormatRegExp="[a-zA-Z]{3,}$"
                id="crypto-name"
                inputType="type"
                placeHolderText="Crypto name"
                validateSuccess={ setNameVal }
                onValidateOptional={ null }></InputElement><br />
            <InputLabel
                id="crypto-price"
                text="Price"></InputLabel><br />
            <InputElement
                textvalue=""
                acceptFormatRegExp="[0-9]{1,}$"
                id="crypto-price"
                inputType="type"
                placeHolderText="Crypto price"
                validateSuccess={ setPriceVal }
                onValidateOptional={ null }></InputElement><br />
            <Custombutton
                cryptoName={nameVal}
                cryptoPrice={priceVal}
                onClick={addValueWhenButtonClicked}
                >Add</Custombutton>
        </div>
    )
}

/*
    A composite component:
        - get a form data model
        - create a table
*/
export const Cryptoform = (props) => {

    const displayJsonList = (models = []) => {
        let renderedList = models.map((model, i) => {
            return (
                <tr key={i}>
                    <td>{model.name}:</td>
                    <td>{model.price}</td>
                </tr>
            )
        })
        return renderedList;
    };

    return (
        <div className="form-group">
            <p><strong>Add cyptocurrency</strong></p>
            <AddForm
                addHandler={props.addHandler}></AddForm>
            <table>
                <tbody>
            {displayJsonList(props.models)}
                </tbody>
            </table>
        </div>
    )
}