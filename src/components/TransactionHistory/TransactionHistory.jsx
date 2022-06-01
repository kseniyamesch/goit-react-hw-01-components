import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

export default function TransactionHistory(props) {
  return (
    <table className={s.transaction}>
      <thead className={s.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {props.items.map(({ id, type, amount, currency }) => (
        <tbody key={id} type={type} amount={amount} currency={currency}>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
