export const createName = ({ ownname }) => {
    return {
        type: 'CREATE_NAME',
        ownname,
    }
};

export const changeName = ({ ownname }) => {
    return {
        type: 'CHANGE_NAME',
        ownname,
    }
};