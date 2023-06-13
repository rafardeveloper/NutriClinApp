import { Component } from '@angular/core';

@Component({
  selector: 'app-pacient-index',
  templateUrl: './pacient-index.component.html',
  styleUrls: ['./pacient-index.component.css']
})
export class PacientIndexComponent {
  name = "";
  age = "";
  email = "";
  objective = "";
  hasPhysicalActivity= "";
  physicalActivity = "";
  hasHealthProblem = "";
  healthProblem = "";
  hasRemedyOrSupplement = "";
  remedyOrSupplement = "";
  bowelRhythm = "";
  hasBloodTest = "";

  breakfast= {hasMeal: "", mealTime:""};
  morningSnack = {hasMeal: "", mealTime:""};
  lunch = {hasMeal: "", mealTime:""};
  afternoonSnack = {hasMeal: "", mealTime:""};
  dinner = {hasMeal: "", mealTime:""};
  supper = {hasMeal: "", mealTime:""};


  foodList= null;

  isError = true;

  elementBreakfast= {question1: "Come no café da manhã?", question2: "Qual o horário do café da manhã?", mealName: "breakFast"};
  elementMorningSnack= {question1: "Faz um lanche na manhã?", question2: "Qual o horário do lanche da manhã?", mealName: "morningSnack"};
  elementLunch= {question1: "Come no almoço?", question2: "Qual o horário do almoço?", mealName: "lunch"};
  elementAfternoonSnack= {question1: "Faz lanche da tarde?", question2: "Qual o horário do lanche da tarde", mealName: "afternoonSnack"};
  elementDinner = {question1: "Come no jantar?", question2: "Qual o horário do jantar?", mealName: "dinner"};
  elementSupper= {question1: "Faz lanche da noite?", question2: "Qual o horário do lanche da noite?", mealName: "supper"};



  onUpdateField()
  {
    return (this.areFieldsEmpty() || this.isNotNumber(this.age)); 
  }


  isNotNumber(patientAge: string): boolean
  {
    if(patientAge && !parseInt(patientAge))
    {
      this.isError = true;
      return true;
    }
    this.isError = false;
    return false;
  }

  areFieldsEmpty(): boolean
  {
    if(this.name === "" || 
      this.age === "" ||
      this.email === "" ||
      this.objective === "" ||
      this.hasPhysicalActivity  === "" ||
      this.hasHealthProblem  === "" ||
      this.hasRemedyOrSupplement  === "" ||
      this.bowelRhythm  === "" ||
      this.hasBloodTest  === "")
    {
      return true;
    }
    return false;
  }

  //MealTimeEvents

  onFormChanged(mealData: {hasMeal: string, mealTime: string} )
  {
    console.log(mealData.hasMeal);
  }

}
