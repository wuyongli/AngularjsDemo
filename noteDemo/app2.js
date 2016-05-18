var app = angular.module('noteApp', []);

app.directive("myNote",function(){
  return {
    restrict : "AE",
   link: function(scope, elem, attrs) {
      //编辑操作
      scope.notes = [{id:'0',content:"newContent",title:"newTitle"}];
      //保存操作
      scope.save = function() {
        var i=0;
        var note = {};
        note.title = scope.noteText.length > 10 ? scope.noteText.substring(0, 10) + '. . .' : scope.noteText;
        note.content = scope.noteText;
        note.id = i++;
        scope.notes = notes.push({id:note.id,content:note.content ,title:note.title});
      };
   },
    template:'<ul> <li ng-repeat="note in notes"><a href="#">{{note.title}}</a></li></ul><textarea ng-model="noteText"></textarea><span ng-click="save()">SAVE</span>'
  };
  
});

app.controller('myControl',function($scope,noteService){

});