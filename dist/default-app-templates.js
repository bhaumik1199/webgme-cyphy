angular.module("cyphy.default.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/default/templates/DesignSpace.html","<div class=\"design-space\">\r\n    <h1>Design Space</h1>\r\n    <div class=\"design-space-component-list col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Used Components</h3>\r\n        <component-list ng-if=\"state.designTreeLoaded && state.hasComponents\"\r\n                        connection-id=\"\'my-db-connection-id\'\"\r\n                        workspace-id=workspaceId\r\n                        avm-ids=\"dataModels.avmIds\"></component-list>\r\n        <span ng-if=\"!state.designTreeLoaded\" class=\"component-list-load\">Loading...</span>\r\n        <span ng-if=\"!state.hasComponents\" class=\"component-list-load\">No components in design..</span>\r\n    </div>\r\n    <div class=\"design-tree col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Space Tree</h3>\r\n        <design-tree design-id=\"designId\" connection-id=\"\'my-db-connection-id\'\"></design-tree>\r\n    </div>\r\n    <div class=\"configurations-actions col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-th\"></span>\r\n            Configurations\r\n            <span class=\"configuration-buttons\">\r\n                <button ng-disabled=\"state.desertInputAvaliable === false\" class=\"btn btn-default btn-sm\" ng-click=\"calculateConfigurations()\">Calculate</button>\r\n                <button ng-disabled=\"dataModels.configurations.length === 0\" class=\"btn btn-default btn-sm\" ng-click=\"saveConfigurations()\">Save Set</button>\r\n                <configuration-set-selector design-id=\"designId\"\r\n                                            connection-id=\"\'my-db-connection-id\'\"\r\n                                            set-name=\"dataModels.setName\"></configuration-set-selector>\r\n            </span>\r\n        </h3>\r\n        <div ng-if=\"dataModels.configurations.length === 0\">{{state.configurationStatus}}</div>\r\n        <configuration-table ng-if=\"dataModels.configurations.length > 0\" configurations=\"dataModels.configurations\"></configuration-table>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/TestBench.html","<div class=\"test-bench\">\r\n    <h1>Test Bench</h1>\r\n    <div class=\"test-bench-overview col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Overview</h3>\r\n\r\n    </div>\r\n    <div class=\"test-bench-designs col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Avaliable Designs</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=workspaceId used-by-test-bench=\"true\"></design-list>\r\n    </div>\r\n    <div class=\"configurations-actions col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-th\"></span>\r\n            Configurations\r\n            <span class=\"configuration-buttons\">\r\n                <button ng-disabled=\"dataModels.configurations.length === 0\" class=\"btn btn-default btn-sm\" ng-click=\"runTestBench()\">Run</button>\r\n                <configuration-set-selector ng-if=\"state.designId\" design-id=\"state.designId\" connection-id=\"\'my-db-connection-id\'\"></configuration-set-selector>\r\n            </span>\r\n        </h3>\r\n        <div ng-show=\"!state.designId\">Select a Top Level System Under Test...</div>\r\n        <div ng-show=\"state.designId && dataModels.configurations.length === 0\">Select a set (if avaliable)..</div>\r\n        <configuration-table ng-if=\"dataModels.configurations.length > 0\"\r\n                             configurations=\"dataModels.configurations\"\r\n                             title=\"dataModels.setName\"></configuration-table>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/WorkspaceDetails.html","<div class=\"workspace-details\">\r\n    <h1>Workspace details</h1>\r\n    <div class=\"components col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Components</h3>\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"design-spaces col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Spaces</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></design-list>\r\n    </div>\r\n    <div class=\"test-benches col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-saved\"></span>Test Benches</h3>\r\n        <test-bench-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></test-bench-list>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/Workspaces.html","<div class=\"workspaces\">\r\n    <h1>Workspaces</h1>\r\n\r\n    <workspace-list data-connection-id=\"\'my-db-connection-id\'\"></workspace-list>\r\n</div>");}]);