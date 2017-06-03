// @flow

import React from 'react';
import classNames from 'classnames';
import Timeslot from '../container/Timeslot';

/* eslint-disable */
type Props = {
  day: number,
  timeslots: {[name: string]: {
    timeStart: string,
    timeEnd: string,
    reserved?: number,
  }},
  sessions: Array<{
    name: string,
    timeslot: string,
    venue: string,
    topic?: string,
    row?: number,
  }>,
}

/* eslint-enable */

function renderRow(props: Props) {
  return Object.keys(props.timeslots).map(name => <Timeslot slot={name} day={props.day} />);
}

export default function Day(props: Props) {
  const className = classNames('day', `day-${props.day}`);
  return (
    <div className={className}>
      <h2 className="title" id={`day-${props.day}`}>Day {props.day}</h2>
      {renderRow(props)}
    </div>
  );
}
