routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./template.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    });
}
