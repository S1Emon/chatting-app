import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/UserSlice";
import activeChatSlice from "../Slice/activeChatSlice";

const store = configureStore({
  reducer: {
    loginSlice: authSlice,
    activeChat: activeChatSlice,
  },
});

export default store;
