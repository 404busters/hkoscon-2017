// @flow

import React from 'react';
import Day from '../container/Day';
import ModalProvider from '../container/ModalProvider';

type Props = {
  sessions: { [day: string]: Array<Object>, }
}

export default function Timetable(props: Props) {
  return (
    <div id="timetable">
      <ModalProvider>
        {Object.keys(props.sessions).map((day: string) => <Day day={day.replace('day-', '')} key={day} />)}
      </ModalProvider>
    </div>
  );
}
