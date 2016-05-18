var app = angular.module('noteApp', []);
app.controller('myControl',function($scope){

});
app.directive('notePad', function() {
  return {
    restrict : "AE",
    // scope: {},
    link: function(scope, elem, attrs) {
      elem.bind('mouseover',function(){
          console.log("111");
        });
    	//编辑操作
      scope.name="111";
      scope.notes = [{id:'0',content:"newContent",title:"newTitle"}];
      scope.editMode=false;
      scope.openEditor = function(index){
        scope.editMode = true;
        if (index !== undefined) {
          scope.noteText = note[index].content;
          scope.index = index;
        } else
          scope.noteText = undefined;
      };
      //保存操作
      scope.save = function() {
        var i=0;
        // if (scope.noteText !== "" && scope.noteText !== undefined) {
        //   var note = {};
        //   note.title = scope.noteText.length > 10 ? scope.noteText.substring(0, 10) + '. . .' : scope.noteText;
        //   note.content = scope.noteText;
        //   note.id = i++;
        //   scope.notes = notes.push({id:note.id,content:note.content ,title:note.title});
        // }
        var note = {};
         note.title ="222";
          note.content = "222";
          note.id = i++;
          scope.notes = notes.push({id:note.id,content:note.content ,title:note.title});
      };


      //初始化
      scope.restore = function() {
        scope.editMode = false;
        scope.index = -1;
        scope.noteText = "";
      };

      // var editor = elem.find('#editor');
      // scope.restore();
      // scope.notes = notesFactory.getAll();
      // editor.bind('keyup keydown', function() {
      //   scope.noteText = editor.text().trim();
      // });
    }
  };
});


// app.factory('notesFactory', function() {
//   return {
   
//   	//存储笔记
//     put: function(note) {
//       notes.push(note);
//       return this.getAll();
//     },
//     //获取一条笔记
//     get: function(index) {
//       return JSON.parse(localStorage.getItem('note' + index));
//     },
//     //获取所有笔记
//     getAll: function() {
//        var notes = [];
//       for (var i = 0; i < localStorage.length; i++) {
//         if (localStorage.key(i).indexOf('note') !== -1) {
//           var note = localStorage.getItem(localStorage.key(i));
//           notes.push(JSON.parse(note));
//         }
//       }
//       return notes;
//     }
//   };
// });