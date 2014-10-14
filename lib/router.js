Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('contests'); }
});

Router.map(function() {

  this.route('contestList', {path: '/'});

  this.route('newContestPage', {path: '/new'});

  this.route('contestPage', {
    path: '/contests/:_id',
    data: function() { return Contests.findOne(this.params._id); }
  });
  
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: []
});

Router.onBeforeAction('loading');

AccountsTemplates.configureRoute('signIn');
