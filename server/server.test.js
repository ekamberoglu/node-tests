const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  
  describe('GET /', () => {
    it ('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
      // request(app)
      //   .get('/')
      //   .expect('Hello world!')
      //   .expect(200)
      //   .end(done);
    });
  });

  describe('GET /users', () => {
    it ('should return my users object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude(
            {
              name: 'Ekrem',
              age: 50
            }
          );
        })
        .end(done);
    });
  });
});
