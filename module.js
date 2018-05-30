"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/UserProfile", {
        template: "<user-Profile></user-Profile>"
      })
      .when("/EditProfile", {
        template: "<edit-Profile></edit-Profile>"
      })
      .otherwise({ redirectTo: "/UserProfile" });
  });
  "use strict";
 
 





