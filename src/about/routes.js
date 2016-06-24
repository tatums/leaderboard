routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      template: require('./template.html'),
      controller: 'AboutController',
      controllerAs: 'about'
    });
}
