import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IJournal, JournalService } from '../services/journal.service';
import * as moment from 'moment'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private service: JournalService) {this.GetJournal()}

  update = false
  updateId = ""
  ngOnInit(): void {
    setInterval(()=>{this.GetJournal() }, 500);
  }

  posts?:IJournal[] = []

  PostDay(date:string)
  {
    this.service.Post(this.htmlContent,date)
    
  }
  async GetJournal()
  { 
    this.posts = await this.service.Posts
  }

  async DeleteDay(id:string)
  {
    this.service.Delete(id)
  }

  async UpdateDay(date:string){
    this.service.Update(this.updateId, this.htmlContent, date)
    this.update = false
 }
  ChangeContent(text: string, id:string)
  {
  this.update = true
  this.htmlContent = text
  this.updateId = id
  }
  htmlContent = ""
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  ConvertDate(date:string)
  {
    return moment(date).format('ll');  
  }
}
