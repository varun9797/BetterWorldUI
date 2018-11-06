import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = "varun";
  inputClass = "text-success";
  isTextSuccess = false;
  constructor() { }
  username;
  ngOnInit() {
  }
  popup(formObj){
    alert(JSON.stringify(formObj))
  }

}
