angular.module("RideApp")

.controller("loginCtrl",function($rootScope,$scope,webservice,$location){
    
    $scope.isError = false;
    
    $scope.doLogin = function(cred){
        
        var loginData = {
            email: cred.email,
            password: cred.password
        }
        
        webservice.login(loginData,function(response){
            console.log("Login Success");
            $rootScope.isAuthenticated = true;
            $scope.isError = false;
            $location.url('/home');
            
        },function(err){
            console.log("Error"); 
            $scope.isError = true;
            $rootScope.isAuthenticated = false;
        });
        
    }
    
});