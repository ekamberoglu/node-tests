const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Kayra', 8);
    expect(spy).toHaveBeenCalledWith('Kayra', 8);
  });

  it('should call saveUser with user object', () => {
    var email = 'kayra@example.com';
    var password = '123abcd';
   
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});