import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCartTypes {
  name: string;
  index: number;
}

export default function ReservationCart({ name, index }: ReservationCartTypes) {
  const dispatch = useDispatch();

  return (
    <div className="reservation-card-container">
      {name}
      <button
        onClick={() => {
          dispatch(removeReservation(index));
          dispatch(
            addCustomer({
              id: uuid(),
              name,
              food: [],
            })
          );
        }}
        style={{ padding: "3px 6px", margin: "0 10px" }}
      >
        Add
      </button>
    </div>
  );
}
