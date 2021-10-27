<template>
<div>
    <h1>
       Register Form
    </h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter Username...">
            <div id="username" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">First Name</label>
            <input v-model="first" type="text" class="form-control" id="first" placeholder="Enter Your First Name...">
        </div>
        <div class="mb-3">
            <label for="username" class="form-label">Last Name</label>
            <input v-model="last" type="text" class="form-control" id="last" placeholder="Enter Your Last Name...">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter Password...">
        </div>
        <div class="mb-3 ">
            <button type="submit" class="btn btn-secondary">Submit</button>
        </div>
    </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'register',
        data: function() {
            return {
                username: '',
                password: '',
                fist: '',
                last: ''
            }
        },
        methods:{
            onSubmit: async function(){
                const user = {
                    username: this.username,
                    password: this.password,
                    first: this.first,
                    last: this.last
                }   
                const registerPromise = auth.registerUser(user);
                const loginPromise = auth.login(user);
                await Promise.all([registerPromise, loginPromise]);
                this.$router.push({name: 'Home'});
            }
        }

    }
</script>