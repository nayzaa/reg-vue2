import Vue from 'vue'
import Courses from '@/components/Courses'

describe('Courses.vue', () => {

  it('displays items from the list', () => {
    // our test goes here

    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    CoursesComponent.courses = [
      {
        id:'012200',
        sections: [
          {
            id: '002',
            enrolled: 32,
          }
        ]
      }
    ];

    // assert that component text contains items from the list
    CoursesComponent.add(CoursesComponent.courses[0],CoursesComponent.courses[0].sections[0]);
    var enrolled = CoursesComponent.courses[0].sections[0].enrolled;

    assert.equal(enrolled,33)
  })

})
