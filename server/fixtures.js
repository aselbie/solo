if (Contests.find().count() === 0) {
  Contests.insert({
    goal: 'win',
    contestantA: 'The Kool-Aid Man',
    contestantB: 'The Incredible Hulk',
    task: 'a smash-off',
    votes: {
      a: 0,
      b: 0
    }
  });
  Contests.insert({
    goal: 'go the distance',
    contestantA: 'Indiana Jones',
    contestantB: 'Ron Swanson',
    task: '29 days of heavy drinking',
    votes: {
      a: 0,
      b: 0
    }
  });
  Contests.insert({
    goal: 'set more hearts a-flutter',
    contestantA: 'Bill Nye',
    contestantB: 'Neil Degrasse Tyson',
    task: 'karaoke battle',
    votes: {
      a: 0,
      b: 0
    }
  });
  Contests.insert({
    goal: 'would be more confused',
    contestantA: 'Taylor Lautner',
    contestantB: 'this Alpaca',
    task: 'met in romantic moonlight',
    votes: {
      a: 0,
      b: 0
    }
  });
}