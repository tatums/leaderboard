require('angular/angular.js')
require('bootstrap-material-design/dist/css/bootstrap-material-design.css')

require("../css/style.css")

angular.module('myApp', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
})
