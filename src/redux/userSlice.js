import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {email, name} = action.payload
            state.email = email
            state.name = name
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer