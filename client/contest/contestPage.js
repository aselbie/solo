Template.contestPage.helpers({
  win: function() {
    var synonyms = [
      'Will prevail depite the odds',
      'Will triumph over all',
      'Will Conquer this day',
      'Will walk away with this one',
      'Will run circles around',
      'Will take the prize',
      'Will take the cake',
      'Will take care of this one',
      'Will \'git er\' done'
    ]
    return synonyms[Math.floor(Math.random() * synonyms.length)];
  }
})

Template.contestPage.events({
  'click .voteContestantA': function() {
    Contests.update(this._id, {$inc: {votesForA: 1}});
  },
  'click .voteContestantB': function() {
    Contests.update(this._id, {$inc: {votesForB: 1}});
  }
})