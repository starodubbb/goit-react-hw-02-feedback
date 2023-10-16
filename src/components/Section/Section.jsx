import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;

    return (
      <section className={css.section}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </section>
    );
  }
}
