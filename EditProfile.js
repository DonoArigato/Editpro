

"use strict";
const editProfile = {
  template: `
  <form ng-submit="$ctrl.signUp($ctrl.data);">
  <h4>Use the form below to update your profile</h4>
   <input type="text" placeholder="Name" ng-model="$ctrl.data.name">
   <input type="text" placeholder="Contact Info" ng-model="$ctrl.data.email">
   <input type="text" placeholder="Bio" ng-model="$ctrl.data.bio">
   <button> Update</button>
  </form>
  `,
  controller: ["ProfileService", function(ProfileService) {
      const vm = this;
      vm.signUp = (data) => {
        ProfileService.setUserProfile(data);
        console.log(data);
      };
    }]
  };














angular
    .module("app")
    .component("editProfile",editProfile);

