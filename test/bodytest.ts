namespace Tester {
    describe('Tester', () => {
        it('First', () => {
            expect(1).toEqual(1);
        })
    
        it('bodytest', () => {
            let test = Dummy.isBodyPresent();
            expect(test).toEqual(1);
        })
    
        it('elementtest', () => {
            let test = Dummy.isElementPresent('saludo');
            expect(test).toEqual(0);
        })
    
        it('htmltest', (done) => {
            let test = $.get('./base/mini.html').then((res)=>{
                expect(false).toBeFalsy();
                done();
            });
        })
        
    
    })
}
