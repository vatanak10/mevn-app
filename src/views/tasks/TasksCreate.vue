<template>
<div>
    <h1>
       Create Task
    </h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input v-model="task.title" type="text" class="form-control" name="title" id="title" placeholder="Enter Title...">
        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Description</label>
            <textarea v-model="task.body" class="form-control" name="body" id="body" cols="30" rows="10" placeholder="Enter Description..."></textarea>
        </div>
        <div class="mb-3">
            <label for="due-date" class="form-label">Due Date</label>
            <input v-model="task.dueDate" type="date" class="form-control" id="due-date" placeholder="Enter Due Date...">
        </div>
        <div class="mb-3 ">
            <button type="submit" class="btn btn-secondary">Create</button>
        </div>
    </form>
    </div>
</template>

<script>
    import * as TaskService from '../../services/TaskService'

    export default {
        name: 'tasks-create',
        data: function() {
            return {
                task: {
                    title: '',
                    body: '',
                    dueDate: ''
                }
            }
        },
        methods:{
            onSubmit: async function(){
                const request = {
                    task: this.task
                }
                await TaskService.createTask(request);
                this.$router.push({name: 'task-all'});
            }
        }

    }
</script>