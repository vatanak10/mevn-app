<template>
    <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
        <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
            <img alt="Vue logo" src="../assets/logo.png" style="max-height:25px"> 
            Task Manager
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav" style="margin-right: auto">                
                <li v-if="$store.state.isLoggedIn" class="nav-item">                    
                    <router-link to="/tasks" class="nav-link">Tasks</router-link>
                </li>
                <li v-if="!$store.state.isLoggedIn" class="nav-item">
                    <router-link to="/register" class="nav-link">Register</router-link>
                </li>
                <li v-if="!$store.state.isLoggedIn" class="nav-item">                    
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
                <li v-if="$store.state.isLoggedIn" class="nav-item">
                    <a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>
                </li>
                <li v-if="$store.state.isLoggedIn" class="nav-item">
                    <a class="nav-link" href="#">
                        {{this.$store.state.username ? this.$store.state.username : 'Username'}}
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </header>
</template>

<script>
import * as auth from '../services/AuthService';

export default {
    name: 'Navbar',
    methods: {
        logout: function() {
            auth.logout();
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>