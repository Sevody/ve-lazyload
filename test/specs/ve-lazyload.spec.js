import Vue from 'vue';
import Component from '../../src/ve-lazyload/ve-lazyload';

describe('ve-lazyload.vue', () => {
  const Constructor = Vue.extend(Component);
  const propsData = {
    src: "https://i.pximg.net/c/600x600/img-master/img/2017/11/30/01/10/17/66095083_p0_master1200.jpg",
    width: '300px',
    height: '300px',
  };

  it('should instance the right component', () => {
    const vm = new Constructor({propsData});
    expect(vm.$options.name).to.equal('ve-lazyload');
  });

  it('should render correct content', function() {
    const vm = new Constructor({propsData}).$mount();
    console.log(vm.$el.querySelector('.target-img'))
    expect(vm.$el.style.width).to.equal(propsData.width);
  });
});
