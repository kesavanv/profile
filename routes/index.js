var ErrorHandler = require('./error-handler').errorHandler;
var ResumeController = require('../controller/resume');

module.exports = exports = function (app) {
    app.get('/', function(req, res){
      res.render('index', { title: 'Express' });
    });

    app.get('/kesav', ResumeController.displayResume);

    // Error handling middleware
    app.use(ErrorHandler);
};