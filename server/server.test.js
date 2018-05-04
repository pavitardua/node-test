const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server',()=>{
    describe('#Some Test Cases',()=>{
        describe('GET /',()=>{
            it('should return hello world response',(done)=>{
                request(app)
                .get('/')
                //.expect('Hello World')
                //.expect('Content-Type',/html/)
                //.expect('Content-Length', '15')
                .expect(404)
                // .expect({
                //     error:'Custom error message'
                // })
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:'Todo App v1.0'
                    })
                })
                .end(done);
            });
        });
        describe('GET /users',()=>{    
            it('should return my user object',(done)=>{
                request(app)
                .get('/users')
                .expect(200)
                //.expect([{ name: 'pavitar', age: 28 }, { name: 'paul', age: 25 }])
                .expect((res)=>{
                    expect(res.body).toInclude({
                        name:'paul',age:25
                    })
                })
                .end(done);
            });
        });    
        
    });
});