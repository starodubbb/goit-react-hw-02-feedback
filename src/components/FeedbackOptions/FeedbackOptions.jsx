import { Component } from 'react';
import PropTypes from 'prop-types';
import { toCapitalize } from 'utils/toCapitalize';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map(option => (
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {toCapitalize(option)}
          </button>
        ))}
      </>
    );
  }
}
