import React from "react";

interface ReservationCartTypes {
  name: string;
}

export default function ReservationCart({ name }: ReservationCartTypes) {
  return <div className="reservation-card-container">{name}</div>;
}
