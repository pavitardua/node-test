//assertion library
const expect =  require('expect');

const utils =  require('./utils');

describe('Utils',()=>{

    describe('#asynchronous',()=>{
        // pass done to tell mocha it's an async call
        it('Should asynchronously square a number',(done)=>{
            utils.asyncSquare(30,(square)=>{
                expect(square).toBe(900).toBeA('number');
                done();
            });
        });        
        // pass done to tell mocha it's an async call
        it('Should asynchronously add two numbers',(done)=>{
            utils.asyncAdd(30,40,(sum)=>{
                expect(sum).toBe(70).toBeA('number');
                done();
            });
        });
    });
   
    describe('#synchronous',()=>{
        it('Should square a numbers',()=>{
            var res = utils.square(30);

            expect(res).toBe(900).toBeA('number');
            // if(res !== 900){
            //     throw new Error(`Expected 900, but got ${res}.`);       
            // }
        });
         // Behavioud driven development - BDD
         it('Should add two numbers',()=>{
            var res = utils.add(30,40);

            expect(res).toBe(70).toBeA('number');
            // if(res !== 70){
            //     throw new Error(`Expected 70, but got ${res}.`);       
            // }
        });


        it('should verify firstname and lastname are set',()=>{
            var user = {
                age:28,
                address:'Dadar East'
            };
            var res = utils.setName(user , 'Vicky Dua');
            // expect(res).toEqual(user);
            expect(res).toInclude({firstName:'Vicky'});
        });        

    });
});



//toBe and to toNotBe for bools,numbers,string and not for array
//toEqual and to toNotEqual for objects and arrays
// it('Should expect some values',()=>{
    // expect(12).toNotBe(12);
    // expect({name:'Pavitar'}).toEqual({name:'Pavitar'});
    //expect([2,3,4]).toInclude(5);
    //expect([2,3,4]).toExclude(5);
    // expect({name:'Pavitar',age:28}).toInclude({age:28});
    //expect({name:'Pavitar',age:28}).toExclude({age:28});
// });

