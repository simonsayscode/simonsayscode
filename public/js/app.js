// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    'baseUrl': 'js/lib',
    'paths': {
      'app': '../app',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min'
    }
});

requirejs(['app/index', 'app/content']);