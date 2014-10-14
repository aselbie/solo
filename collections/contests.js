Contests = new Meteor.Collection('contests');

ContestSchema = new SimpleSchema({
  goal: {
    type: String
  },
  contestantA: {
    type: String
  },
  contestantB: {
    type: String
  },
  task: {
    type: String
  },
  votesForA: {
    type: Number,
    defaultValue: 0
  },
  votesForB: {
    type: Number,
    defaultValue: 0
  }
});

Contests.attachSchema(ContestSchema);