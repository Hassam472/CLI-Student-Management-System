#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class StudentProfile {
    student_Name: string;
    student_Id: number;
    enroll_Course: string;
    fee_Status: string;
    currently: string;
    batch: string;
    city: string

    constructor(student_Name: string, student_Id: number,
        enroll_Course: string, fee_Status: string, currently: string, batch: string,
        city: string) {

        this.student_Name = student_Name;
        this.student_Id = student_Id;
        this.enroll_Course = enroll_Course;
        this.fee_Status = fee_Status;
        this.currently = currently;
        this.batch = batch;
        this.city = city
    }
};

const login = await inquirer.prompt(
    [
        {
            name: "Login",
            type: "list",
            message: "Student Login",
            choices: ["New Registration", "Already a Student? Sign In"]
        }
    ]
)

if (login.Login === "Already a Student? Sign In") {

    const rollNo = await inquirer.prompt(
        [
            {
                name: "Rollno",
                type: "number",
                message: "Please Enter Your Roll Number?"
            }
        ]
    )

    const student1 = new StudentProfile("Muhammad Hassam Uddin", 415924, "TypeScript", "Paid", "On-site", "Batch 1", "Karachi");
    const student2 = new StudentProfile("Fayyaz Alam", 416147, "TypeScript", "Paid", "On-site", "Batch 1", "Karachi");
    const student3 = new StudentProfile("Muhammad Noman", 124990, "TypeScript", "Un-Paid", "Online", "Batch 1", "Hyderabad");
    const student4 = new StudentProfile("Imad Hussain", 125316, "React JS", "Un-Paid", "Online", "Batch 1", "Hyderabad");
    const student5 = new StudentProfile("Ali", 50175, "Python Programming", "Paid", "On-site", "Batch 1", "Karachi");

    if (rollNo.Rollno === student1.student_Id) {
        console.log(student1);
    }
    else if (rollNo.Rollno === student2.student_Id) {
        console.log(student2);
    }
    else if (rollNo.Rollno === student3.student_Id) {
        console.log(student3);
    }
    else if (rollNo.Rollno === student4.student_Id) {
        console.log(student4);
    }
    else if (rollNo.Rollno === student5.student_Id) {
        console.log(student5);
    } else {
        console.log(chalk.redBright.bold("Not Found Student Data"));
    }
};

if (login.Login === "New Registration") {

    let r1 = await inquirer.prompt(
        [
            {
                name: "NameRegister",
                type: "input",
                message: "Please Enter Your Full Name..."
            },
            {
                name: "Courses",
                type: "list",
                message: "Which course do you want to enroll in?",
                choices: ["TypeScript", "Tailwind CSS", "Block Chain", "Cybersecurity", "Graphic Designing"]
            },
            {
                name: "Location",
                type: "list",
                message: "Select your City",
                choices: ["Karachi", "Lahore", "Hyderabad", "Multan", "Quetta"]
            },
            {
                name: "Currently",
                type: "list",
                message: "Choose a campus",
                choices: ["On-Site", "Online"]
            },
        ]
    )
    if (r1) {
const submit = await inquirer.prompt(
    [
        {
            name: "Submit",
            type: "confirm",
            message: "Please verify your given details once and press Enter"
        }
    ]
)

}
    class newStudent {

        student_Name: string = r1.NameRegister;
        student_Id: number = Math.floor(Math.random() * 100000 + 1);
        enroll_Course: string = r1.Courses;
        currently: string = r1.Currently;
        batch: string = "Batch 2";
        city: string = r1.Location
    
        constructor() {
    
            this.student_Name;
            this.student_Id;
            this.enroll_Course;
            this.currently;
            this.batch;
            this.city;
        }
    }
    r1 = new newStudent();
    console.log(r1);
    console.log(chalk.yellowBright("Your Admission Has Been Successful!"));
}

