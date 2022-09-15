import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import ButtonItem from 'components/Buttons/ButtonItem';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={s.btns}>
      {options.map(option => {
        return (
          <ButtonItem
            key={option}
            text={capitalizeFirstLetter(option)}
            name={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
