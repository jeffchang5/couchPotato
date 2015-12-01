
angular.module('couchPotato', ['ui.router', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1");
      
      $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        })
          .state('android', {
              url: "/android",
              templateUrl: "android.html",
          })
          
        .state('about', {
            url: "/about",
            templateUrl: "about.html"
      });
});