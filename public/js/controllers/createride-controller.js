angular.module("RideApp")

.controller("createRideCtrl",function($scope,webservice){
    
    console.log("Create Ride .. ");
    $scope.createRide = function(rideObj){
       
        var date = new Date(rideObj.rideDate);
        var dateString = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        
        var time = new Date(rideObj.rideTime);
        var timeString = time.getHours() + ":" + time.getMinutes();
            
        var rideData = {
          
            fromAddress : rideObj.fromAddress.formatted_address, 
            toAddress    : rideObj.toAddress.formatted_address, 
            rideDate :  dateString,
            rideTime : timeString,
            totalCapacity : rideObj.totalCapacity,
            avlSeats : rideObj.totalCapacity,
            phoneNo : rideObj.phoneNo,
            carDetails : rideObj.carDetails
       };
        
        
        webservice.createRide(rideData,function(response){
            
            console.log("Successfully created the ride")
            
        },function(error){
            
            console.log("You have an error");
            
        });
        
        
        
    }
    
});