<template>


  <div class="uk-container">
      <div class="content box">
          <ul uk-accordion>
              <li class="uk-open">
                  <a class="uk-accordion-title" href="#">My Enrolled Courses</a>
                  <div class="uk-accordion-content">
                      <h4 class="uk-heading-divider">Lecture</h4>
                      <div class="uk-overflow-auto">
                          <table class="uk-table uk-table-justify uk-table-divider uk-table-striped">
                              <thead>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">#</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">ID</th>
                                      <th class="uk-width-1-3 uk-table-middle uk-text-center" rowspan="2">Courses Name</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Section</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" colspan="2">Credit</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Day</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Time</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Room</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Type</th>

                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Remove Courses</th>
                                  </tr>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lec</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lab</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="section in lecture.sections">
                                      <td class="uk-text-center">{{section.no}}</td>
                                      <td class="uk-text-center">{{section.id}}</td>
                                      <td class="uk-text-left">{{section.name}}</td>
                                      <td class="uk-text-center">{{section.sec_id}}</td>
                                      <td class="uk-text-center">{{section.credit_lec}}</td>
                                      <td class="uk-text-center">{{section.lab}}</td>
                                      <td class="uk-text-center">{{section.day}}</td>
                                      <td class="uk-text-center">{{section.time}}</td>
                                      <td class="uk-text-center">{{section.room}}</td>
                                      <td class="uk-text-center">{{section.type}}</td>
                                      <td class="uk-text-center"><button class="uk-button danger" type="button" v-on:click="withdraw(lecture,sections)">Withdraw</button></td>

                                  </tr>







                              </tbody>
                          </table>
                      </div>
                      <h4 class="uk-heading-divider">Lab</h4>
                      <div class="uk-overflow-auto">
                          <table class="uk-table uk-table-justify uk-table-divider uk-table-striped">
                              <thead>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">#</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">ID</th>
                                      <th class="uk-width-1-3 uk-table-middle uk-text-center" rowspan="2">Courses Name</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Section</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" colspan="2">Credit</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Day</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Time</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Room</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Type</th>

                                      <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Remove Courses</th>
                                  </tr>
                                  <tr>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lec</th>
                                      <th class="uk-width-auto uk-table-middle uk-text-center">lab</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="section in lab.sections">
                                    <td class="uk-text-center">{{section.no}}</td>
                                    <td class="uk-text-center">{{section.id}}</td>
                                    <td class="uk-text-left">{{section.name}}</td>
                                    <td class="uk-text-center">{{section.sec_id}}</td>
                                    <td class="uk-text-center">{{section.credit_lec}}</td>
                                    <td class="uk-text-center">{{section.lab}}</td>
                                    <td class="uk-text-center">{{section.day}}</td>
                                    <td class="uk-text-center">{{section.time}}</td>
                                    <td class="uk-text-center">{{section.room}}</td>
                                    <td class="uk-text-center">{{section.type}}</td>

                                        <td class="uk-text-center"><button class="uk-button danger" type="button" v-on:click="withdraw(lecture,sections)">Withdraw</button></td>

                                  </tr>

                                </tbody>
                          </table>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Student',
  data (){
    return {

      lecture: [
        {
          number : 1,

          sections: [
            {
              id:'204100',
              name:'IT AND MODERN LIFE',
              sec_id: '701',
              no: 1,
              credit_lec: 2,
              credit_lab: 1,
              day: 'Tu',
              time: [ '12.30-14.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },
        {
          number : 2,

          sections: [
            { id:'261111',
            name:'INTERNET AND ONLINE COMMUNITY',
              sec_id: '701',
              no: 2,
              credit_lec: 3,
              credit_lab: 0,
              day: 'Wed',
              time: [ '12.30-15.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },
        {
          number : 3,

          sections: [
            {
              id:'953323',
            name:'SOFWARE CONS TEST&MAINT',
              sec_id: '701',
              no: 3,
              credit_lec: 3,
              credit_lab: 0,
              day: 'Tu',
              time: [ '09.30-12.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },
        {
          number : 4,

          sections: [
            {
              id:'953411',
              name:'AI FOR SE',
              sec_id: '701',
              no: 4,
              credit_lec: 2,
              credit_lab: 1,
              day: 'TBA',
              time: [ '00.00-00.00' ],
              room: ['TBA'],
              type: 'p',

            }
          ]
        },
        {
          number : 5,

          sections: [
            {
              id:'953422',
              name:'SOFTWARE QUALITY ASSURANCE',
              sec_id: '701',
              no: 5,
              credit_lec: 3,
              credit_lab: 0,
              day: 'Fri',
              time: [ '09.30-12.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },
        {
          number : 6,

          sections: [
            {
              id:'953495',
              name:'ANDROID FOR SE',
              sec_id: '701',
              no: 6,
              credit_lec: 3,
              credit_lab: 0,
              day: 'Tu',
              time: [ '14.30-16.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },

      ],
      lab: [
        {
          number : 1,

          sections: [
            {
              id:'204100',
              name:'IT AND MODERN LIFE',
              sec_id: '701',
              no: 1,
              credit_lec: 2,
              credit_lab: 1,
              day: 'Tu',
              time: [ '12.30-14.30' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },


        {
          number : 2,

          sections: [
            {
              id:'953411',
              name:'AI FOR SE',
              sec_id: '701',
              no: 2,
              credit_lec: 2,
              credit_lab: 1,
              day: 'TBA',
              time: [ '00.00-00.00' ],
              room: ['TBA'],
              type: 'p',

            }
          ]
        },

        {
          number : 3,

          sections: [
            {
              id:'953392',
              name:'SE PREPROJECT',
              sec_id: '701',
              no: 3,
              credit_lec: 0,
              credit_lab: 1,
              day: 'Mon',
              time: [ '08.00-09.00' ],
              room: ['RB6201'],
              type: 'p',

            }
          ]
        },

      ],

    }
  },

  methods: {
    withdraw: function(lecture,sections){
  console.log("Withdraw -> { course: " + course.id + ", section: " + section.id + " }")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
