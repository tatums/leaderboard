
routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  console.log('HERE');
  //$locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}
