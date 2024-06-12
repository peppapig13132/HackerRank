'use strict';

class NotesStore {
  constructor() {
    this.notes = [];
  }

  static validNoteStates = ['completed', 'active', 'others'];
  
  addNote(state, name) {
    if(!name) {
      throw new Error('Name cannot be empty');
    }
  
    if(!NotesStore.validNoteStates.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }

    this.notes.push({state, name});
  }

  getNotes(state) { 
    if(!NotesStore.validNoteStates.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }

    return this.notes.filter(note => note.state === state).map(note => note.name);
  }
}
