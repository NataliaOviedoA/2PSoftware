
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class NotesService {
    constructor(public afDB: AngularFireDatabase){

    }

    public getNodes(){
      return this.afDB.list('/nodes/');
    }

    public getNote(id){
      return this.afDB.object('/notes/' + id);
    }

    public createNote(note){
      return this.afDB.database.ref('/notes/' + note.id).set(note);
    }

    public editNode(note){
      return this.afDB.database.ref('/notes/' + note.id).set(note);
    }

    public deleteNote(note){
      // Eliminar registro de firebase
    }
}
