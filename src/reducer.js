export const initialState = {
    user: null,
    playlists: [],
    playing: false, 
    item: null,
    // REMOVE after finished developing...
    // token: 'BQB0nGHvGyUIb9OFe83xIX8rSYzWv1O1x_eYB56aJ-X7inprib9p4VWk2erPBUoOiBcDR42Xt8WGZ79XCq60XVSGE-dFKSvSTrZgzXpOV1JZU6J4xL3tneE4ypm9IHRwfQd8nCWz-mymMfol-d71JQgm6YUuIn_h',
}
const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;