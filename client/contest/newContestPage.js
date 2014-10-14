Template.newContestPage.events({
  'submit form': function(e) {
    e.preventDefault();

    var contest = {
      goal: $(e.target).find('[name=goal]').val(),
      contestantA: $(e.target).find('[name=contestantA]').val(),
      contestantB: $(e.target).find('[name=contestantB]').val(),
      task: $(e.target).find('[name=task]').val(),
      votes: {
        a: 0,
        b: 0
      }
    }

    contest._id = Contests.insert(contest);
    Router.go('/contests/:_id', contest);
  }
});