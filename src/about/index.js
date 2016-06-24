import uirouter from 'angular-ui-router';
import routes from './routes';
import AboutController from './controller';
import 'animate.css';

export default angular.module('app.about', [uirouter]).config(routes)
  .controller('AboutController', AboutController)
  .name;
