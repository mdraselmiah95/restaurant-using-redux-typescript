import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationsState {
  value: string[];
}

const initialState: ReservationsState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export default reservationsSlice.reducer;
