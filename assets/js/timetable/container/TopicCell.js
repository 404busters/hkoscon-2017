// @flow
import { connect } from 'react-redux';
import TopicCell from '../component/TopicCell';
import type { State } from '../../reducers';

type Props = {
  id: string,
  col: number,
  row?: number,
  name: string,
  dayslot: string,
}

function mapStateToProps(state: State, ownProps: Props) {
  const topics = state.timetable.topics.topics;
  return {
    topic: topics.find(topic => topic.id === ownProps.id),
    col: ownProps.col,
    rol: ownProps.row || 0,
    name: ownProps.name,
    dayslot: ownProps.dayslot,
  };
}

export default connect(mapStateToProps)(TopicCell);
