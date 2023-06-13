import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meal-time',
  templateUrl: './meal-time.component.html',
  styleUrls: ['./meal-time.component.css']
})
export class MealTimeComponent {
  hasMeal = "";
  mealTime = "";
  @Output() getMealData = new EventEmitter<{hasMeal: string, mealTime: string}>();

  @Input('mealElement')
  element!: { question1: string; question2: string, mealName: string };
  @Input('mealData') elementData!: {hasMeal: string; mealTime: string};

  public onFormChange()
  {
    
    this.elementData.hasMeal = this.hasMeal;
    this.elementData.mealTime = this.mealTime;
    this.getMealData.emit({hasMeal: this.elementData.hasMeal, mealTime: this.elementData.mealTime});
  }

}
