import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          GOOD <span className={s.quant}>{good}</span>
        </li>
        <li className={s.item}>
          NEUTRAL <span className={s.quant}>{neutral}</span>
        </li>
        <li className={s.item}>
          BAD <span className={s.quant}>{bad}</span>
        </li>
      </ul>
      <p className={s.total}>
        Total: <span className={s.quant}>{total}</span>
      </p>
      <p className={s.proc}>
        Positive feedback:{' '}
        <span className={s.quant}>{positivePercentage}%</span>
      </p>
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
