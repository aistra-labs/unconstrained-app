import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserdata: (state, action) => {
            state.userData = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
})

export const { setUserdata, setToken } = userSlice.actions

export default userSlice.reducer