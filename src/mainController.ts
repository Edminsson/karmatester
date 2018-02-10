namespace Dummy {
    export class MainController {
        constructor($scope:any, greetingService: GreetingService) {
            $scope.name = "Main";
            $scope.nameWithGreeting = `${greetingService.greeting} ${$scope.name}`
        }
    }
}