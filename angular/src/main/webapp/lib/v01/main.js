
var v01app = angular.module('v01app',  [])
.run(function($rootScope) {

});


var v01list = v01app.controller('listCtrl', function ($scope, $http, $rootScope, $compile, $element,$filter ) {
	// List definitions, values and result in different data models
	$scope.list = [ 
	{name:'power.small', func:'Math.pow(x, 0.1234)'},
	{name:'power.medium', func:'Math.pow(x, 1.234)'},
	{name:'power.large', func:'Math.pow(x, 12.34)'}
	];
	$scope.values={};
	$scope.result={};
	
	$scope.data = [
	{name:'power.small', func:'Math.pow(x, 0.1234)', value: '',  result:'' },
	{name:'power.medium', func:'Math.pow(x, 1.234)', value: '',  result:''},
	{name:'power.large', func:'Math.pow(x, 12.34)', value: '',  result:''}
	];

});


var clauseresolver = v01app. directive('clauseresolver', function () {
    return {
        restrict: 'E, A, C',
        //require: 'ngModel',
        link: function (scope, element, attrs) {
        	var self = this;
        	var args = scope.$eval( attrs.clauseresolver );
			scope.$watch( attrs.watch , function(nw,ow){
				if(nw){
					var x = nw;
					var r = eval(attrs.clause); 
					scope[attrs.clauseresult][attrs.clausename] = r;
				}
			});
			
			
        },
        scope: true
    };
});

var clauseresolverbyindex = v01app. directive('clauseresolverbyindex', function () {
    return {
        restrict: 'E, A, C',
        link: function (scope, element, attrs) {
        	var self = this;
			scope.$watch( attrs.watch , function(nw,ow){
				if(nw[attrs.clausex] && nw[attrs.clause] && attrs.clauseresult){
					var x = nw[attrs.clausex];
					var clause = nw[attrs.clause];
					var r = eval(clause);
					nw[attrs.clauseresult] = r;
				}
			},true);
			
        },
        scope: true
    };
});

