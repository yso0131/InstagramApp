const initialState = {
    ownname: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NAME':
            return {
                ...state,
                ownname: [...state.ownname, action.ownname]
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                ownname: [...state.ownname, action.ownname]
            }
        default:
            return state;
    }
}

export default reducer;