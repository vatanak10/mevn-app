<template>
<div>
    <h1>
       Login Form
    </h1>
    <form class="custom-form" v-on:submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter Username...">
            <div id="username" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter Password...">
        </div>
        <div class="mb-3 ">
            <button type="submit" class="btn btn-secondary">Login</button>
        </div>
    </form>
    </div>
</template>

<script>
    import * as auth from '../../services/AuthService'

    export default {
        name: 'login',
        data: function() {
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            onSubmit: async function(){
                const user = {
                    username: this.username,
                    password: this.password
                }
                await auth.login(user);
                this.$router.push({name: 'Home'})
            }
        }

    }
</script>