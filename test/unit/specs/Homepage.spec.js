import Vue from 'vue'
import Homepage from '@/components/Homepage'

describe('Homepage.vue', () => {

  it('displays items from the list', () => {
    // our test goes here

    // build component
    const Constructor = Vue.extend(Homepage);
    const HompageComponent = new Constructor().$mount();

    // assert that component text contains items from the list
    expect(HompageComponent.$el.textContent).to.contain('Registration System');
  })

})
