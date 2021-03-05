import Heading from './components/heading/heading.js';
import _ from 'lodash';
import 'bootstrap';
import './about.scss';

const heading = new Heading();
heading.render('hello world');

console.log(_.upperFirst('about module'));
