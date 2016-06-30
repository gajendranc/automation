angular.module('ExtentX')
    .controller('ReportController', ['$scope', '$http', 'Aggregates', 'TestDistribution', 'LogDistribution', 
    function($scope, $http, Aggregates, TestDistribution, LogDistribution) {
        var testDistribution = null, logDistribution = null;
        
        Aggregates.then(function(res) {
            $scope.res = res;

            testDistribution = res.testDistribution;
            logDistribution = res.logDistribution;
        });
        
        $scope.getTestDistribution = function(reportId) {
            for (var ix = 0; ix < testDistribution.length; ix++)
                if (testDistribution[ix].report.id === reportId)
                    return TestDistribution.getTestDistribution(testDistribution[ix]);
        };
        
        $scope.getLogDistribution = function(reportId) {
            for (var ix = 0; ix < testDistribution.length; ix++)
                if (testDistribution[ix].report.id === reportId)
                    return LogDistribution.getLogDistribution(logDistribution[ix]);
        };
    }]);