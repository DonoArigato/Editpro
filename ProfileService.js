"use strict";

function ProfileService($location){
    let userData ={}
    let userProfile ={
        
        name:"Grant Chirpus",
        email:"grant@grandcircus.co",
        bio:" I am pretty cool I am a great job . I like to play Tetris I am pretty ok at AngularJS",
       
    };
    const setUserProfile =(data) => { 
        userData = data;
        $location.path("/UserProfile");
   
        };


    const getUserProfile = () => { 
        return userData
    }
    
    return {
        setUserProfile,
        getUserProfile
    };
}  






angular
    .module("app")
    .factory("ProfileService",ProfileService);
        