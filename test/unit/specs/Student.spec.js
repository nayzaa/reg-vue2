import Vue from 'vue'
import Student from '@/components/Student'

describe('Student.vue', () => {

  it('displays items from the list', () => {
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
  //  StudentComponent.withdraw(StudentComponent.lecture[0],StudentComponent.lecture[0].sections[0]);

    var no = StudentComponent.lecture[0].sections[0].no;

    assert.equal(no,1)
  })

})
