# JavaScript: Notes Store
In this challenge, the task is to create a class NotesStore. The class will manage a collection of notes, with each note having a state and a name. Valid states for notes are: 'completed', 'active', and 'others'. All other states are invalid.

The class must have following methods:
1. addNotes(state, name): adds a note with the given name and state to the collection. In addition to that:
   - If the passed name is empty, then it throws an Error with the message 'Name cannot be empty'.
   - If the passed name is non-empty but the given state is not a valid state for a note, then it throws an Error with the message 'Invalid state {state}'.
2. getNotes(state): returns an array of names of notes with the given state added so far. The names are returned in the order the corresponding notes were added. In addetion to that:
   - If the given state is not a valid note state, then it throws an Error with the message 'Invalid state {state}'.
   - If no note is found in this state, it returns an empty array.

```
'use strict';

class NotesStore {
  // add your code here
}
```
