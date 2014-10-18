function MyController($scope,$http) {
    console.log("this is a MyController");
    $scope.message = "hellooooooo";
    $scope.create = function () {
        console.log($scope.serviceClients);
        $http.post("/serviceClients", $scope.serviceClients).success(function (response) {
            $scope.all();
        });
    };
    var renderServiceClient = function (response) {
        $scope.SC = response;
    };
    $scope.update = function () {
        console.log($scope.serviceClients);
        $http.put("/serviceClients/" + $scope.serviceClients._id,$scope.serviceClients);
    }
    $scope.remove = function (id) {
        $http.delete("/serviceClients/" + id).success(function (response) {
            $scope.all();
        });
    }
    $scope.select = function (id) {
        console.log(id);
        $http.get("/serviceClients/" + id).success(function (response) {
            console.log(response);
            $scope.serviceClients = response;
        });
    }
    $scope.all = function () {
        $http.get("/serviceClients").success(renderServiceClient);
    }
    $scope.all();
};