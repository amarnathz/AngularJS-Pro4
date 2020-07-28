(function () {
  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$infect = ["$stateProvider", "$urlRouterProvider"];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "templates/home.html",
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "templates/categories.html",
        controller: "categoriesController as contr1",
        resolve: {
          cdata: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })
      .state("itemsCategories", {
        url: "/categories/{categoryShortName}",
        templateUrl: "templates/item.html",
        controller: "itemsController as itemCon",
        params: { categoryShortName: null, Name: null },
        resolve: {
          idata: [
            "$stateParams",
            "MenuDataService",
            //$stateParams, MenuDataService   it should in order as declared.........*********
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory(
                $stateParams.categoryShortName
              );
            },
          ],
        },
      });
  }
})();
