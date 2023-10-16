import { Component } from 'react';
import { toCapitalize, splitCamelCase } from 'utils';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const propsEntries = Object.entries(this.props);

    return (
      <ul className={css.statistics}>
        {propsEntries.map(([key, value]) => (
          <li className={css.statisticsItem} key={key}>
            <p>{`${toCapitalize(splitCamelCase(key))}: ${value}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}
