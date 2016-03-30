'use strict';

const WtoN = require('words-to-num');

const DAY = 'day';
const MONTH = 'month';
const YEAR = 'year';
const UNKNOWN = 'unknown';

const daysText = ['days', 'day'];
const monthsText = ['months', 'month'];
const yearsText = ['years', 'year'];

function standardizeTime(time) {
  let result = time;
  result = result.toLowerCase();
  result = result.replace(/-/gi, ' ');

  let dateFormat;
  daysText.map(text => {
    if (!!result.match(text) && !dateFormat) {
      dateFormat = DAY;
      let regex = new RegExp(text, 'g');
      result = result.replace(regex, '');
    }
  });
  monthsText.map(text => {
    if (!!result.match(text) && !dateFormat) {
      dateFormat = MONTH;
      let regex = new RegExp(text, 'g');
      result = result.replace(regex, '');
    }
  });
  yearsText.map(text => {
    if (!!result.match(text) && !dateFormat) {
      dateFormat = YEAR;
      let regex = new RegExp(text, 'g');
      result = result.replace(regex, '');
    }
  });

  result = WtoN.convert(result);

  switch (dateFormat) {
    case DAY:
      result = result/30;
      break;
    case YEAR:
      result = result * 12;
      break;
    case MONTH:
    default:
      break;
  }

  return Math.round(result * 100) / 100;
}

module.exports = standardizeTime;
