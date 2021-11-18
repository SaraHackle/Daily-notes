// const searchTerm = "confident";
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

const newestNote = {
  id: 4,
  subject: "for loops",
  date: "11 / 17 / 2021",
  feeling: "confident",
  timeSpent: 15,
};

notes.push(noteAboutToday, newestNote);

for (const note of notes) {
  //   if (note.feeling === searchTerm) {
  console.log(`Note: ${note.id}
Subject is: ${note.subject}
Date : ${note.date}
Feeling: ${note.feeling}
Amount of time spent learning: ${note.timeSpent} minutes
`);
  //   }
}
const createNote = (noteObject) => {
  //code for adding `id` property to note object
  const lastIndex = notes.length - 1;
  const currentLastNote = notes[lastIndex];
  const maxId = currentLastNote.id;
  const idForNewNote = maxId + 1;

  noteObject.id = idForNewNote;

  const dateCreated = Date();
  notes.date = dateCreated;

  notes.push(noteObject);
};

// Create a new note object
const moreNewerNote = {
  subject: "functions",
  // date: "11 / 18 / 2021",
  feeling: "nervous",
  timeSpent: 60,
};

// Specify object as argument for function
//         |
//         |
//         V
createNote(moreNewerNote);
console.log(notes);
