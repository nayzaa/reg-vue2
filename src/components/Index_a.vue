<template>
<div class="container">
    <div class="header">
        <h3>Registration System</h3>
    </div>

    <nav v-bind:class="active" class="uk-navbar-container" uk-navbar uk-sticky="bottom: #offset; show-on-up: true; animation: uk-animation-slide-top;">
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li><a href="index.html" class="home"><span class="uk-icon" uk-icon="icon: home"></span>Home</a></li>
                <li><a href="courses.html" class="courses">Courses</a></li>
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
            <ul uk-accordion>
                <li class="uk-open">
                    <a class="uk-accordion-title" href="#">Add Course</a>
                    <div class="uk-accordion-content">
                        <form name="createCourse" acction="#" onsubmit="alert('Success....Course created.')">
                        <!-- This one is not working ! -->
                        <!-- <form name="createCourse" onsubmit="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Success'})"> -->
                            <fieldset class="uk-fieldset" >
                                <div class="uk-margin">
                                    <input class="uk-input" type="text" placeholder="Course Name" name="courseName" required>
                                </div>
                                <div class="uk-margin">
                                    <input class="uk-input" type="text" placeholder="Course ID" name="courseId" required>
                                </div>

                                <div class="uk-margin">
                                    <div class="uk-form-label">Semester</div>
                                    <div class="uk-form-controls">
                                        <label><input class="uk-radio" type="radio" name="radio1"> Semester 1</label><br>
                                        <label><input class="uk-radio" type="radio" name="radio1"> Semester 2</label><br>
                                        <label><input class="uk-radio" type="radio" name="radio1"> Summer</label>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <div class="uk-form-label">Academic Year</div>
                                    <div uk-form-custom="target: > * > span:first-child">
                                        <select required>
                                            <option value="">Please select</option>
                                            <option value="1">2018</option>
                                            <option value="2">2017</option>
                                            <option value="3">2016</option>
                                            <option value="4">2015</option>
                                            <option value="5">2014</option>
                                            <option value="6">2013</option>
                                            <option value="7">2012</option>
                                            <option value="8">2011</option>
                                        </select>
                                        <button class="uk-button uk-button-default" type="button" tabindex="-1">
                                            <span></span>
                                            <span uk-icon="icon: chevron-down"></span>
                                        </button>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <div class="uk-form-label">DateTable</div>
                                    <div class="uk-form-controls">
                                        <label><input class="uk-checkbox" type="checkbox" checked> Monday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Tuesday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Wednesday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Thurday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Friday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Saturday</label>
                                        <label><input class="uk-checkbox" type="checkbox"> Sunday</label>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Section ID</label>
                                    <div class="uk-form-controls">
                                        <input id="section-value" class="uk-input uk-form-width-small" type="number" required> <p id="section"></p>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Class Period</label>
                                    <div class="uk-form-controls">
                                        <input id="startTime" class="uk-input uk-form-width-small" type="time">
                                        <span>-</span>
                                        <input id="endTime" class="uk-input uk-form-width-small" type="time">
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Maximum Student</label>
                                    <div class="uk-form-controls">
                                        <input id="student" class="uk-input uk-form-width-small" type="number" required>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <label class="uk-form-label" for="form-stacked-text">Credit</label>
                                    <div class="uk-form-controls">
                                        <input id="credit" class="uk-input uk-form-width-small" type="number" required>
                                    </div>
                                </div>

                                <div class="uk-margin">
                                    <input class="uk-input uk-form-width-large" type="text" placeholder="Lecturer" size="5" required>
                                    <button class="uk-button uk-button-default">Add lecturer</button>
                                </div>

                                <!-- This is a button toggling the modal with the default close button -->
                                <button class="uk-button uk-button-default uk-margin-small-right" type="submit" uk-toggle="target: #modal-close-default">Default</button>

                                <!-- This is the modal with the default close button -->
                                <div id="modal-close-default" uk-modal>
                                  <div class="uk-modal-dialog uk-modal-body">
                                    <button class="uk-modal-close-default" type="button" uk-close></button>
                                    <h2 class="uk-modal-title">Default</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </div>
                                </div>
                                <button type="submit" class="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom">Add Course</button>

                                <!-- <button type="submit" class="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom">Add Course</button> -->
                                <div id="modal-sections" uk-modal>
                                <div class="uk-modal-dialog">
                                  <button class="uk-modal-close-default" type="button" uk-close></button>
                                  <div class="uk-modal-header">
                                    <h2 class="uk-modal-title">Confirmation</h2>
                                  </div>
                                  <div class="uk-modal-body">
                                    <p>Are you sure to create this course ?</p>
                                  </div>
                                  <div class="uk-modal-footer uk-text-right">
                                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                    <button class="uk-button uk-button-primary uk-modal-close demo" type="button"
                                      onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Course Added...', status: 'success'}) ">Confirm</button>
                                  </div>
                                </div>
                              </div>

                            </fieldset>
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="push"></div>
</div>
</body>
</template>

<script src="js/uikit.min.js"></script>
<script src="js/uikit-icons.min.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
