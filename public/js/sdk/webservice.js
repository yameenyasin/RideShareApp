angular.module("RideApp")

.service("webservice",function($http){
    
   
    /** For signup. this will save the user to database
     * @param: postData an object habing email and password
     */
    
    this.signup = function(userdata, callback, errcallback){
        
        $http({
            
            method:"POST",
            url:"/api/save",
            data:userdata
        }).then(callback,errcallback);
    }
    
});