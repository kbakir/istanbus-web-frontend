var app = angular.module("app", ['istanbusServices']);

app.config(function($routeProvider) {

  $routeProvider.when('/otobus-arama', {
    templateUrl: "otobus-arama.html",
    controller: "SearchController"
  });

  $routeProvider.when('/otobus/:id', {
    templateUrl: "otobus.html",
    controller: "BusController"
  });

  $routeProvider.when('/durak-arama', {
    templateUrl: "durak-arama.html",
    controller: "SearchController"
  });

  $routeProvider.when('/durak/:id', {
    templateUrl: "durak.html",
    controller: "StopController"
  });

  $routeProvider.when('/en-yakin-durak', {
    templateUrl: "en-yakin-durak.html",
    controller: "ClosestStopSearchController"
  });

  $routeProvider.when('/nasil-giderim', {
    templateUrl: "nasil-giderim.html",
    controller: "PathSearchController"
  });

  $routeProvider.otherwise({ redirectTo : '/otobus-arama' });
});