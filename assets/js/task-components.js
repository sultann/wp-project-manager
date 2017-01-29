// Global object for all components and root
var CPM_Mixin = {
	data: function() {
		return {
            mixin_milestones: []
        }
	}, 	

	methods: {

        // Handel new todo list form show and hide
        showHideTodoListForm: function( list, list_index ) {
            if ( list.ID ) {
                this.$store.commit( 'showHideUpdatelistForm', { list: list, list_index: list_index } );
            } else {
                this.$store.commit( 'newTodoListForm' );
            }
        },

        showHideTaskForm: function(list_index, task_index) {
            this.$store.commit( 'showHideTaskForm', { list_index: list_index, task_index: task_index } );
        },
	}
}

// New todo list and update todo list form
Vue.component('todo-list-form', {
    template: '#tmpl-cpm-todo-list-form', 
    props: [ 'list', 'index' ],
    mixins: [CPM_Mixin],

    data: function() {
    	return {
            tasklist_privacy: this.list.private == 'on' ? true : false,
            submit_btn_text: this.list.ID ? CPM_Vars.message.update_todo : CPM_Vars.message.new_todo,
            tasklist_milestone: this.list.milestone ? this.list.milestone : '-1',
            show_spinner: false,
            error: [],
            success: '',
            submit_disabled: false
    	}
    },

    computed: {
        tdolist_view_private: function() {

            if ( ! this.$store.state.init.hasOwnProperty('premissions')) {
                return true;
            }

            if ( this.$store.state.init.premissions.hasOwnProperty('tdolist_view_private')) {
                return this.$store.state.init.premissions.tdolist_view_private
            }

            return true;
        },

        milestones: function() {
            return this.$store.state.milestones;
        },
    },

    methods: {

        taskFormClass: function( list ) {
            return list.ID ? 'cpm-todo-form-wrap cpm-form' : 'cpm-todo-list-form-wrap cpm-form';
        },

        newTodoList: function() {
            
            if ( this.submit_disabled ) {
                return;
            }

            this.submit_disabled = true;

            var self      = this,
                is_update = typeof this.list.ID == 'undefined' ? false : true,
                
                form_data = {
                    action: typeof this.list.ID == 'undefined' ? 'cpm_add_list' : 'cpm_update_list',
                    tasklist_name: this.list.post_title,
                    tasklist_detail: this.list.post_content,
                    tasklist_privacy: this.tasklist_privacy ? 'on' : 'no',
                    project_id: this.$store.state.project_id,
                    tasklist_milestone: this.tasklist_milestone,
                    list_id: typeof this.list.ID == 'undefined' ? false : this.list.ID,
                    _wpnonce: CPM_Vars.nonce,
                };
            
            this.show_spinner = true;
            
            jQuery.post( CPM_Vars.ajaxurl, form_data, function( res ) {

                if ( res.success ) {
                    self.tasklist_privacy   = false;
                    self.tasklist_milestone = '-1';
                    self.show_spinner       = false;

                    if ( is_update ) {
                        var list = res.data.list;
                    } else {
                        var list = res.data.list.list;
                    }

                    // Display a success toast, with a title
                    toastr.success(res.data.success);

                    // Hide the todo list update form
                    self.showHideTodoListForm( self.list, self.index );
                    
                    // Update store lists array 
                    self.$store.commit( 'update_todo_list', { res_list: list, list: self.list, index: self.index, is_update: is_update } );
                
                } else {
                    self.show_spinner = false;

                    // Showing error
                    res.data.error.map(function(value, index) {
                        toastr.error(value);
                    });
                }

                self.submit_disabled = false;
            });
        },
    }
});

// Show todo lists
Vue.component('todo-lists', {
    mixins: [CPM_Mixin],
    template: '#tmpl-cpm-todo-list', 

    data: function() {
        return {
            list: {},
            index: false
        }
    },

    computed: {
        lists: function () {
            return this.$store.state.lists;
        },

        milestones: function() {
            return this.$store.state.milestones;
        },

        project_id: function() {
            return this.$store.state.project_id;
        },

        init: function() {
            return this.$store.state.init;
        },
    }

});


// Show all todos
Vue.component('tasks', {
    mixins: [CPM_Mixin],

    template: '#tmpl-cpm-tasks', 

    props: ['list', 'index'],

    data: function() {
        return {
           showTaskForm: false,
           task: {},
           task_index: false
        }
    },

    computed: {
        tasks: function() {
            return this.list.tasks;
        },

        taskLength: function() {
            return this.list.tasks.length;
        }
    },

    methods: {
        taskEdit: function( task_index ) {
            this.showHideTaskForm( this.index, task_index );
        }
    }

});

// Default template for todo lists
Vue.component('todo-list-default-tmpl', {
    template: '#tmpl-todo-list-default',

    data: function() {
        return {
            list: {},
            index: false
        }
    },

    computed: {
        lists: function() {
            return this.$store.state.lists;
        },

        create_todolist: function() {
            if ( ! this.$store.state.init.hasOwnProperty( 'premissions' ) ) {
                return true;
            }

            return this.$store.state.init.premissions.create_todolist;
        },

        show_list_form: function() {
            return this.$store.state.show_list_form;
        }
    }
});

