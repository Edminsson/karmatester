namespace Tester {
    describe('GreetingServiceTest', () => {
        let service: Dummy.GreetingService;
        let saludo: string;

        it('greeting is correct', ()=> {
            angular.mock.module('app');
            angular.mock.inject((greetingService:Dummy.GreetingService) => {
              service = greetingService;
              saludo = service.greeting;
            });
        
            expect(saludo).toEqual('hejsan');
        })

        it('mocking greetingService', ()=> {
            angular.mock.module('app');
            angular.mock.module({
                greetingService: {
                    greeting: 'whot?'
                }
            });
            angular.mock.inject((greetingService:Dummy.GreetingService) => {
              service = greetingService;
              saludo = service.greeting;
            });
        
            expect(saludo).toEqual('whot?');
        })        
    })
}