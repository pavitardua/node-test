const  expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__get__


describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);
    it('should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('Pavitar',28);
        expect(spy).toHaveBeenCalledWith('Pavitar',28);
    });
    it('should call saveUser with user object',()=>{
        var email = 'pavitar@example.com'
        var password = '123abc';

        app.handleSignUp(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});