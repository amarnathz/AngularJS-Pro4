(function () {
  angular
    .module("MenuApp")
    .controller("categoriesController", categoriesController);

  categoriesController.$infect = ["MenuDataService", "cdata"];
  function categoriesController(MenuDataService, cdata) {
    var con = this;
    con.categories = cdata;
    console.log("controller", con.categories);
  }
})();
