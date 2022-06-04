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
      <tbody>
      {props.items.map(({type, amount, currency }) => (
          <tr key={props.id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
      ))}
      </tbody>
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
