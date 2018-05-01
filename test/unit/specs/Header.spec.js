import Vue from 'vue'
import Header from '@/components/Header'

describe('Header.vue', () => {

  /* =====================================================================
  TEST CASE 01: Function: Login() - can login -> return status 200
  ===================================================================== */
  it('Function: login() - can login -> return status 200 with message success', () => {
    // build component
    const Constructor = Vue.extend(Header);
    const HeaderComponent = new Constructor().$mount();

    // set test data
    user = [
      {
        username:'admin',
        password:'admin'
      }
    ];
    var result = HeaderComponent.login(user);

    // assert & expected
    assert.equal(result.status,200);
    assert.equal(result.data.message,"success");
  });

  /* =====================================================================
  TEST CASE 02: Function: Login() - can not Login -> return status 200 with message unsuccess
  ===================================================================== */
  it('Function: login() - can login -> return status 200 with message not correct', () => {
    // build component
    const Constructor = Vue.extend(Header);
    const HeaderComponent = new Constructor().$mount();

    // set test data
    user = [
      {
        username:'admin',
        password:'admin1'
      }
    ];
    var result = HeaderComponent.login(user);

    // assert & expected
    assert.equal(result.status,200);
    assert.equal(result.data.message,"not correct");
  });

  /* =====================================================================
  TEST CASE 03: Function: logout() - logout success -> return status 200 with message unsuccess
  ===================================================================== */
  it('Function: logout() - logout success', () => {
    // build component
    const Constructor = Vue.extend(Header);
    const HeaderComponent = new Constructor().$mount();

    // set test data
    var result = HeaderComponent.logout();

    // assert & expected
    assert.equal(result.status,200);
    assert.equal(result.data.message,"success");
  });


  /* =====================================================================
  TEST CASE 04: Function: logout() - logout fail -> return status 404
  ===================================================================== */
  it('Function: logout() - logout success', () => {
    // build component
    const Constructor = Vue.extend(Header);
    const HeaderComponent = new Constructor().$mount();

    // set test data
    var result = HeaderComponent.logout();

    // assert & expected
    assert.equal(result.status,404);
  });

})
