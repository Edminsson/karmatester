namespace Tester {
    describe('SecondControllerTest', () => {
        let $location;
        let $scope:any;
        beforeEach(angular.mock.module('second'));
        beforeEach(angular.mock.inject((_$controller_:any)=>{
            $scope = {};
            _$controller_('secondController', {$scope: $scope});

        }))
        it('Name is correct', ()=> {
            expect($scope.name).toEqual("Second");
        })
    })
}