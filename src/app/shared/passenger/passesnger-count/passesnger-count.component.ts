import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passesnger-count',
  templateUrl: './passesnger-count.component.html',
  styleUrls: ['./passesnger-count.component.scss']
})
export class PassesngerCountComponent implements OnInit {
  @Input() totalPassCount !: number;
  @Input() checkedIn !: number;

  constructor() { }

  ngOnInit(): void {
  }

}
