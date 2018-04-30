<template>
  <div class="header">
    <div class="banner">
        <h3>Registration System</h3>
    </div>

    <nav v-bind:class="active" class="uk-navbar-container" uk-navbar uk-sticky="bottom: #offset; show-on-up: true; animation: uk-animation-slide-top;">
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li><router-link to='/'><span class="uk-icon" uk-icon="icon: home"></span>Home</router-link></li>
                <li><router-link to='/courses'>Courses</router-link></li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li><a class="login" type="button" uk-toggle="target: #offcanvas-slide"><span class="uk-icon" uk-icon="icon: sign-in"></span>Login</a></li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
