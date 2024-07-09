import React, { useState } from "react";

import styles from "./PurchaseTicket.module.css";

import SelectSeat from "./SelectSeat";
import PurchaseForm from "./PurchaseForm";

const BuyTicket = () => {
  const [seatArray] = useState(() => {
    let array = [];
    for (let i = 1; i <= 30; i++) {
      array = [...array, `${i}`];
    }
    return array;
  });
  const [purchasedSeatArray, setPurchasedSeatArray] = useState([]);
  const [ticketData, setTicketData] = useState({
    name: "",
    nin: "",
    phoneNumber: "",
    email: "",
    ticketType: "",
    seatNumber: "",
  });

  const [seletedSeat, setSeletedSeat] = useState();

  const submitTicket = () => {
    setPurchasedSeatArray([...purchasedSeatArray, ticketData]);
  };
  return (
    <main
      className={styles.container + " m-4 col-9 mx-auto border shadow-sm row"}
    >
      <PurchaseForm
        setTicketData={setTicketData}
        ticketData={ticketData}
        submitTicket={submitTicket}
        purchasedSeatArray={purchasedSeatArray}
      />
      <SelectSeat
        ticketData={ticketData}
        setSeletedSeat={setSeletedSeat}
        setTicketData={setTicketData}
        seatArray={seatArray}
        seletedSeat={seletedSeat}
      />
    </main>
  );
};

export default BuyTicket;
