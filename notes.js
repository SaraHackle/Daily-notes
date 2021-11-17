const notes = [
  {
    id: 1,
    subject: "data",
    date: "11 / 16 / 2021",
    feeling: "confident",
    timeSpent: 15,
  },
  {
    id: 2,
    subject: "arrays",
    date: "11 / 16 / 2021",
    feeling: "excited",
    timeSpent: 20,
  },
];

const noteAboutToday = {
  id: 3,
  subject: "push",
  date: "11 / 16 / 2021",
  feeling: "ambitious",
  timeSpent: 10,
};

notes.push(noteAboutToday);

for (const note of notes) {
  console.log(`Note: ${note.id}
Subject is: ${note.subject}
Date : ${note.date}
Feeling: ${note.feeling}
Amount of time spent learning: ${note.timeSpent} minutes
`);
}
