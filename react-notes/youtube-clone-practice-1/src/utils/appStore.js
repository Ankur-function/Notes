import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";
import searchSliceReducer from "./slices/searchSlice"
import chatSliceReducer from "./slices/chatSlice"

const appStore = configureStore({

    reducer:{
        app:appSliceReducer,
        search:searchSliceReducer,
        chat:chatSliceReducer
    }
});

export default appStore;