<template>
  <div class="uk-container">

    <div class="content box">
      <h4 class="uk-heading-divider">Search<span></span></h4>
    </div>

    <div class="content box">
      <ul uk-accordion="multiple: true">
        <li v-for="course in courses">
          <a class="uk-accordion-title" href="#">{{course.id}} - {{course.name}} ({{course.sections.length}} Section)</a>
          <div class="uk-accordion-content">
            <div class="uk-overflow-auto">
              <table class="uk-table uk-table-justify uk-table-divider uk-table-striped">
                <thead>
                  <tr>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Section</th>
                    <th class="uk-width-1-3 uk-table-middle uk-text-center" rowspan="2">Teacher</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" colspan="2">Credit</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Day</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Time</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Room</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Seat</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Enrolled</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center" rowspan="2">Add</th>
                  </tr>
                  <tr>
                    <th class="uk-width-auto uk-table-middle uk-text-center">lec</th>
                    <th class="uk-width-auto uk-table-middle uk-text-center">lab</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="section in course.sections">
                    <td class="uk-text-center">{{ section.id }}</td>
                    <td class="uk-text-center">{{ section.teacher }}</td>
                    <td class="uk-text-center">{{ section.credit_lec }}</td>
                    <td class="uk-text-center">{{ section.credit_lab }}</td>
                    <td class="uk-text-center">{{ section.day }}</td>
                    <td class="uk-text-center">{{ section.time }}</td>
                    <td class="uk-text-center">{{ section.room }}</td>
                    <td class="uk-text-center">{{ section.seat }}</td>
                    <td class="uk-text-center"><span class="uk-label">{{ section.enrolled }}</span></td>
                    <td class="uk-text-center" v-if="isAvailable(section)"><button class="uk-button add" type="button" v-on:click="add(course,section)">Add</button></td>
                    <td class="uk-text-center" v-else><button class="uk-button" type="uk-button" disabled>Full</button></td>
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
import axios from 'axios';

export default {
  name: 'Courses',
  data (){
    return {
      errors: [],
      courses: [
        {
          id:'012200',
          name:'MIND VOLUNTEER',
          sections: [
            {
              id: '001',
              teacher: [ 'Rapee Sangsakorn' ],
              credit_lec: 3,
              credit_lab: 0,
              day: 'TuF',
              time: [ '12.30-15.30' ],
              room: ['AKB4801'],
              seat: 35,
              enrolled: 32,
            },
            {
              id: '002',
              teacher: [ 'Rapee Sangsakorn' , 'staff' ],
              credit_lec: 3,
              credit_lab: 0,
              day: 'TuF',
              time: [ '15.30-18.30' ],
              room: ['AKB4801'],
              seat: 35,
              enrolled: 35,
            }
          ]
        },
        {
          id:'951100',
          name:'MODERN LIFE AND ANIMATION',
          sections: [
            {
              id: '001',
              teacher: [ 'Rapee Sangsakorn' ],
              credit_lec: 3,
              credit_lab: 0,
              day: 'TuF',
              time: [ '12.30-15.30' ],
              room: ['AKB4801'],
              seat: 35,
              enrolled: 35,
            }
          ]
        },
      ],
    }
  },

  methods: {
    add: function(course,section){
      section.enrolled++;
      console.log("ADD -> { course: " + course.id + ", section: " + section.id + " }");
    },
    isAvailable: function(section){
      if(section.seat - section.enrolled > 0) return true;
      return false;
    },
  },

  // created() {
  //   axios.get(`/courses`)
  //   .then(response => {
  //     // JSON responses are automatically parsed.
  //     this.courses = response.data;
  //   })
  //   .catch(e => {
  //     this.errors.push(e);
  //   })

  // async / await version (created() becomes async created())
  //
  // try {
  //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
  //   this.posts = response.data
  // } catch (e) {
  //   this.errors.push(e)
  // }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
