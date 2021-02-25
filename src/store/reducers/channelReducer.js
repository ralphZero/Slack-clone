const initState = {};

export const channelReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CHANNEL_SUCCESS':
            return state;
        case 'ADD_CHANNEL_FAILED':
            return state;
        default:
            return state;
    }
}