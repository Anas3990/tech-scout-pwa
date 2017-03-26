angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.matchScouting', {
    url: '/matchScouting',
    views: {
      'tab1': {
        templateUrl: 'templates/matchScouting.html',
        controller: 'matchScoutingCtrl'
      }
    }
  })

  .state('tabsController.pitScouting', {
    url: '/pitScouting',
    views: {
      'tab2': {
        templateUrl: 'templates/pitScouting.html',
        controller: 'pitScoutingCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/matchScouting')

  

});