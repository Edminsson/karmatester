namespace Tester {
    describe('MainControllerTest', () => {
        let $controller:any;

        describe('Without mocking service', () => {
            beforeEach(angular.mock.module('app'));
            beforeEach(angular.mock.inject((_$controller_:any)=>{
                $controller = _$controller_;
            }));
    
            it('Name is correct', ()=> {
                let $scope:any = {};
                $controller('mainController', {$scope: $scope});
                expect($scope.name).toEqual("Main");
            })
            it('Name with greeting is correct', ()=> {
                let $scope:any = {};
                $controller('mainController', {$scope: $scope});
                expect($scope.nameWithGreeting).toEqual("hejsan Main");
            })
        })

        describe('Mocking service', () => {
            beforeEach(angular.mock.module('app'));
            beforeEach(angular.mock.module({
                greetingService: {
                    greeting: 'hola'
                }
            }));
            beforeEach(angular.mock.inject((_$controller_:any)=>{
                $controller = _$controller_;
            }));
            it('Name with greeting is correct when mocking Service', ()=> {
                let $scope:any = {};
                $controller('mainController', {$scope: $scope});
                expect($scope.nameWithGreeting).toEqual("hola Main");
            })
    
        })

    })
}