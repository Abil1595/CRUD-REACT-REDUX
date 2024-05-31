import {createSlice} from '@reduxjs/toolkit'
const initialState={
    data: localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[],
    imageUrl:'',

}
const Crudslice  = createSlice({
    name:'crud',
    initialState,
    reducers:{
        add(state,action){
            state.data=[...state.data,{
                ...action.payload
            }]
        localStorage.setItem("data",JSON.stringify(state.data));
        },
        remove(state,action)
        {
            const remove=action.payload;
            state.data=state.data.filter(user=>user.id !== remove)
            localStorage.setItem("data",JSON.stringify(state.data));
        },
        update(state,action)
        {
            const update=action.payload;
            state.data=state.data.map(user=>user.id === update.id ?{...user,...update}:user
                

            )
            localStorage.setItem("data",JSON.stringify(state.data));
        },
    }
})
export const {add,remove,update}=Crudslice.actions;
export default Crudslice.reducer;