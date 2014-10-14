if (Contests.find().count() === 0) {
  Contests.insert({
    goal: 'win',
    contestantA: 'The Kool-Aid Man',
    contestantB: 'The Incredible Hulk',
    task: 'a smash-off',
  });
  Contests.insert({
    goal: 'go the distance',
    contestantA: 'Indiana Jones',
    contestantB: 'Ron Swanson',
    task: '29 days of heavy drinking'
  });
  Contests.insert({
    goal: 'set more hearts a-flutter',
    contestantA: 'Bill Nye',
    contestantB: 'Neil Degrasse Tyson',
    task: 'karaoke battle'
  });
  Contests.insert({
    goal: 'would be more confused',
    contestantA: 'Taylor Lautner',
    contestantB: 'this Alpaca',
    task: 'a romantic moonlight rendezvouz'
  });
}