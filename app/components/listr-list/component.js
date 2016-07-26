import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['div'],
  classNameBindings: ['isHidden:list-hide'],
  isHidden: true,
  actions: {
    toggleList(){
      return this.toggleProperty('isHidden');
    }
  }
});
