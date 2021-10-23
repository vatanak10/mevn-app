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
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tasks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Vatanak</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </header>
</template>