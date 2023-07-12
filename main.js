$(document).ready(function() {
    var $form = $('#task-form');
    var $taskText = $('#task-text');
    var $taskList = $('#task-list');
  
    
    $form.on('submit', function(event) {
      event.preventDefault();
  
      var taskName = $taskText.val(); // Obter o nome da tarefa
  
      if (taskName.trim() !== '') {
        // Criar um novo elemento <li> com o nome da tarefa
        var $taskItem = $('<li></li>').text(taskName);
  
        // Adicionar um evento de clique no item da lista
        $taskItem.on('click', function() {
          $(this).toggleClass('completed');
        });
  
        // Adicionar o item à lista de tarefas
        $taskList.append($taskItem);
  
        $taskText.val('');
      }
    });
  });