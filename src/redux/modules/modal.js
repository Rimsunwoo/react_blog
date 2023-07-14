import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: {},
  modalContent: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalCreate: (state, action) => {
      state.modalIsOpen[action.payload] = false;
    },
    modalOpen: (state, action) => {
      state.modalIsOpen[action.payload] = true;
    },
    modalClose: (state, action) => {
      state.modalIsOpen = {};
    },
  },
});

// export
export const { modalCreate, modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
