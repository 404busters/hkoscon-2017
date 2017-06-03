// @flow

import React from 'react';
import GridCell from './GridCell';
import Venue from '../container/Venue';
import Speakers from '../container/Speakers';

/* eslint-disable */
type Props = {
  col: number,
  name: string,
  topic: {
    title: string,
    id: string,
    venue: string,
    speaker: Array<string>,
  },
  dayslot: string,
}
/* eslint-enable*/

export default function TopicCell(props: Props) {
  const topic = props.topic;
  const part = props.name.match(/Part\s(\d+)/im);
  const title = Array.isArray(part) ? `${topic.title} Part ${part[1]}` : topic.title;
  return (
    <GridCell col={props.col} className="topic-grid grid" modal={topic.id} target="_blank" dayslot={`${props.dayslot}-${topic.venue}`}>
      <div className="session-title">
        {title}
      </div>
      <div className="session-details">
        <ul>
          <Speakers speakers={topic.speaker} />
          <Venue id={topic.venue} />
        </ul>
      </div>
    </GridCell>
  );
}
