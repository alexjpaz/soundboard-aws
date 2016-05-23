function soundboard(config) {
  var self = this;

  var driver = config.driver;

  this.execute = function(configs) {
    if(configs instanceof Array === false) {
      configs = [configs];
    }

    configs.forEach(function(config, index) {
      driver.execute(config, index);
    });
  };
};

module.exports = soundboard;
