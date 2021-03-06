import Vue from 'vue'
import Student from '@/components/Student'

describe('Student.vue', () => {

  /* =====================================================================
  TEST CASE: Show Enrolled Courses
  ===================================================================== */

  it('Show enrolled course', () => {
    // our test goes here

    // build component
    const Constructor = Vue.extend(Student);
    const StudentComponent = new Constructor().$mount();


    StudentComponent.lecture = [
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
      }
    ];

    // assert that component text contains items from the list
    assert.equal(StudentComponent.lecture[0].sections[0].id,'204100');
    assert.equal(StudentComponent.lecture[0].sections[0].name,'IT AND MODERN LIFE');
    assert.equal(StudentComponent.lecture[0].sections[0].sec_id,'701');
    assert.equal(StudentComponent.lecture[0].sections[0].no,1);
    assert.equal(StudentComponent.lecture[0].sections[0].day,'Tu');
    assert.equal(StudentComponent.lecture[0].sections[0].room,'RB6201');
    assert.equal(StudentComponent.lecture[0].sections[0].type,'p');

  });

  /* =====================================================================
  TEST CASE: Withdraw Courses Return true
  ===================================================================== */

  it('Function: withdraw return true', () => {
    // build component
    const Constructor = Vue.extend(Student)
    const StudentComponent = new Constructor().$mount();

    // set test data
    StudentComponent.lecture = [
      {
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
      }
    ];

    // assert & expected
    var withdraw = StudentComponent.withdraw(StudentComponent.lecture[0],StudentComponent.lecture[0].sections[0]);

    assert.equal(withdraw,true);
  });


  /* =====================================================================
  TEST CASE: Withdraw Courses Return falsse
  ===================================================================== */

  it('Function: withdraw return false', () => {
    // build component
    const Constructor = Vue.extend(Student)
    const StudentComponent = new Constructor().$mount();

    // set test data
    StudentComponent.lecture = [
      {
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
      }
    ];

    // assert & expected
    var withdraw = StudentComponent.withdraw(StudentComponent.lecture[0],StudentComponent.lecture[0].sections[0]);

    assert.equal(withdraw,false);
  });

})
