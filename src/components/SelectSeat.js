import React from "react";
import styles from "./PurchaseTicket.module.css";
import seat from "../assets/seat.svg";
import takenSeat from "../assets/takenseat.svg";
const SelectSeat = (props) => {
  return (
    <div className='col-4 bg-danger text-white'>
      <h3>Buy Tickets</h3>
      <section className={"p-3"}>
        <div className={styles.selectSeat + " row g-2"}>
          {props.seatArray.map((item, index) => (
            <div
              onClick={(e) => {
                props.setSeletedSeat(item);
                props.setTicketData({ ...props.ticketData, seatNumber: item });
              }}
              seatNumber={item}
              key={index}
              className={`col ${styles.image}`}
            >
              {props.seletedSeat == item ? (
                <img width={30} src={takenSeat} alt='' />
              ) : (
                <img width={30} src={seat} alt='' />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SelectSeat;