// New todo list btn 
Vue.component('new-todo-list-button', {
    template: '#tmpl-new-todo-list-button',

    mixins: [CPM_Mixin],

    data: function() {
        return {
            list: {},
            index: false,
            text: {
                new_todo: CPM_Vars.message.new_todo
            },
        }
    },

    computed: {
        show_list_form: function() {
            return this.$store.state.show_list_form;
        },
    }
});

// New task btn 
Vue.component('new-task-button', {
    template: '#tmpl-cpm-new-task-button',

    mixins: [CPM_Mixin],

    props: ['list', 'list_index', 'task'],

    data: function() {
        return {
            
        }
    },

    methods: {
        newTaskBtnClass: function() {
            return this.list.show_task_form ? 'cpm-col-3 cpm-new-task-btn-minus' : 'cpm-col-3 cpm-new-task-btn';
        },

        showNewTaskForm: function( list_index ) {
            //this.task = {};
            this.showHideTaskForm( list_index );
        }
    }
});

// New task form 
Vue.component('new-task-form', {
    template: '#tmpl-cpm-new-task-form',

    mixins: [CPM_Mixin],

    props: ['list', 'list_index', 'task', 'task_index'],

    data: function() {
        return {
            project_users: this.$store.state.project_users,
            task_privacy: this.task.task_privacy == 'yes' ? true : false,
            submit_disabled: false,
            show_spinner: false,
        }
    },

    created: function() {
        this.$root.$on( 'cpm_date_picker', this.getDatePicker );
    },

    watch: {
        task_privacy: function( val ) {
            if ( val ) {
                this.task.task_privacy = 'yes';
            } else {
                this.task.task_privacy = 'no';
            }
        }
    },

    computed: {
        todo_view_private: function() {
            if ( ! this.$store.state.init.hasOwnProperty('premissions')) {
                return true;
            }

            if ( this.$store.state.init.premissions.hasOwnProperty('todo_view_private')) {
                return this.$store.state.init.premissions.tdolist_view_private
            }

            return true;
        },

        task_assign: {
            get: function () {
                var filtered_users = [];

                if ( this.task.assigned_to && this.task.assigned_to.length ) {
                    var assigned_to = this.task.assigned_to.map(function (id) {
                        return parseInt(id);
                    });


                    filtered_users = this.project_users.filter(function (user) {
                        return (assigned_to.indexOf(parseInt(user.id)) >= 0);
                    });
                }

                return filtered_users;
                
            }, 

            set: function ( selected_users ) {
                this.task.assigned_to = selected_users.map(function (user) {
                    return user.id;
                });
            }
        },
    },

    methods: {

        getDatePicker: function( data ) {
            
            if ( data.field == 'datepicker_from' ) {
                this.task.start_date = data.date;
            }

            if ( data.field == 'datepicker_to' ) {
                this.task.due_date = data.date;
            }
        },

        hideNewTaskForm: function(list_index, task_index) {
            this.showHideTaskForm( list_index, task_index );
        },

        newTask: function() {
            if ( this.submit_disabled ) {
                return;
            }

            this.submit_disabled = true;

            var self      = this,
                is_update = typeof this.task.ID == 'undefined' ? false : true,
                
                form_data = {
                    action: typeof this.task.ID == 'undefined' ? 'cpm_task_add' : 'cpm_task_update',
                    task_assign: this.task.assigned_to,
                    task_title: this.task.post_title,
                    task_text: this.task.post_content,
                    task_start: this.task.start_date,
                    task_due: this.task.due_date,
                    task_privacy: this.task.task_privacy,
                    list_id: this.list.ID,
                    task_id: typeof this.task.ID == 'undefined' ? false : this.task.ID,
                    _wpnonce: CPM_Vars.nonce,
                };
            
            this.show_spinner = true;

            jQuery.post( CPM_Vars.ajaxurl, form_data, function( res ) {

                if ( res.success ) {
                    self.task_privacy = false;
                    self.show_spinner = false;

                    // Display a success toast, with a title
                    toastr.success(res.data.success);

                    if ( form_data.task_id ) {
                        self.showHideTaskForm( self.list_index, self.task_index );
                    } else {
                        // Hide the todo list update form
                        self.showHideTaskForm( self.list_index );    
                    }
                    
                    if ( ! form_data.task_id ) {
                        // Update store lists array 
                        self.$store.commit( 'update_task', { res: res, list_index: self.list_index, is_update: is_update } );    
                    }
                    
                } else {
                    self.show_spinner = false;
                    
                    // Showing error
                    res.data.error.map( function( value, index ) {
                        toastr.error(value);
                    });
                }

                self.submit_disabled = false;
            });
        }
    }
});

// Global multiselect
Vue.component('multiselect', VueMultiselect.default);






