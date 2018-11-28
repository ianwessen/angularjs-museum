var app = angular

    // The name of the app: 'App'
    .module('App', [])



    .controller('NavigationController', function($scope) {
        $scope.items = {
            simpleBinding: {
                title: '',
                active: '',
            },
        };
    })



    .controller('MyController', function($scope) {
        //
        // Implicit controller in the view
        //
    })



    .controller('ClockController', function($scope, $timeout) {
        $scope.clock = {};
        var updateClock = function() {
            $scope.clock.now = new Date().toLocaleTimeString();
            $timeout(function() {
                updateClock();
            }, 1000);
        };
        updateClock();
    })



    .controller('ClickController', function($scope) {
        $scope.count = 0;

        $scope.add = function(amt) {
            $scope.count += 1;
        };
        $scope.subtract = function(amt) {
            $scope.count -= 1;
        };
    })



    .controller('ParentController', function($scope) {
        $scope.person = { greeted: true };
    })



    .controller('ChildController', function($scope) {
        $scope.sayHello = function() {
            $scope.person.name = 'Ben Gurion';
        };
    })



    .controller('EmailController', function($scope, $interpolate) {
        $scope.$watch('emailBody', function(body) {
            if (body) {
                console.log(body);
                var template = $interpolate(body);
                $scope.previewText = template({ to: $scope.to });
            }
        });
    });



// Sticky sidebar
var sidebar = document.getElementById('nav-sidebar');

window.addEventListener('scroll', function() {
    if (window.scrollY < 170) { // ugh...
        sidebar.classList.remove('fixed-sidebar');
    } else {
        sidebar.classList.add('fixed-sidebar');
    }
});

