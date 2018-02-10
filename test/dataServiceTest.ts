namespace Tester {
    describe('DataServiceTest', () => {
        let service: Dummy.DataService;

        it('correct number of dataitems', ()=> {
            angular.mock.module('second');
            angular.mock.inject((dataService:Dummy.DataService) => {
              service = dataService;
            });
        
            expect(service.getData().length).toEqual(3);
        })

    })
}