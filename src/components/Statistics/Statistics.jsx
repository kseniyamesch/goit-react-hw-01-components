import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const titleName = s.titleText;
const statList = s.statList;
const item = s.item;
const percent = s.percent;

export default function Statistics({title, stats}) {
    const isTitle = true;
    return (
<section className="statistics">
    {isTitle && (<h2 className= {titleName} >{title}</h2>)}
  <ul className={statList}>
      {stats.map(({id, label, percentage}) => 
      { return (
        <li className={item}
        key = {id}
        >
        <span className="label">{label}</span>
        <span className={percent}>{percentage}%</span>
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