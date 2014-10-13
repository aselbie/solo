Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('contests'); }
});

Router.map(function() {
  this.route('contestList', {path: '/'});
});

Router.onBeforeAction('loading');