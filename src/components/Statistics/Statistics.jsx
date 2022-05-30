import React from "react";
import PropTypes from 'prop-types'

export default function Statistics({title, stats}) {
    const isTitle = true;
    return (
<section className="statistics">
    {isTitle && (<h2 className="title">{title}</h2>)}
  <ul className="stat-list">
      {stats.map(({id, label, percentage}) => 
      { return (
        <li className="item"
        key = {id}
        >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
      )
      }
      )}
  </ul>
</section>
    )
}

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}))
}