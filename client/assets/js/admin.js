var username = window.localStorage.getItem('posters_galore_login');
if (!username) {
  window.location.href = "./login.html";
}
var myApp = angular.module('myApp', ['ng-admin']);
myApp.config(['NgAdminConfigurationProvider', function(NgAdminConfigurationProvider) {
  var nga = NgAdminConfigurationProvider;
  // create an admin application
  var admin = nga.application('Ciclus Admin').baseApiUrl('http://0.0.0.0:3000/api/');

  var article = nga.entity('articles');

  var fields = [
    nga.field('title'),
    nga.field('description', 'wysiwyg'),
    nga.field('abstract')
  ];

  article.listView().fields(fields);

  article.creationView().fields(fields);

  article.showView().fields(fields);

  article.editionView().fields(fields);

  article.deletionView().fields(fields);

  admin.addEntity(article);

  // more configuration here later
  // ...
  // attach the admin application to the DOM and run it
  nga.configure(admin);
}]);
