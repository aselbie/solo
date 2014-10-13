if (Contests.find().count() === 0) {
  Contests.insert({
    goal: 'win',
    contestantA: 'Bob Dole',
    contestantB: 'Yogi Bear',
    task: 'Martian space race',
  });
}