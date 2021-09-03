//Actions 

export const setFavorite = payload => ({
    type: "SET_FAVORITE",
    payload
})

export const deleteFavorite = payload => ({
    type: "DELETE_FAVORITE",
    payload
})

export const loginRequest = payload => ({
    type: "LOGIN_REQUEST",
    payload
})

export const logoutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload
})

export const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload
})

export const getSourceVideo = payload => ({
    type: "GET_SOURCE_VIDEO",
    payload
})

export const setSerach = payload => ({
    type: "SET_SEARCH",
    payload
})