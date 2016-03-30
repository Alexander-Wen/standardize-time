const standardizeTime = require('./index.js');

const basicTestData = [
  '1 month',
  '3 months',
  '13 months',
  '30 months',
  '33 months',
  'one month',
  'three months',
  'thirteen months',
  'thirty months',
  'thirty three months',
  'thirty-three months',
  '1 year',
  '3 years',
  '13 years',
  '30 years',
  '33 years',
  'one year',
  'three years',
  'thirteen years',
  'thirty years',
  'thirty three years',
  'thirty-three years',
  '1 day',
  '3 days',
  '13 days',
  '30 days',
  '33 days',
  'one day',
  'three days',
  'thirteen days',
  'thirty days',
  'thirty three days',
  'thirty-three days',
];

const mediumTestData = [
  '3.5 months',
  '3.5 years',
  '3.5 days',
];

mediumTestData.map(data => console.log(data + ' => ' + standardizeTime(data)));
