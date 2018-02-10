namespace Dummy {
    export class SecondController {
        constructor($scope:any, dataService:DataService) {
            $scope.name = "Second";
            $scope.getData = dataService.getData();
        }
    }
}