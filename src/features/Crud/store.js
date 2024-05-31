import { configureStore } from "@reduxjs/toolkit";
import Crudslice from "./Crudslice";
const store =configureStore({
    reducer:{
        crud:Crudslice,
    }
});
export default store