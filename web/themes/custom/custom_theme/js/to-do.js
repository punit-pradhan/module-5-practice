(function ($, Drupal, once) {
  Drupal.behaviors.todoBehavior = {
    attach: function (context, settings) {
      const todoListName = 'custom_todo_list';
      const $listElement = $('#custom-to-do-list');
      const $savedItemUl = $('#custom-saved-item-ul');
      const $emptyList = $('#custom-to-do-list-empty');
      let todoList = JSON.parse(localStorage.getItem(todoListName)) || [];

      function addTodoItem() {
        const $todoInput = $listElement.val().trim();

        if ($todoInput !== '') {
          $emptyList.hide();
          $savedItemUl.show();
          $savedItemUl.append(`<li>${$todoInput}</li>`);
          saveTodoItem($todoInput);
          $listElement.val('');
        }
      }

      function clearTodoList() {
        deleteTodoList();
        $savedItemUl.hide();
        $emptyList.show();
      }

      function saveTodoItem($inputItem) {
        todoList.push($inputItem);
        localStorage.setItem(todoListName, JSON.stringify(todoList));
      }

      function showTodoList(element) {
        $savedItemUl.append(`<li>${element}</li>`);
      }

      function deleteTodoList() {
        localStorage.removeItem(todoListName);
        todoList = [];
        $savedItemUl.empty();
      }

      once('customTodo', $listElement, context).forEach(function (element) {
        $('#custom-to-do-submit').on('click', addTodoItem);
        $('#custom-to-do-clear').on('click', clearTodoList);

        if (todoList.length > 0) {
          todoList.forEach(showTodoList);
        } else {
          $emptyList.show();
          $savedItemUl.hide();
        }
      });
    },
  };
})(jQuery, Drupal, once);
