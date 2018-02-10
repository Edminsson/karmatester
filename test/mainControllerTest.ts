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

        describe('Injecting provide', () => {
            it('...in here', ()=> {
                let testTjanst:any;
                angular.mock.module(($provide:any) => {
                    $provide.service('testService', ()=>{
                        return {
                            testString: 'testar'
                        }
                    })
                });
                angular.mock.inject((testService:any) => {
                    testTjanst = testService;
                });

                expect(testTjanst.testString).toEqual("testar");

            })
  
        })



    })
}