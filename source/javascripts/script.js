var FilterTable = function ($scope) {

	$scope.click = function (text){
		console.log(text);
	}

	$scope.checklist = [
		false, false, false, false, false
	];
	$scope.checkall = false;
	$scope.checktoggleall = function (){
		for(var i=0 ; i < $scope.checklist.length ; i++){
			$scope.checklist[i] = $scope.checkall;
		}
	}

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

	$scope.data_head = function (){
		var data = $scope.data;
		var result = []
		for(var key in data){
			if( $scope.is_active(key) ){
				result.push(key);
			}
		}
		return result;
	}

	$scope.data_row = function (){
		var data = $scope.data;
		var result = [];
		for(var key in data){
			for(var i = 0 ; i < data[key].length ; i++){
				if( result.length <= i ){
					result[i] = []
				}
				result[i].push(data[key][i]);
			}
		}
		return result;
	}

};

