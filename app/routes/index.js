const addressesRoutes = require('./address-routes');

module.exports = function(app) {
  addressesRoutes(app);
  
  //Other route groups could go here, in the future

  };
