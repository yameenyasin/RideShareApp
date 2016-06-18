angular.module("RideApp")

.controller("logoutCtrl",function($rootScope,$location){
    
    console.log("Logout COntroller ..")
    $rootScope.isAuthenticated = false;
    $location.url('/login');
    
});