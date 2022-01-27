import React from "react";
import { useDispatch } from "react-redux";
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
        onClick={() => dispatch(removeReservation(index))}
        style={{ padding: "3px 6px", margin: "0 10px" }}
      >
        Add Cart
      </button>
    </div>
  );
}
