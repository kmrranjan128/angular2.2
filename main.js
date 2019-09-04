angular.module('orderByExample', [])
.controller('ExampleController', ['$scope','$filter', function($scope,$filter) {
  $scope.fieldList=[{name: '', size: ''}]
  $scope.addField=function() {
$scope.fieldList.push([{name: '', size: ''}])
    // body...
  }

  $scope.fieldList = [
    {name: 'File1', size: '5.00'},
    {name: 'File2', size: '1.00'},
    {name: 'File5', size: '6.00'}
  ];
$scope.editField=function(use,data){
  $scope.fieldList.sort()
}
  $scope.onBluer=function(data){
    data.size=parseFloat(data.size).toFixed(2)

  }

  $scope.reverse=false;
    $scope.orderByMe = function(x) {

        if($scope.myOrderBy == x) {
            $scope.reverse=!$scope.reverse;
        }
        $scope.myOrderBy = x;
    }
$scope.sushi = [
        { name: 'Cali Roll', fish: 'Crab', tastiness: "2.00" },
        { name: 'Philly', fish: 'Tuna', tastiness: "2.99" },
        { name: 'Tiger', fish: 'Eel', tastiness: "7.88" },
        { name: 'Rainbow', fish: 'Variety', tastiness: "6.00" },
        { name: 'Salmon', fish: 'Misc', tastiness: "12.00" }
        ];

     $scope.sortArray = ['name'];
        $scope.sortReverse1 = false;
        $scope.searchProperty1 = '';
        $scope.addSort = function (x) {
          
            if ($scope.sortArray.indexOf(x) === -1) {
                $scope.sortArray.splice(0,0,x);//add to front
            }
            else {
                $scope.sortArray.splice($scope.sortArray.indexOf(x), 1, x);//remove
                $scope.sortArray.splice(0, 0, x);//add to front again
            }
        };
        

}]);