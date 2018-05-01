import Vue from 'vue'
import Courses from '@/components/Courses'

describe('Courses.vue', () => {

  /* =====================================================================
  TEST CASE 01: Function: add() - can add up enrolled seat after added
  ===================================================================== */
  it('Function: enroll() - pass if enroll() return true', () => {
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
    var result = CoursesComponent.enroll(CoursesComponent.courses[0],CoursesComponent.courses[0].sections[0]);

    assert.equal(result,true);
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


  /* =====================================================================
  TEST CASE 04: Render page correctly
  ===================================================================== */
  it('Render page correctly', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data

    // assert & expected
    expect(CoursesComponent.$el.textContent).to.contain('012200 - MIND VOLUNTEER (2 Section)');
    expect(CoursesComponent.$el.textContent).to.contain('Rapee Sangsakorn');
    expect(CoursesComponent.$el.textContent).to.contain('001');
    expect(CoursesComponent.$el.textContent).to.contain('002');
    expect(CoursesComponent.$el.textContent).to.contain('AKB4801');
  });

  /* =====================================================================
  TEST CASE 05: Load data onCreate
  ===================================================================== */
  it('Load data onCreate', () => {
    // build component
    const Constructor = Vue.extend(Courses);
    const CoursesComponent = new Constructor().$mount();

    // set test data
    var result = CoursesComponent.created();

    // assert & expected
  });

})
