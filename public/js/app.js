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
        
        template:"<h1>Ride Sharing App singup page</h1>"
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
        redirectTo:'/home'
    })
    
});