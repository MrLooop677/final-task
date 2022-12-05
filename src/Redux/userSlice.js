import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
    isRegistered:false
   
  },
  reducers: {
    logIn(state,action){
      state.user=action.payload
    },
    logOut(state){
      state.user=null
    },
    register(state){
      state.isRegistered=true
    },
    closeRegister(state){
      state.isRegistered=false
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { closeRegister,register,logIn, logOut} = userSlice.actions
export const selectUser=(state)=>state.user.user
export const Registered=(state)=>state.user.isRegistered
export default userSlice.reducer