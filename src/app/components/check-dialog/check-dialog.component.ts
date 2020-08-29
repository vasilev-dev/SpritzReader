import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CardModel} from '../../shared/models/card.model';

@Component({
  selector: 'app-check-dialog',
  templateUrl: './check-dialog.component.html',
  styleUrls: ['./check-dialog.component.scss']
})
export class CheckDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CheckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CardModel) {}

  ngOnInit(): void {
  }

}
