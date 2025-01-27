export default {
  'index.html':
    '<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta http-equiv="X-UA-Compatible" content="IE=Edge">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n\r\n  <title><%name%></title>\r\n  \r\n  <!-- AngularJS -->\r\n  <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>\r\n  <script src="https://cdn.jsdelivr.net/npm/angular@1.7.3/angular.min.js"></script>\r\n  \r\n</head>\r\n\r\n<body>\r\n  <!-- AngularJS App Container -->\r\n<div id="angular-app" data-ng-app="app">\r\n  <div data-ng-controller="MainCtrl as vm" class="">\r\n    <h1 class="">{{heading}}</h1>\r\n    <p class="">{{text}}</p>\r\n  </div>\r\n</div>\r\n  <!-- Project -->\r\n  <script src="index.js"></script>\r\n</body>\r\n</html>',
  'index.js':
    'angular.module("app", [])\r\n  .controller("MainCtrl", function ($scope) {\r\n    $scope.heading = "<%name%>";\r\n    $scope.text = "Angular is different from AngularJS.";\r\n  });',
};
