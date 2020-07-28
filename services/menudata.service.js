(function () {
  angular.module("data").service("MenuDataService", MenuDataService);

  MenuDataService.$infect = ["$http", "$q"];
  function MenuDataService($http) {
    var service = this;
    service.getAllCategories = function () {
      var result = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json",
      })
        .then(function (res) {
          // console.log(res.data);
          return res.data;
        })
        .catch(function (res) {
          console.log("Error", res);
        });
      return result; //return promise
    };

    service.getItemsForCategory = function (shortName) {
      var result = $http({
        method: "GET",
        url:
          "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +
          shortName,
      }).then(function (res) {
        console.log(res);
        return res.data.menu_items;
      });
      return result;
    };
  }
})();
