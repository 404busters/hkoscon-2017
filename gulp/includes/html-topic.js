'use strict';

const moment = require('moment-timezone');

function concatSpeakerNames(topic, speakers) {
  return topic.speaker.map((speakerId) => {
    const speaker = speakers[speakerId];
    // return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>${nickname}`;
    return `<a href="#speaker-${speakerId}" class="name">${speaker.name}</a>`;
  }).join(', ');
}

function formatTime(timeslots, day, startTime, endTime) {
  const timeFormat = 'hh:mm A';
  const dateFormat = 'Do MMMM';
  const startTimeslot = timeslots[day][startTime];
  const endTimeslot = (endTime && timeslots[day][endTime]) || timeslots[day][startTime];
  const date = moment(startTimeslot.timeStart).tz('Asia/Hong_Kong').format(dateFormat);
  const timeStart = moment(startTimeslot.timeStart).tz('Asia/Hong_Kong').format(timeFormat);
  const timeEnd = moment(endTimeslot.timeEnd).tz('Asia/Hong_Kong').format(timeFormat);
  return `(${date}) ${timeStart} - ${timeEnd}`;
}

function addFilters(env) {
  env.addFilter('concatSpeakerNames', concatSpeakerNames);
  env.addFilter('formatTime', formatTime);
}

module.exports = {
  addFilters,
  concatSpeakerNames,
  formatTime,
};
