function to_row($scope){
	var data = $scope.data
	var result = [[], [], [], [], []];
	for(var key in data){
		if( $scope.is_active(key) == false ){
			continue;
		}
		
		for(var i = 0 ; i < data[key].length ; i++){
			if( result.length <= i ){
				result[i] = []
			}
			result[i].push(data[key][i]);
		}
	}
	return result;
}


function to_head($scope){
	var data = $scope.data;
	var result = []
	for(var key in data){
		if( $scope.is_active(key) ){
			result.push(key);
		}
	}
	return result;
}

app = angular.module("MyApp", ["ui.bootstrap"]);


app.service('$scope', function () {});
// var FilterTable = function ($scope) {
app.controller("FilterTable", ['$scope', function ($scope) {

	$scope.checklist = [
		false, false, false, false, false
	];
	$scope.checkall = false;

	$scope.data = {
		"homu" : [1, 0, 0, 1, 1],
		"mami" : [0, 0, 1, 1, 0],
		"mado" : [1, 0, 0, 1, 0],
		"an"   : [0, 1, 0, 0, 1],
		"saya" : [0, 0, 1, 0, 1]
	}

	$scope.is_active = function (key){
		var data = $scope.data[key];
		for(var i=0 ; i < data.length ; i++){
			if( $scope.checklist[i] && data[i] == 0 ){
				return 0;
			}
		}
		return 1;
	}

	$scope.$watch("checkall", function (){
		for(var i=0 ; i < $scope.checklist.length ; i++){
			$scope.checklist[i] = $scope.checkall;
		}
	});

	$scope.$watch("checklist", function (){
		$scope.data_head = to_head($scope);
		$scope.data_row  = to_row($scope);
	}, true);

}]);

