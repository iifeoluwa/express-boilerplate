let express = require('express');
let http = require('http');
let path = require('path');
let app = express();
let router = require('./app/routes/router');
let config = require('./app/config/config');

app.set('port', config.port);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// send app to router
router(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('server listening on port ' + app.get('port'));
});
