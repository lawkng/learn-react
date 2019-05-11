export const actionUpdateFormField = (val) => {
    return {
        type: 'CHANGE_FORM_FIELD',
        payload: {
            newState: {
                firstname: val,
                middlename: val,
                lastname: val
            }
        }
    }
};

export const actionUpdateFirstName = (val) => {
    return {
        type: 'UPDATE_FIRST_NAME',
        payload: {
            newState: {
                firstname: val
            }
        }
    }
};

export const actionUpdateMiddleName = (val) => {
    return {
        type: 'UPDATE_MIDDLE_NAME',
        payload: {
            newState: {
                middlename: val
            }
        }
    }
};

export const actionUpdateLastName = (val) => {
    return {
        type: 'UPDATE_LAST_NAME',
        payload: {
            newState: {
                lastname: val
            }
        }
    }
};

export const actionChangePrice = {
    type: 'CHANGE_PRICE',
    payload: {
        newState: '20'
    }
};