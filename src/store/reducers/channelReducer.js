const initState = {
    currentId: ''
};

export const channelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return state;
        case 'ADD_CHANNEL_FAILED':
            return state;
        case 'UPDATE_CURRENT_CHANNEL':
            return {
                currentId: action.id
            }
        /* 
        case 'USER_SIGN_IN_SUCCESS':
            return state;
        case 'USER_SIGN_IN_FAILED':
            return state; */
        default:
            return state;
    }
}