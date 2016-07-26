import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['div'],
  classNameBindings: ['isCrossed:crossed-off'],
  isCrossed: false,
  actions: {
    toggleCrossed(){
      return this.toggleProperty('isCrossed');
    }
  }
});
