import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className={s.titleText}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} key={id}>
              <span className="label">{label}</span>
              <span className={s.percent}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
