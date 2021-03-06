/**
* Theme: Adminox Admin Template
* Author: Coderthemes
* Todos-widget
*/

!function($) {
    "use strict";

    var TodoApp = function() {
        this.$body = $("body"),
        this.$todoContainer = $('#todo-container'),
        this.$todoMessage = $("#todo-message"),
        this.$todoRemaining = $("#todo-remaining"),
        this.$todoTotal = $("#todo-total"),
        this.$archiveBtn = $("#btn-archive"),
        this.$todoList = $("#todo-list"),
        this.$todoDonechk = ".todo-done",
        this.$todoForm = $("#todo-form"),
        this.$todoInput = $("#todo-input-text"),
        this.$todoBtn = $("#todo-btn-submit"),

        this.$todoData = [
        {
            'id': '1',
            'text': 'Design One page theme',
            'done': false
        },
        {
            'id': '2',
            'text': 'Build a js based app',
            'done': true
        },
        {
            'id': '3',
            'text': 'Creating component page',
            'done': true
        },
        {
            'id': '4',
            'text': 'Testing??',
            'done': true
        },
        {
            'id': '5',
            'text': 'Hehe!! This is looks cool!',
            'done': false
        },
        {
            'id': '6',
            'text': 'Build an angular app',
            'done': false
        },
        {
            'id': '7',
            'text': 'Schedule meeting with Bob',
            'done': false
        },
        {
            'id': '8',
            'text': 'Discuss task requirements',
            'done': false
        }];

        this.$todoCompletedData = [];
        this.$todoUnCompletedData = [];
    };

    //mark/unmark - you can use ajax to save data on server side
    TodoApp.prototype.markTodo = function(todoId, complete) {
       for(var count=0; count<this.$todoData.length;count++) {
            if(this.$todoData[count].id == todoId) {
                this.$todoData[count].done = complete;
            }
       }
    },
    //adds new todo
    TodoApp.prototype.addTodo = function(todoText) {
        this.$todoData.push({'id': this.$todoData.length, 'text': todoText, 'done': false});
        //regenerate list
        this.generate();
    },
    //Archives the completed todos
    TodoApp.prototype.archives = function() {
    	this.$todoUnCompletedData = [];
        for(var count=0; count<this.$todoData.length;count++) {
            //geretaing html
            var todoItem = this.$todoData[count];
            if(todoItem.done == true) {
                this.$todoCompletedData.push(todoItem);
            } else {
                this.$todoUnCompletedData.push(todoItem);
            }
        }
        this.$todoData = [];
        this.$todoData = [].concat(this.$todoUnCompletedData);
        //regenerate todo list
        this.generate();
    },
    //Generates todos
    TodoApp.prototype.generate = function() {
        //clear list
        this.$todoList.html("");
        var remaining = 0;
        for(var count=0; count<this.$todoData.length;count++) {
            //geretaing html
            var todoItem = this.$todoData[count];
            if(todoItem.done == true)
                this.$todoList.prepend('<li class="list-group-item"><div class="checkbox checkbox-primary"><input class="todo-done" id="' + todoItem.id + '" type="checkbox" checked><label for="' + todoItem.id + '">' + todoItem.text + '</label></div></li>');
            else {
                remaining = remaining + 1;
                this.$todoList.prepend('<li class="list-group-item"><div class="checkbox checkbox-primary"><input class="todo-done" id="' + todoItem.id + '" type="checkbox"><label for="' + todoItem.id + '">' + todoItem.text + '</label></div></li>');
            }
        }

        //set total in ui
        this.$todoTotal.text(this.$todoData.length);
        //set remaining
        this.$todoRemaining.text(remaining);
    },
    //init todo app
    TodoApp.prototype.init = function () {
        var $this = this;
        //generating todo list
        this.generate();

        //binding archive
        thhs.$archiveBtn.on("clyckb, function(e) {      ( 	e.preVuntDeFault();  "         $this.archives()k
            return .alse;
 �"     });

        //binding tod� done chk
  �   "8$(d/cument).ol("change#, thisN$todoDonechk, funcuionh) {
       $    if(thi�.checkef) 
    !          ($thisnmarkTOdo8(th)s).attr('id'),`tbue)9
            mhsU
 `              $this.markTodo($(this).atpr('id'), false);
          � //regenerate mist"           $thhs.g&Nerate();
   "    });

�    0  //binding the`~fw todo button `    � this.$todoBtN.nn("click", function() {
  � `      `if ($this.$touoInput/val() == "# || tyPEof($tHys.$todoInput.val()) == 'undefinad' || $�his.$todoYnputvcl() == n5ll� {
       � ! "($  sweedIler0("oops...",!"You forgot to enter todo text�, "error�
           %    $this.$todoIn�u4.focu{();
           `} else {
�               $this/addTodo($this.$todoinput.fal());
   "     !  }
   !�   ]);
    },
    //init To�oApp
,   $.UotoApp = new TodoApp, $.TodoApp&Constructr =!TodoA0p
    
}(wandow.jQuery)�

//ijiti�lizing(tod/ apt
fwNcwk�,($)!{
$ $0�usE"s�ri#t";  ` $.�dgE`p.igit()
}.6�nn�w.bQuerY)8