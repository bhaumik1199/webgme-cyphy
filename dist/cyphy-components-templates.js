angular.module("cyphy.components.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/cyphy-components/templates/ComponentDetails.html","<div class=\"component-details\">\r\n    <h5>Connectors</h5>\r\n    <ul class=\"connector-list\">\r\n        <li class=\"connector-list-item\" ng-repeat=\"conn in details.connectors\"> {{conn.name}}</li>\r\n    </ul>\r\n    <h5>Properties</h5>\r\n    <ul class=\"property-list\">\r\n        <li class=\"property-list-item\" ng-repeat=\"prop in details.properties\">\r\n            {{prop.name}} [{{prop.dataType}}] {{prop.valueType}} <span ng-if=\"prop.derived\"> (is derived)</span>\r\n        </li>\r\n    </ul>\r\n    <h5>Ports</h5>\r\n    <ul class=\"port-list\">\r\n        <li class=\"port-list-item\" ng-repeat=\"port in details.ports\"> {{port.name}} [{{port.type}}] {{port.class}}</li>\r\n    </ul>\r\n</div>");
$templateCache.put("/cyphy-components/templates/ComponentEdit.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Edit Component</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <span class=\"title\">Description</span>\r\n                <textarea class=\"form-control edit-description\" data-ng-model=\"data.description\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/ComponentList.html","<div class=\"component-list\">\r\n    <script type=\"text/ng-template\" id=\"componentDetails.html\">\r\n        <component-details data-component-id=\"listData.items[$index].id\"></component-details>\r\n    </script>\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/ConfigurationSetSelector.html","<span class=\"configuration-set-selector\">\r\n    <div class=\"btn-group\" dropdown is-open=\"dataModel.isOpen\">\r\n        <button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" ng-disabled=\"dataModel.dataAvaliable === false\">\r\n            Load Set <span class=\"caret\"></span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li ng-repeat=\"configurationSet in dataModel.configurationSets\">\r\n                <a ng-click=\"loadConfigurations(configurationSet.id, configurationSet.name)\">{{configurationSet.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</span>");
$templateCache.put("/cyphy-components/templates/ConfigurationTable.html","<div class=\"configuration-table\">\r\n\r\n    <script type=\"text/ng-template\" id=\"tableCell.html\">\r\n        <a ng-click=\"cfgClicked(item)\" tooltip=\"View in tree\" tooltip-placement=\"right\"> {{item.name}} </a>\r\n    </script>\r\n\r\n    <p class=\"text-muted\">\r\n        Selected: <span class=\"badge\">{{ dataModel.selected.length }}</span> of\r\n        <span class=\"badge\">{{ dataModel.configurations.length }}</span> in {{dataModel.setName}}\r\n    </p>\r\n\r\n    <!-- ========== Usage ========== -->\r\n    <ad-table-lite table-name=\"DesertConfigurations\"\r\n                   column-definition=\"tableColumnDefinition\"\r\n                   local-data-source=\"dataModel.configurations\"\r\n                   page-sizes=\"[10, 20, 50, 100]\"\r\n                   pagination-btn-group-classes=\"btn-group btn-group-sm\"\r\n                   table-classes=\"table table-bordered\"\r\n                   selected-items=\"dataModel.selected\">\r\n    </ad-table-lite>\r\n</div>");
$templateCache.put("/cyphy-components/templates/DesignDetails.html","<div class=\"design-details\">\r\n    <h5>Connectors</h5>\r\n    <ul class=\"connector-list\">\r\n        <li class=\"connector-list-item\" ng-repeat=\"conn in details.connectors\"> {{conn.name}}</li>\r\n    </ul>\r\n    <h5>Properties</h5>\r\n    <ul class=\"property-list\">\r\n        <li class=\"property-list-item\" ng-repeat=\"prop in details.properties\">\r\n            {{prop.name}} [{{prop.dataType}}] {{prop.valueType}} <span ng-if=\"prop.derived\"> (is derived)</span>\r\n        </li>\r\n    </ul>\r\n    <h5>Ports</h5>\r\n    <ul class=\"port-list\">\r\n        <li class=\"port-list-item\" ng-repeat=\"port in details.ports\"> {{port.name}} [{{port.type}}] {{port.class}}</li>\r\n    </ul>\r\n</div>");
$templateCache.put("/cyphy-components/templates/DesignEdit.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Edit Design</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Name</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <span class=\"title\">Description</span>\r\n                <textarea class=\"form-control edit-description\" data-ng-model=\"data.description\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/DesignList.html","<div class=\"design-list\">\r\n    <script type=\"text/ng-template\" id=\"designDetails.html\">\r\n        <design-details data-design-id=\"listData.items[$index].id\"></design-details>\r\n    </script>\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/DesignTree.html","<div class=\"design-tree\">\r\n    <tree-navigator tree-data=\"treeData\" config=\"config\"></tree-navigator>\r\n</div>");
$templateCache.put("/cyphy-components/templates/SimpleModal.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">{{data.title}}</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                {{data.details}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/TestBenchDetails.html","<div class=\"test-bench-details\">\r\n    <h5>Connectors</h5>\r\n    <ul class=\"connector-list\">\r\n        <li class=\"connector-list-item\" ng-repeat=\"conn in details.connectors\"> {{conn.name}}</li>\r\n    </ul>\r\n    <h5>Properties</h5>\r\n    <ul class=\"property-list\">\r\n        <li class=\"property-list-item\" ng-repeat=\"prop in details.properties\">\r\n            {{prop.name}} [{{prop.dataType}}] {{prop.valueType}}\r\n        </li>\r\n    </ul>\r\n    <h5>Ports</h5>\r\n    <ul class=\"port-list\">\r\n        <li class=\"port-list-item\" ng-repeat=\"port in details.ports\"> {{port.name}} [{{port.type}}] {{port.class}}</li>\r\n    </ul>\r\n</div>");
$templateCache.put("/cyphy-components/templates/TestBenchEdit.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Edit Test Bench</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Name</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <span class=\"title\">Description</span>\r\n                <textarea class=\"form-control edit-description\" data-ng-model=\"data.description\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Test Bench Files (TODO: Make a file-drop and display hyperlink)</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.files\">\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Test Bench Path</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.path\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/TestBenchList.html","<div class=\"test-bench-list\">\r\n    <script type=\"text/ng-template\" id=\"testBenchDetails.html\">\r\n        <test-bench-details data-test-bench-id=\"listData.items[$index].id\"></test-bench-details>\r\n    </script>\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/WorkspaceEdit.html","<form>\r\n    <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Edit Workspace</h3>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <span class=\"title\">Name</span>\r\n                <input type=\"text\" class=\"form-control\" data-ng-model=\"data.name\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <span class=\"title\">Description</span>\r\n                <textarea class=\"form-control edit-description\" data-ng-model=\"data.description\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\r\n        <button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\r\n    </div>\r\n</form>");
$templateCache.put("/cyphy-components/templates/WorkspaceList.html","<div class=\"workspace-list\">\r\n    <item-list list-data=\"listData\" config=\"config\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"></item-list>\r\n</div>");
$templateCache.put("/cyphy-components/templates/WorkspaceNewItem.html","<form class=\"drop-box-new-workspace\" ng-file-drop=\"onDroppedFiles($files)\" ng-file-drag-over-class=\"dragOverClass($event)\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" data-ng-model=\"newItem.name\"\r\n                   placeholder=\"Name\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n            <textarea class=\"form-control edit-workspace-description\" rows=\"5\"\r\n                      data-ng-model=\"newItem.description\"\r\n                      placeholder=\"Description\"></textarea>\r\n        </div>\r\n    </div>\r\n    <ul class=\"dropped-files\">\r\n        <li class=\"dropped-file\" ng-repeat=\"file in model.droppedFiles\"> {{file.name}} {{file.size}}</li>\r\n    </ul>\r\n    <div class=\"row form-footer\">\r\n        <div class=\"col-md-8\">\r\n            <button class=\"btn btn-default btn-submit btn-success\"\r\n                    data-ng-click=\"createItem(newItem)\">Create\r\n            </button>\r\n        </div>\r\n    </div>\r\n</form>");}]);