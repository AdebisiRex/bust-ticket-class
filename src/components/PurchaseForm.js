import React from "react";
import DisplayTickets from "./DisplayTickets";

const PurchaseForm = ({
  setTicketData,
  ticketData,
  submitTicket,
  purchasedSeatArray,
}) => {
  return (
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

      <DisplayTickets purchasedSeatArray={purchasedSeatArray} />
    </div>
  );
};

export default PurchaseForm;
