"use strict";
const userProfile = {
  template: `
  <div class="profile">
   <p class="profileName"> {{ $ctrl.userData.name }}</p>
   <p class="profieInfo">  {{ $ctrl.userData.info }}</p>
   <p class="profileBio">  {{ $ctrl.userData.bio}}</p>
    <button>Sign Up</button>
    </div>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.userData = ProfileService.getUserProfile(); // This line is using your getter, but you misnamed them
    }]
  };


angular
    .module("app")
    .component("userProfile",userProfile);
    
  
  