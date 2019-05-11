export const actionChangeFormFirstName = (val) => {
    return {
        type: 'CHANGE_FORM',
        payload: {
            newState: {
                firstname: val
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