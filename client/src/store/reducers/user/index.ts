import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    currentUser: {},
    isAuth: false
}

const userReducer = createSlice({
    name: 'file',
    initialState,
    reducers: {

    }
})

export default userReducer.reducer