import React from "react";

const DisplayTickets = ({ purchasedSeatArray }) => {
  return (
    <div>
      {" "}
      <section className='my-5'>
        <table className='table'>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Seat Number</th>
            </tr>
          </thead>
          <tbody>
            {purchasedSeatArray.length
              ? purchasedSeatArray.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.seatNumber}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DisplayTickets;
