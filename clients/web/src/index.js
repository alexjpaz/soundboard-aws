const WebDriver = require('./drivers/WebDriver');

const soundboard = require('./soundboard');

this.soundboard = new soundboard({
  driver: new WebDriver()
});
