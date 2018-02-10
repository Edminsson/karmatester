namespace Tester {
    describe('SecondControllerTest', () => {
        let $location;
        let $scope:any;
        let $controller: any;
        beforeEach(angular.mock.module('second'));
        beforeEach(angular.mock.inject((_$controller_:any)=>{
            $scope = {
                getData: ()=>{}
            };
            $controller = _$controller_;
            //We dont need to inject dataService manually when creating the controller
            _$controller_('secondController', {$scope: $scope});
            spyOn($scope, "getData");
        }))
        it('Name is correct', ()=> {
            expect($scope.name).toEqual("Second");
        })
        it('getData not called', ()=> {
            expect($scope.getData).not.toHaveBeenCalled();
        })
        it('getData is called', ()=> {
            let data = $scope.getData();
            expect($scope.getData).toHaveBeenCalled();
        })
    })
}