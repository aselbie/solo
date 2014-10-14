Template.nav.helpers({
  username: function() {
    var user = Meteor.user();
    return user ? user.emails[0].address : '';
  }
})

Template.nav.events({
  'click .logout': function() {
    Meteor.logout();
  }
})