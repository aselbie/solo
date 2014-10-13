Template.contestList.helpers({
  contests: function() {
    return Contests.find();
  }
});