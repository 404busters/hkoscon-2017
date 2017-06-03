// @flow

import { connect } from 'react-redux';
import ModalProvider from '../component/ModalProvider';
import type { State } from '../../reducers';
import { addAgenda, removeAgenda } from '../../action';

function mapStateToProps(state: State, ownProps: Object) {
  return {
    topics: state.timetable.topics.topics,
    speakers: state.timetable.speakers,
    agenda: state.timetable.agenda,
    user: state.user,
    ...ownProps,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    addTopic(topic: string) {
      return dispatch(addAgenda(topic));
    },
    removeTopic(topic: string) {
      return dispatch(removeAgenda(topic));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProvider);
