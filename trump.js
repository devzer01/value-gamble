var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'QQ4i4h5YPRoNLlk0qJZVudYF8',
  consumer_secret: 'Ee5h3xfAylvXGkih3AUBew3qCYlEmkFg30KTcVgv7GP12UHDFK',
  access_token_key: '859287077476642816-d8ePlad2v8Z8QU4OsPsCjd4IRst0xA1',
  access_token_secret: '865u8nWuKFwQgMGJ95XKsCLnp9BauWhbKMREgRN1IknCr'
});

var screenName = "realDonaldTrump";
 
var params = {screen_name: screenName};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) return;
    var map = tweets.reduce(contact).toLowerCase().split("").filter(alpha).reduce(freq, {});
    console.log(map);
});

var contact = function (a, v) {
    var y = "" + a + "" + v.text;
    return y;
}

var alpha = function (v) {
    return (v.match(/[a-z]/));
}

var freq = function (a, v) {
    if (!a[v]) a[v] = 0; a[v]++;
    return a;
}


///// public ledger
//// records
//// inquiry log
//// record inquire (flag ownership)
///XMPP 