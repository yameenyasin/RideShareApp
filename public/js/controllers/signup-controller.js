angular.module("RideApp")

.controller("signUpCtrl",function($scope){
    
    $scope.isError = false;
    
    $scope.doSignUp = function(user){
        
        $scope.isError = false;
        
        if($scope.checkEmail(user.email) && $scope.checkPassword(user.password,user.confirmpassword)){
            
            alert("I am going to save the user to db");
        }else{
            $scope.isError = true;
        }
    };
    
    $scope.checkEmail = function(emailId){
        
        if(emailId.length > 10)
            return true;
        else
            return false;
    };
    
    $scope.checkPassword = function(pass,confPass){
        
        if(pass.length > 6 && pass === confPass)
            return true;
        else
            return false;
    }
    
});
//
//1. validate the email_id
//2. if paswword > 6 characters
//3. if password equals confirm password