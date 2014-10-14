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
    this.votes.a++;
    Contests.update(this._id, this);
  },
  'click .voteContestantB': function() {
    this.votes.b++;
    Contests.update(this._id, this);
  }
})