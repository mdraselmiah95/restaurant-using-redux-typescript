import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCart from "./components/ReservationCart";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const MySwal = withReactContent(Swal);
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
    MySwal.fire({
      title: "Thank you",
      text: "Thank you for Reservation 💚",
      icon: "success",
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCart name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              onChange={(e) => setReservationNameInput(e.target.value)}
              value={reservationNameInput}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
