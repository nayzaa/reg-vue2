<template>
<div class="container">

    <div class="header">
        <h3>Registration System</h3>
    </div>

    <nav v-bind:class="active" class="uk-navbar-container" uk-navbar uk-sticky="bottom: #offset; show-on-up: true; animation: uk-animation-slide-top;">
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li><a href="index_s.html" class="home"><span class="uk-icon" uk-icon="icon: home"></span>Home</a></li>
                <li><a href="courses_s.html" class="courses">Courses</a></li>
                <li><a href="fee.html" class="fee">Tuition Fee</a></li>
                <li><a href="gpa.html" class="gpa">GPA</a></li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li><a href="index.html"><span class="uk-icon" uk-icon="icon: sign-out"></span>Logout</a></li>
            </ul>
        </div>
    </nav>

    <div class="uk-container">
        <div class="content box">
            <form>
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Tuition Fee</legend>
                    <div class="uk-margin">
                        <p>Name : Surasung Vunlai</p>

                    </div>
                    <div class="uk-overflow-auto">
                        <table style="width: 100%">
                            <thead>
                                <tr>
                                    <th align="left">Course</th>
                                    <th>Credits</th>
                                    <td></td>
                                    <th>Fee</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>001223 - ENGL FOR HUMAN & MASSCOM</td>
                                    <td align="center">3 credits</td>
                                    <td></td>
                                    <td align="center">60</td>
                                </tr>
                                <tr>
                                    <td>951100 - MODERN LIFE AND ANIMATION </td>
                                    <td align="center">3 credits</td>
                                    <td></td>
                                    <td align="center">60</td>
                                </tr>
                                <tr>
                                    <td>953323 - SOFWARE CONS TEST&MAINT </td>
                                    <td align="center">3 credits</td>
                                    <td></td>
                                    <td align="center">60</td>
                                </tr>
                                <tr>
                                    <td>953411 - AI FOR SE </td>
                                    <td align="center">3 credits</td>
                                    <td></td>
                                    <td align="center">60</td>
                                </tr>
                                <tr>
                                    <td>953422 - SOFTWARE QUALITY ASSURANCE </td>
                                    <td align="center">3 credits</td>
                                    <td></td>
                                    <td align="center">60</td>
                                </tr>

                            </tbody>

                            <tfoot>

                                <tr>

                                    <th align="right">Total Credits</th>
                                    <td align="center">15</td>
                                    <th align="left">Total Fee</th>
                                    <td align="center">300 Baht</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <p align="right">*Each credits is cost by 20 Baht.</p>


                    <div id="offcanvas-slide" uk-offcanvas="overlay: true; flip: true">
                        <div class="uk-offcanvas-bar">

                            <button class="uk-offcanvas-close" type="button" uk-close></button>

                            <h3>Login</h3>

                            <p>Username</p>
                            <input class="uk-input" type="text" name="username"/>
                            <p>Password</p>
                            <input class="uk-input" type="password" name="password"/>
                            <button class="uk-button uk-button-secondary uk-align-right" type="submit" name="login" value="Login">Login</button>

                        </div>
                    </div>
                    <!-- <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Print</button> -->
                </fieldset>
            </form>
        </div>
    </div>
    <div class="push"></div>
</div>
</body>
</template>

<!-- UIkit JS -->
<script src="js/uikit.js"></script>
<script src="js/uikit-icons.js"></script>
