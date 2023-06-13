import { Time } from "@angular/common";

export class Patient{

    public name: string;
    public age: string;
    public email: string;
    public objective: string;
    public physicalActivity: string;
    public healthProblem: string;
    public remedyOrSupplement: string;
    public bowelRhythm: string;
    public hasBloodTest: boolean;
    public breakfastTime: Time;
    public morningSnackTime: Time;
    public lunchTime: Time;
    public afternoonSnackTime: Time;
    public dinnerTime: Time;
    public supperTime: Time;
    public foodList: string[];


    constructor(name: string,
                age: string,
                email: string,
                objective: string,
                physicalActivity: string,
                healthProblem: string,
                remedyOrSupplement: string,
                bowelRhythm: string,
                hasBloodTest: boolean,
                breakfastTime: Time,
                morningSnackTime: Time,
                lunchTime: Time,
                afternoonSnackTime: Time,
                dinnerTime: Time,
                supperTime: Time,
                foodList: string[])
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.objective = objective;
        this.physicalActivity = physicalActivity;
        this.healthProblem = healthProblem;
        this.remedyOrSupplement = remedyOrSupplement
        this.bowelRhythm = bowelRhythm;
        this.hasBloodTest = hasBloodTest;
        this.breakfastTime = breakfastTime;
        this.morningSnackTime = morningSnackTime;
        this.lunchTime = lunchTime;
        this.afternoonSnackTime = afternoonSnackTime;
        this.dinnerTime = dinnerTime;
        this.supperTime = supperTime;
        this.foodList = foodList;
    }

    

}