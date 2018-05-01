import Vue from 'vue'
import Courses from '@/components/Courses'

describe('Courses.vue', () => {

  /* =====================================================================
  TEST CASE 01: Function: add() - can add up enrolled seat after added
  ===================================================================== */
  it('Function: add() - can add up enrolled seat after added', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data
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

    // assert & expected
    CoursesComponent.add(CoursesComponent.courses[0],CoursesComponent.courses[0].sections[0]);
    var enrolled = CoursesComponent.courses[0].sections[0].enrolled;

    assert.equal(enrolled,33);
  });

  /* =====================================================================
  TEST CASE 02: Function: isAvailable() - 49/50 available return true
  ===================================================================== */
  it('Function: isAvailable() - 49/50 available return true', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data
    CoursesComponent.courses = [
      {
        sections: [
          {
            seat: 50,
            enrolled: 49,
          }
        ]
      }
    ];

    // assert & expected
    var isAvailable = CoursesComponent.isAvailable(CoursesComponent.courses[0].sections[0]);

    assert.equal(isAvailable,true);
  });

  /* =====================================================================
  TEST CASE 03: Function: isAvailable() - 50/50 available return false
  ===================================================================== */
  it('Function: isAvailable() - 50/50 available return false', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data
    CoursesComponent.courses = [
      {
        sections: [
          {
            seat: 50,
            enrolled: 50,
          }
        ]
      }
    ];

    // assert & expected
    var isAvailable = CoursesComponent.isAvailable(CoursesComponent.courses[0].sections[0]);

    assert.equal(isAvailable,false);
  });


  it('Can show mock data', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data
    CoursesComponent.courses = [
      {
        id:'999999',
        name:'COMP BASED',
        sections: [
          {
            id: '001',
            teacher: [ 'Aj.To' ],
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
            teacher: [ 'Aj.To' , 'staff' ],
            credit_lec: 3,
            credit_lab: 0,
            day: 'TuF',
            time: [ '15.30-18.30' ],
            room: ['AKB4801'],
            seat: 35,
            enrolled: 35,
          }
        ]
      }
    ];

    // assert & expected
    expect(CoursesComponent.$el.textContent).to.contain('999999 - COMP BASED (2 Section)');
    expect(CoursesComponent.$el.textContent).to.contain('Aj.To');
    expect(CoursesComponent.$el.textContent).to.contain('001');
    expect(CoursesComponent.$el.textContent).to.contain('002');
    expect(CoursesComponent.$el.textContent).to.contain('AKB4801');
    expect(CoursesComponent.$el.textContent).to.contain('ADD');
    expect(CoursesComponent.$el.textContent).to.contain('FULL');
  });

})
