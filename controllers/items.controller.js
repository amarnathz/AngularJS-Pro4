(function () {
  angular.module("MenuApp").controller("itemsController", itemsController);

  itemsController.$infect = ["MenuDataService", "idata", "$stateParams"];

  function itemsController(MenuDataService, idata, $stateParams) {
    var items = this;
    items.data = idata;
    items.categoriesName = $stateParams.Name;
  }
})();
