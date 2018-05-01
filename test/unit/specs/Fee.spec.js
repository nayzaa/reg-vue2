import Vue from 'vue'
import Courses from '@/components/Fee'

describe('Fee.vue', () => {

  it('Render page correctly', () => {
    // build component
    const Constructor = Vue.extend(Fee);
    const FeeComponent = new Constructor().$mount();

    // set test data
    FeeComponent.fee = [
      {
        name: 'Surasung Vunlai',
        courses: [
          {
            id:'111111',
            course_name:'COMP BASED',
            credit: '3 credits',
            fee: '60'
          },
          {
            id:'999999',
            course_name:'COMP TOP',
            credit: '3 credits',
            fee: '60'
          }
        ],
        totalCredits: '15',
        totalFee: '300'
      }
    ];

    // assert & expected
    expect(FeeComponent.$el.textContent).to.contain('Surasung Vunlai');
    expect(FeeComponent.$el.textContent).to.contain('999999 - COMP TOP');
    expect(FeeComponent.$el.textContent).to.contain('3 credits');
    expect(FeeComponent.$el.textContent).to.contain('60');
    expect(FeeComponent.$el.textContent).to.contain('15');
    expect(FeeComponent.$el.textContent).to.contain('300');
  });
})
