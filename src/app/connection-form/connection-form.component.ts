import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Connection } from '../domain/connection';

@Component({
  selector: 'connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  @Input() url : string = '';
  @Output("onSubmit") _onSubmit = new EventEmitter<Connection>();

  model : Connection = new Connection('', '', '');
  submitted = false;

  ngOnInit() {
    this.reset();
  }

  onSubmit(form) : void {
    this.submitted = true;
    this._onSubmit.emit(new Connection(this.url, this.model.username, this.model.password));
    form.reset();
    this.reset();
  }

  reset() : void {
    this.model.username = '';
    this.model.password = '';
    this.submitted = false;
  }

}
