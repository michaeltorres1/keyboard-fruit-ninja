import _ from 'lodash';
import landing from './classes/landing';
// TODO: test style sheet is just for testing
import test from './assets/stylesheets/test.scss';

function component () {
  const element = document.createElement('div');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());