(function () {
  angular.module("MenuApp").component("itemsComponent", {
    templateUrl: "templates/item.component.html",
    bindings: {
      itemsData: "<",
    },
  });
})();
