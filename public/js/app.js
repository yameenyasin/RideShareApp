angular.module("RideApp",['ngRoute','google.places'])

.config(function($routeProvider){
   
    $routeProvider.when('/home',{
        
        template:"<h1>Ride Sharing App Home page</h1>"
    })
    .when('/login',{
        
        templateUrl:'../views/login-view.html',
        controller:'loginCtrl'
    })
    .when('/signup',{
        
        templateUrl:'../views/signup-view.html',
        controller:'signUpCtrl'
    })
    .when('/createride',{
        
        templateUrl:'../views/createride-view.html',
        controller:'createRideCtrl'
    })
    .when('/search',{
        
        template:"<h1>Ride Sharing App Search Ride page</h1>"
    })
    .when('/logout',{
        controller:"logoutCtrl",
        template:"<p>Please wait ... Logging out </p>"
    })
    .otherwise({
        redirectTo:'/login'
    })
    
})

.controller('mainCtrl',function($rootScope,$scope){
    
    // To check if user is authenticated
    $rootScope.isAuthenticated = false;
});