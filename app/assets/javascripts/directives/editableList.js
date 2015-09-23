app.directive("editableList", function(){
  var template = '<div class="panel panel-primary" >\
                    <div class="panel-heading">\
                      <h3 ng-hide="view.editorEnabled" class="panel-title" ng-click="enableEditor()">  {{ value.title }}</h3>\
                      <h6 class="panel-title"> Description: {{ value.description }}</h6>\
                      <h3 ng-show="view.editorEnabled" class="panel-title">\
                        <input style="background-color: gray;" ng-model="view.editableValue.title"></br>\
                        <input style="background-color: gray;" ng-model="view.editableValue.description">\
                        <a ng-click="save()">Save</a>\
                        <a ng-click="disableEditor()()">Cancel</a>\
                      </h3>\
                    </div>\
                    <div class="panel-body">\
                      Panel content\
                    </div>\
                  </div>'

  return {
    restrict: "A",
    replace: true,
    template: template,
    scope: {
        value: "=editableList",
        editList: "&",
    },
    controller: function($scope) {
        $scope.view = {
            editableValue: {title: $scope.value.title, description: $scope.value.description},
            editorEnabled: false
        };

        $scope.enableEditor = function() {
            $scope.view.editorEnabled = true;
            $scope.view.editableValue = $scope.value;
        };

        $scope.disableEditor = function() {
            $scope.view.editorEnabled = false;
        };

        $scope.save = function(id) {
            $scope.disableEditor();
            $scope.editList({listid: $scope.value.id, result: {list: $scope.view.editableValue}});
            $scope.value.title = $scope.view.editableValue.title;
            $scope.value.description = $scope.view.editableValue.description;
        };
    }
};
})