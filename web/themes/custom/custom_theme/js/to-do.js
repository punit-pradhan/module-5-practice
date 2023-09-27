/**
 * @file
 * Provides the functionality to add or remove todo list items.
 */

(function ($, Drupal, once) {
    Drupal.behaviors.customTodoBehavior = {
      attach: function (context, settings) {
        // Apply the customTodo effect to the elements only once.
        const $inputField = $('#custom-to-do-list');
        const $savedItemList = $('#custom-saved-items');
        const $emptyMessage = $('#custom-empty-message');
        const customTodoListName = 'custom-todo-list';
        let customTodoList = JSON.parse(localStorage.getItem(customTodoListName)) || [];
  
        once('customTodo', $inputField, context).forEach(function (element) {
          $('#custom-submit-button').on('click', function (event) {
            event.preventDefault();
            const $newItem = $inputField.val().trim();
  
            if ($newItem !== '') {
              $emptyMessage.hide();
              $savedItemList.show();
              $savedItemList.append(`<li>${$newItem}</li>`);
              saveCustomToDoItem($newItem);
              clearInputField();
            }
          });
  
          $('#custom-clear-button').on('click', function (event) {
            event.preventDefault();
            clearAllCustomToDoItems();
          });
  
          function saveCustomToDoItem($item) {
            const itemList = getCustomToDoList();
            itemList.push($item);
            localStorage.setItem(customTodoListName, JSON.stringify(itemList));
          }
  
          function getCustomToDoList() {
            return JSON.parse(localStorage.getItem(customTodoListName)) || [];
          }
  
          function clearInputField() {
            $inputField.val('');
          }
  
          function clearDisplay() {
            $savedItemList.hide();
            $emptyMessage.show();
            clearInputField();
          }
  
          function displayCustomToDoList() {
            const itemList = getCustomToDoList();
            if (itemList.length > 0) {
              itemList.forEach(function (item) {
                $savedItemList.append(`<li>${item}</li>`);
              });
            } else {
              clearDisplay();
            }
          }
  
          displayCustomToDoList();
  
          function clearAllCustomToDoItems() {
            localStorage.removeItem(customTodoListName);
            customTodoList = [];
            $savedItemList.empty();
            clearDisplay();
          }
        });
      }
    };
  })(jQuery, Drupal, once);
  