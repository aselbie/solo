Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('contests'); }
});

Router.map(function() {
  this.route('contestList', {path: '/'});
  this.route('contestPage', {
    path: '/contests/:_id',
    data: function() { return Contests.findOne(this.params._id); }
  });
});

Router.onBeforeAction('loading');