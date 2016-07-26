import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        title: 'Favorite Things',
        items: [
          { content: 'Keith Hulu' },
          { content: 'Cats' },
          { content: 'Pokemon' },
          { content: 'Dynamite' },
          { content: 'Cake' }
        ]
      },
      {
        title: 'Todo',
        items: [
          { content: 'Learn Ember' },
          { content: 'Master Ember' },
          { content: 'Be One with Ember' },
          { content: 'Live Ember' },
          { content: 'Catch all Pokemon' }
        ]
      }
    ];
  }
});
