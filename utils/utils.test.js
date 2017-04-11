const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });
  });


  it ('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it ('should async square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  });

  it ('should square a number', () => {
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number');
  });
});

it ('should set first and last name', () => {
  var user = {
    age: 50,
    location: 'Vancouver'
  }

  var userTemp = utils.setName(user, 'Ekrem Kamberoglu');
  // expect(user).toEqual(userTemp);

  expect(userTemp).toInclude({
    firstName: 'Ekrem',
    lastName: 'Kamberoglu'
  }).toBeA('object');
});

// it ('should expect some values', () => {
//   // expect(12).toNotBe(13);
//   // expect({name: 'Ekrem'}).toEqual({name: 'Ekrem'});
//   // expect({name: 'ekrem'}).toNotEqual({name: 'Ekrem'});
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(5);

//   // expect({
//   //   name: 'Ekrem',
//   //   age: 50,
//   //   location: 'Vancouver'
//   // }).toInclude({
//   //   age: 50
//   // });

//   expect({
//     name: 'Ekrem',
//     age: 50,
//     location: 'Vancouver'
//   }).toExclude({
//     age: 23
//   });
// });