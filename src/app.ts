namespace Dummy {
    angular.module('app', [])
    .controller('mainController', MainController)
    .service('greetingService', GreetingService)
    
    angular.module('second', [])
    .service('dataService', DataService)
    .controller('secondController', SecondController);
}