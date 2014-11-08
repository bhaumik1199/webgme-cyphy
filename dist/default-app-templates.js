angular.module("cyphy.default.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/default/templates/DesignSpace.html","<div class=\"design-space-view\">\r\n    <h1 class=\"main-header\">Design Space - {{dataModels.design.name}}</h1>\r\n    <div class=\"design-space-component-list col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Used Components</h3>\r\n        <component-list ng-if=\"state.designTreeLoaded && state.hasComponents\"\r\n                        connection-id=\"\'my-db-connection-id\'\"\r\n                        workspace-id=workspaceId\r\n                        avm-ids=\"dataModels.avmIds\"></component-list>\r\n        <span ng-if=\"!state.designTreeLoaded\" class=\"component-list-load\">Loading...</span>\r\n        <span ng-if=\"!state.hasComponents\" class=\"component-list-load\">No components in design..</span>\r\n    </div>\r\n    <div class=\"design-tree col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Space Tree</h3>\r\n        <design-tree design-id=\"designId\" connection-id=\"\'my-db-connection-id\'\"></design-tree>\r\n    </div>\r\n    <div class=\"configurations-actions col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-th\"></span>\r\n            Configurations\r\n            <span class=\"configuration-buttons\">\r\n                <button ng-disabled=\"state.desertInputAvaliable === false\" class=\"btn btn-default btn-sm\" ng-click=\"calculateConfigurations()\">Calculate</button>\r\n                <button ng-disabled=\"dataModels.configurations.length === 0\" class=\"btn btn-default btn-sm\" ng-click=\"saveConfigurations()\">Save Set</button>\r\n                <configuration-set-selector\r\n                                            design-id=\"designId\"\r\n                                            connection-id=\"\'my-db-connection-id\'\"></configuration-set-selector>\r\n            </span>\r\n        </h3>\r\n        <div ng-if=\"dataModels.configurations.length === 0\">{{state.configurationStatus}}</div>\r\n        <configuration-table ng-if=\"dataModels.configurations.length > 0\"\r\n                             configurations=\"dataModels.configurations\"\r\n                             set-name=\"dataModels.setName\"></configuration-table>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/SaveConfigurationSet.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Save {{data.nbrOfConfigurations}} configuration(s) to a new set.</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Name</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.name\" placeholder=\"Enter a name...\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <span class=\"title\">Description</span>\r\n                <textarea class=\"form-control edit-description\" data-ng-model=\"data.description\"\r\n                          placeholder=\"Enter an optional description...\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/default/templates/TestBench.html","<div class=\"test-bench-view\">\r\n    <h1 class=\"main-header\">Test Bench</h1>\r\n    <div class=\"test-bench-overview col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Overview</h3>\r\n\r\n    </div>\r\n    <div class=\"test-bench-designs col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Avaliable Designs</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=workspaceId used-by-test-bench=\"true\"></design-list>\r\n    </div>\r\n    <div class=\"configurations-actions col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-th\"></span>\r\n            Configurations\r\n            <span class=\"configuration-buttons\">\r\n                <button ng-disabled=\"dataModels.configurations.length === 0\" class=\"btn btn-default btn-sm\" ng-click=\"runTestBench()\">Run</button>\r\n                <configuration-set-selector ng-if=\"state.designId\" design-id=\"state.designId\" connection-id=\"\'my-db-connection-id\'\"></configuration-set-selector>\r\n            </span>\r\n        </h3>\r\n        <div ng-show=\"!state.designId\">Select a Top Level System Under Test...</div>\r\n        <div ng-show=\"state.designId && dataModels.configurations.length === 0\">Select a set (if avaliable)..</div>\r\n        <configuration-table ng-if=\"dataModels.configurations.length > 0\"\r\n                             configurations=\"dataModels.configurations\"\r\n                             set-name=\"dataModels.setName\"></configuration-table>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/WorkspaceDetails.html","<div class=\"workspace-details-view\">\r\n    <h1 class=\"main-header\">Workspace details</h1>\r\n    <div class=\"components col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Components</h3>\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"design-spaces col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Spaces</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></design-list>\r\n    </div>\r\n    <div class=\"test-benches col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-saved\"></span>Test Benches</h3>\r\n        <test-bench-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></test-bench-list>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/Workspaces.html","<div class=\"workspaces-view\">\r\n    <h1 class=\"main-header\">Workspaces</h1>\r\n    <div class=\"workspaces col-lg-12\">\r\n        <workspace-list data-connection-id=\"\'my-db-connection-id\'\"></workspace-list>\r\n    </div>\r\n</div>");}]);