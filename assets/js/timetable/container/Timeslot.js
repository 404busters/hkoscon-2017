// @flow
import { connect } from 'react-redux';
import Timeslot from '../component/Timeslot';
import type { State } from '../../reducers';

type Props = {
  day: number,
  slot: string,
}

function mapStateToProps(state: State, ownProps: Props) {
  const day = `day-${ownProps.day}`;
  const timeslot = state.timetable.timeslots[day][ownProps.slot];
  const sessions = state.timetable.sessions[day].filter(session => session.timeslot === ownProps.slot);
  return {
    sessions,
    timeslot,
    slot: ownProps.slot,
    dayslot: `${day}-${ownProps.slot}`,
  };
}

export default connect(mapStateToProps)(Timeslot);
