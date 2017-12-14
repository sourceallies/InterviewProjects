const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:8080
Browser.localhost('example.com', 8080);

describe('Home page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  it('has a title', function() {
    browser.assert.text('title', "Hello World");
  });

  it('has header text', function () {
    browser.assert.text('header', "Hello World");
  })
});
