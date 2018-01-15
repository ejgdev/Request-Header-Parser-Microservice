'use strict';

module.exports = function(app) {
    app.get('/whoami', function(req, res) {
    
     const ip = (req.headers['x-forwarded-for'] ||
                 req.connection.remoteAddress ||
                 req.socket.remoteAddress ||
                 req.connection.socket.remoteAddress).split(",")[0];  // Reference: http://keyangxiang.com/2016/03/30/get-client-ip-address-in-express-js/

     const requestInfo = {'ipaddress': ip, 'language': req.headers["accept-language"].split(',')[0], 'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]};
      
     res.send(requestInfo);
    });
};