import React, { useState } from "react";
import seat from "../assets/seat.svg";
import takenSeat from "../assets/takenseat.svg";
import styles from "./PurchaseTicket.module.css";

const PurchaseTicket = () => {
  const [seatArray] = useState(() => {
    let array = [];
    for (let i = 1; i <= 30; i++) {
      array = [...array, `${i}`];
    }
    return array;
  });
  const [ticketData, setTicketData] = useState({
    name: "",
    nin: "",
    phoneNumber: "",
    email: "",
    ticketType: "",
    seatNumber: "",
  });

  const [seletedSeat, setSeletedSeat] = useState([]);

  const submitTicket = () => {
    console.log(ticketData);
  };
  return (
    <main
      className={styles.container + " m-4 col-9 mx-auto border shadow-sm row"}
    >
      <div className='col-8 p-3'>
        <div className={`mb-3 `}>
          <input
            type='name'
            className='form-control'
            placeholder='Name'
            onChange={(e) =>
              setTicketData({ ...ticketData, name: e.target.value })
            }
          />
        </div>
        <div className={`mb-3 `}>
          <input
            type='number'
            onChange={(e) =>
              setTicketData({ ...ticketData, nin: e.target.value })
            }
            className='form-control'
            placeholder='NIN'
          />
        </div>
        <div className={`mb-3 `}>
          <input
            type='tel'
            className='form-control'
            placeholder='Phone Number'
            onChange={(e) =>
              setTicketData({ ...ticketData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className={`mb-3 `}>
          <input
            type='email'
            onChange={(e) =>
              setTicketData({ ...ticketData, email: e.target.value })
            }
            className='form-control'
            placeholder='Email'
          />
        </div>

        <div className={`mb-3 `}>
          <div
            className='btn-group'
            role='group'
            aria-label='Basic radio toggle button group'
          >
            <input
              type='radio'
              className='btn-check'
              name='ticketType'
              id='ticketType1'
              autoComplete='off'
              onChange={(e) =>
                setTicketData({ ...ticketData, ticketType: e.target.value })
              }
              value={"own"}
            />
            <label className='btn btn-outline-danger' htmlFor='ticketType1'>
              Own Tickets
            </label>

            <input
              type='radio'
              className='btn-check'
              name='ticketType'
              id='ticketType2'
              autoComplete='off'
              onChange={(e) =>
                setTicketData({ ...ticketData, ticketType: e.target.value })
              }
              value='Buying For Others'
            />
            <label className='btn btn-outline-danger' htmlFor='ticketType2'>
              Buying For Others
            </label>
          </div>
        </div>

        <button onClick={submitTicket} className='btn btn-danger form-control'>
          Purchase Ticket
        </button>
      </div>
      <div className='col-4 bg-danger text-white'>
        <h3>Buy Tickets</h3>
        <section className={"p-3"}>
          <div className={styles.selectSeat + " row g-2"}>
            {seatArray.map((item, index) => (
              <div
                onClick={(e) => {
                  setSeletedSeat([...seletedSeat, item]);
                  setTicketData({ ...ticketData, seatNumber: item });
                }}
                seatNumber={item}
                key={index}
                className={`col ${styles.image}`}
              >
                {seletedSeat.includes(item) ? (
                  <img width={30} src={takenSeat} alt='' />
                ) : (
                  <img width={30} src={seat} alt='' />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PurchaseTicket;
