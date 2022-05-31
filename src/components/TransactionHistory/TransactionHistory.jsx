import React from "react";
import PropTypes from 'prop-types'

export default function TransactionHistory (items) { 
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.items.map(({id, type, amount, currency}) => 
            <tbody
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            >
                <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
            )}
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}