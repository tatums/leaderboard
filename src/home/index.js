import uirouter from 'angular-ui-router';
import routes from './routes';
import HomeController from './controller';

export default angular.module('app.home', [uirouter]).config(routes)
  .controller('HomeController', HomeController)
  .name;

