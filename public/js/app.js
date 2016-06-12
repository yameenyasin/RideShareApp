angular.module("RideApp",['ngRoute'])

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
        
        template:"<h1>Ride Sharing App Create Ride page</h1>"
    })
    .when('/search',{
        
        template:"<h1>Ride Sharing App Search Ride page</h1>"
    })
    .when('/logout',{
        
        template:"<h1>Ride Sharing App Logout page</h1>"
    })
    .otherwise({
        redirectTo:'/login'
    })
    
})

.controller('mainCtrl',function($rootScope,$scope){
    
    // To check if user is authenticated
    $rootScope.isAuthenticated = false;
});