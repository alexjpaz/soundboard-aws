var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var ignore = [
  "^index.*",
  "metadata"
];

function testIgnore(key) {

  var isIgnored = ignore.some(function(text) {
    var regex = new RegExp(text);
    console.log(regex, text, key)
    return regex.test(key);
  })

  return isIgnored;
}

exports.handler = function(event, context) {
  var params = {
    Bucket: 'soundboard.alexjpaz.com', /* required */
  };
  s3.listObjects(params, function(err, data) {
    if (err) {
      throw err;
    } else {
    }
    var sounds = [];

    for(var i=0;i<data.Contents.length;i++) {
      if(!testIgnore(data.Contents[i].Key)) {
        sounds.push(data.Contents[i].Key);
      }
    }

    s3.putObject({
      Bucket: 'soundboard.alexjpaz.com',
      Key: 'index.json',
      ContentType: "application/json",
      Body: JSON.stringify(sounds),
      CacheControl: "max-age=600"
    }, function() {
      var csv = "";

      for(var i=0;i<sounds.length;i++) {
        csv += sounds[i] + "\n";
      }

      s3.putObject({
        Bucket: 'soundboard.alexjpaz.com',
        Key: 'index',
        ContentType: "text/plain",
        Body: csv,
        CacheControl: "max-age=600"
      }, function() {
        context.done(null, sounds);
      });
    });
  });
};
