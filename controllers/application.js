import Ember from 'ember';

export default Ember.Controller.extend({
    todoText: '',
    todos: [],
    actions: {
        saveTodo: function() {
            var text = this.get('todoText');

            var todos = this.get('todos');

            var todo = {
                id: todos.length,
                todoText: text,
                isCompleted: false
            };

            todos.pushObject(todo);

            this.set('todoText', '');
        },

        toggleState: function(todo) {
            Ember.set(todo, 'isEditMode', !todo.isEditMode);
        },

        deleteTodo: function(todo) {
            var todos = this.get('todos');
            todos.removeObject(todo);
        }

    }

});
