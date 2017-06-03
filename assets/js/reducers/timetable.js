// @flow

import {
  IMPORT_SESSIONS,
  IMPORT_LANGS,
  IMPORT_SPEAKERS,
  IMPORT_VENUES,
  IMPORT_TOPICS,
  IMPORT_SPONSORS,
  IMPORT_TIMESLOTS,
  LOAD_AGENDA,
  PUSH_ADD_AGENDA,
  PUSH_REMOVE_AGENDA,
  ADD_AGENDA,
  REMOVE_AGENDA,
} from '../action';
import { addAgenda, removeAgenda } from '../schedule';

export type TimetableState = {
  sessions: Object,
  topics: Object,
  venues: Object,
  langs: Object,
  speakers: Object,
  sponsors: Object,
  timeslots: Object,
  agenda: {[key: string]: string},
};


export default function (state: TimetableState = {
  agenda: {},
  timeslots: {},
  sessions: {},
  topics: {},
  venues: {},
  langs: {},
  speakers: {},
  sponsors: {},
}, action: Object) {
  switch (action.type) {
    case IMPORT_LANGS: {
      const { langs, ...others } = state;
      return {
        langs: action.languages,
        ...others,
      };
    }
    case IMPORT_SESSIONS: {
      const { sessions, ...others } = state;
      return {
        sessions: action.sessions,
        ...others,
      };
    }
    case IMPORT_SPEAKERS: {
      const { speakers, ...others } = state;
      return {
        speakers: action.speakers,
        ...others,
      };
    }
    case IMPORT_VENUES: {
      const { venues, ...others } = state;
      return {
        venues: action.venues,
        ...others,
      };
    }
    case IMPORT_SPONSORS: {
      const { sponsors, ...others } = state;
      return {
        sponsors: action.sponsors,
        ...others,
      };
    }
    case IMPORT_TOPICS: {
      const { topics, ...others } = state;
      return {
        topics: action.topics,
        ...others,
      };
    }
    case IMPORT_TIMESLOTS: {
      const { timeslots, ...others } = state;
      return {
        timeslots: action.timeslots,
        ...others,
      };
    }
    case LOAD_AGENDA: {
      const { agenda, ...others } = state;
      return {
        agenda: action.agenda,
        ...others,
      };
    }
    case PUSH_ADD_AGENDA: {
      const { key, topic } = action;
      const { agenda, ...others } = state;
      return {
        agenda: Object.assign({}, agenda, { [key]: topic }),
        ...others,
      };
    }
    case PUSH_REMOVE_AGENDA: {
      const { key } = action;
      const { agenda, ...others } = state;
      const nextAgenda = Object.assign({}, agenda);
      delete nextAgenda[key];
      return {
        agenda: nextAgenda,
        ...others,
      };
    }
    case ADD_AGENDA: {
      const { topic } = action;
      const key = addAgenda(topic);
      const { agenda, ...others } = state;
      return {
        agenda: Object.assign({}, agenda, { [key]: topic }),
        ...others,
      };
    }
    case REMOVE_AGENDA: {
      const { topic } = action;
      const { agenda, ...others } = state;
      const key = Object.keys(agenda).find(k => agenda[k] === topic);
      const nextAgenda = Object.assign({}, agenda);
      if (key) {
        removeAgenda(key).then(console.log);
        delete nextAgenda[key];
      }
      return {
        agenda: nextAgenda,
        ...others,
      };
    }
    default:
      return state;
  }
}
