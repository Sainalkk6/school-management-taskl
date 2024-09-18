 
type StudentTypes = {
    name:string;
    id:string;
    marks:
        {
            subject:string,
            mark:number
        }[]
    
}

export type ClassObjType = {
    name:string;
    teacherName:string;
    students:StudentTypes[]
 }

 type FunctionType = (obj: ClassObjType, newValue?: string | number) => string;
 
 export const classObj:ClassObjType = {
    "name": "class A",
    "teacherName": "Mary",
    "students": [
        {
            "name": "Ravi",
            "id": "101",
            "marks": [
                { "subject": "English", "mark": 25 },
                { "subject": "Maths", "mark": 48 },
                { "subject": "Physics", "mark": 40 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 20 }
            ]
        },
        {
            "name": "Aju",
            "id": "102",
            "marks": [
                { "subject": "English", "mark": 35 },
                { "subject": "Maths", "mark": 38 },
                { "subject": "Physics", "mark": 33 },
                { "subject": "Chemistry", "mark": 34 },
                { "subject": "Computer", "mark": 30 }
            ]
        },
        {
            "name": "Mini SS",
            "id": "103",
            "marks": [
                { "subject": "English", "mark": 12 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 18 },
                { "subject": "Chemistry", "mark": 30 },
                { "subject": "Computer", "mark": 40 }
            ]
        },
        {
            "name": "Binu",
            "id": "104",
            "marks": [
                { "subject": "English", "mark": 49 },
                { "subject": "Maths", "mark": 49 },
                { "subject": "Physics", "mark": 47 },
                { "subject": "Chemistry", "mark": 46 },
                { "subject": "Computer", "mark": 50 }
            ]
        }
    ]
}


 
 const answers = [
    {
        "id":1,
        "question":"Write a function to print the name of the class ?",
        "function":(obj:any)=> `${obj.name}`
    },
    {
        "id":2,
        "question":"Write a function to print the teacher's name",
        "function":(obj:any)=> `${obj.teacherName}`
    },
    {
        "id":3,
        "question":"Write a function to print the names of all the students in the class.",
        "function":(obj:any)=> obj.students.map((student:StudentTypes)=>student.name).join('  , ')
    },
    {
        "id":4,
        "question":"Write a function to print the IDs of all the students in the class",
        "function":(obj:any)=> obj.students.map((student:StudentTypes)=>student.id).join('  , ')
    },
    {
        "id":5,
        "question":"Write a function to print the subject names for a specific student.",
        "type":"student",
        "function":(obj,newStudent:string)=>{
            const student = obj.students.find(student => student.name === newStudent)
            return student ? student.marks.map(mark => mark.subject).join(' , ') : '';
        }
        
    },
    {
        "id":6,
        "question":"Write a function to print the marks of a specific student in all subjects.",
        "type":"student",
        "function":(obj,newStudent:string)=>{
            const student = obj.students.find(student => student.name === newStudent)
            return student ? student.marks.map(mark=> `${mark.subject} : ${mark.mark}`).join(' , ') : "not found"
        }
    },
    {
        "id":7,
        "question":"Write a function to calculate and print the average marks for a specific student.",
        "type":"student",
        "function":(obj,newStudent:string)=>{
            let total = 0
            let count  = obj.students.length
            const student =  obj.students.find(student => student.name === newStudent)
            student.marks.forEach(mark => total+=mark.mark)
            return total / count
            
        }
    },
    {
        "id":8,
        "question":"Write a function to calculate and print the total marks for a specific student.",
        "function":(obj,newStudent:string)=>{
            let total = 0
            const student =  obj.students.find(student => student.name === newStudent)
            student.marks.forEach(mark => total+=mark.mark)
            return total
            
        },
        "type":"student"
    },
    {
        "id":9,
        "type":"subject",
        "question":"Write a function to calculate and print the average marks for all students in a specific subject.",
        "function":(obj,newSubject:string)=>{
            let total = 0
            let count = obj.students.length
            const marks = obj.students.map(student=> student.marks.find(mark => mark.subject === newSubject).mark)
            total = marks.reduce((acc,curr)=> acc+curr)
            return `The average mark of all students in ${newSubject} is ${total / count}`
            
        } 
    },
    {
        "id":10,
        "type":"subject",
        "question":"Write a function to calculate and print the total marks for all students in a specific subject.",
        "function":(obj,newSubject:string)=>{
            let total = 0
            let count = obj.students.length
            const marks = obj.students.map(student=> student.marks.find(mark => mark.subject === newSubject).mark)
            total = marks.reduce((acc,curr)=> acc+curr)
            return `The totla mark of all students in ${newSubject} is ${total}`
        },
    },
    {
        "id":11,
        "type":"subject",
        "question":"Write a function to find and print the student with the highest marks in a specific subject.",
        "function":(obj,newSubject:string)=>{
            let highest = 0
            let newStudent 
            obj.students.forEach(student => {
                const mark = student.marks.find(i=> i.subject === newSubject).mark
                if(mark > highest){
                    highest = mark
                    newStudent = student.name
                }
            })
            return `The student with the highest mark in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id":12,
        "type":"subject",
        "question":"Write a function to find and print the student with the lowest marks in a specific subject.",
        "function":(obj,newSubject:string)=>{
            let lowest = Infinity
            let newStudent 
            obj.students.forEach(student => {
                const mark = student.marks.find(i=> i.subject === newSubject).mark
                if(mark < lowest){
                    lowest = mark
                    newStudent = student.name
                }
            })
            return `The student with the lowest mark in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id":13,
        "question":"Write a function to find and print the student with the highest total marks.",
        "function":(obj)=>{
            let highest = 0
            let newStudent 
            obj.students.forEach(student=>{
               const total = student.marks.reduce((acc,curr)=> acc + curr.mark,0)
               console.log(total)
               if(total > highest){
                highest = total
                newStudent = student.name
               }
            })
            return ` The student with highest total mark is ${newStudent}`
        }
    },
    {
        "id":14,
        "question":"Write a function to find and print the student with the lowest total marks.",
        "function":(obj)=>{
            let lowest = Infinity
            let newStudent 
            obj.students.forEach(student=>{
               const total = student.marks.reduce((acc,curr)=> acc + curr.mark,0)
               console.log(total)
               if(total < lowest){
                lowest = total
                newStudent = student.name
               }
            })
            return ` The student with highest total mark is ${newStudent}`
        }
    },
    {
        "id":15,
        "question":"Write a function to find and print the subject with the highest average marks.",
        "function":(obj)=>{
            const subjectTotal = {}
            let highest = 0
            let newSubject
            let count = obj.students.flatMap(student=> student.marks.map(mark=> mark.subject))
            count = new Set(count)
            count = count.size
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            for(const subject in subjectTotal){
                const average = subjectTotal[subject] / count
                if(average > highest){
                    highest = average
                    newSubject = subject
                }
            }

            return `Subject with highest average mark is ${newSubject}`
            
        }
    },
    {
        "id":16,
        "question":"Write a function to find and print the subject with the lowest average marks.",
        "function":(obj)=>{
            const subjectTotal = {}
            let lowest = Infinity
            let newSubject
            let count = obj.students.flatMap(student=> student.marks.map(mark=> mark.subject))
            count = new Set(count)
            count = count.size
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            for(const subject in subjectTotal){
                const average = subjectTotal[subject] / count
                if(average < lowest){
                    lowest = average
                    newSubject = subject
                }
            }

            return `Subject with lowest average mark is ${newSubject}`
            
        }
    },
    {
        "id":17,
        "question":"Write a function to calculate and print the overall average marks for the class.",
        "function":(obj=>{
            let total = 0
            let count =0
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    total+=mark.mark
                    count++
                })
            })
            return `The  overall average marks for the class is ${total/count}`
        })
    },
    {
        "id":18,
        "question":"Write a function to calculate and print the overall total marks for the class.",
        "function":(obj=>{
            let total = 0
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>total+=mark.mark)
            })
            return `The  overall total marks for the class is ${total}`
        })
    },
    {
        "id":19,
        "question":"Write a function to calculate and print the average marks for each subject.",
        "function":(obj=>{
            let count = obj.students.length
            const subjectTotal = {}
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            const average = Object.keys(subjectTotal).map(subject=>{
                const totalAverage = subjectTotal[subject] / count
                return `${subject}: ${totalAverage}`
            })
            return `Average marks for each subject : ${average.join(' , ')}`
        })
    },
    {
        "id":20,
        "question":"Write a function to calculate and print the total marks for each subject.",
        "function":(obj=>{
            const subjectTotal = {}
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            const average = Object.keys(subjectTotal).map(subject=>{
                const total = subjectTotal[subject] 
                return `${subject}: ${total}`
            })
            return `Total marks for each subject : ${average.join(' , ')}`
        })
    },
    {
        "id":21,
        "question":"Write a function to find and print the subject with the highest total marks.",
        "function":(obj=>{
            const subjectTotal = {}
            let highest = 0
            let newSubject:string
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })

                for (const [subject, totalMarks] of Object.entries(subjectTotal)) {
                    if (totalMarks > highest) {
                      highest = totalMarks;
                      newSubject = subject;
                    }
                  }
            })
            return `The subject with the highest total marks is ${newSubject} `
        })
    },
    {
        "id":22,
        "question":"Write a function to find and print the subject with the lowest total marks.",
        "function":(obj=>{
            const subjectTotal = {}
            let lowest = Infinity
            let newSubject:string
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!subjectTotal[mark.subject]){
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })

                for (const [subject, totalMarks] of Object.entries(subjectTotal)) {
                    if (totalMarks < lowest) {
                      lowest = totalMarks;
                      newSubject = subject;
                    }
                  }
            })
            return `The subject with the highest total marks is ${newSubject} `
        })
    },
    {
        "id":23,
        "question":"Write a function to find and print the student(s) with the highest average marks.",
        "function":(obj => {
            let highest = 0;
            let newStudent;
        
            obj.students.forEach(student => {
              const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
              if (totalMarks > highest) {
                highest = totalMarks;
                newStudent = student.name;
              }
            });
            return  `Student with the highest average mark is ${newStudent}`
             
        })
    },
    {
        "id":24,
        "question":"Write a function to find and print the student(s) with the lowest average marks.",
        "answer":"Student with lowest average mark : Mini SS",
        "function":(obj => {
            let lowest = Infinity;
            let newStudent;
        
            obj.students.forEach(student => {
              const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
              const averageMarks = totalMarks / student.marks.length;        
              if (averageMarks < lowest) {
                lowest = averageMarks;
                newStudent = student.name;
              } 
            })
            return  `Student with the lowest average mark is ${newStudent}`
             
        })
    },
    {
        "id":25,
        "question":"Write a function to find and print the student(s) with the highest total marks.",
        "function":(obj => {
            let highest = 0;
            let newStudent;
        
            obj.students.forEach(student => {
              const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
              if (totalMarks > highest) {
                highest = totalMarks;
                newStudent = student.name;
              }
            });
            return  `Student with the highest total mark is ${newStudent}`
             
        })
    },
    {
        "id":26,
        "question":"Write a function to find and print the student(s) with the lowest total marks.",
        "function":(obj => {
            let lowest = Infinity;
            let newStudent;
        
            obj.students.forEach(student => {
              const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
              if (totalMarks < lowest) {
                lowest = totalMarks;
                newStudent = student.name;
              }
            });
            return  `Student with the lowest total mark is ${newStudent}`
        })
    },
    {
        "id":27,
        "question":"Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.",
        "type":"subject",
        "function":""
        // "answer":"Number of students who scored abouve 40 in Maths : 2"
    },
    {
        "id":28,
        "question":"Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.",
        "answer":"Number of students who scored below 35 in Physics : 2"
    },
    {
        "id":29,
        "question":"Write a function to calculate and print the number of students who scored above a certain mark in all subjects.",
        "answer":"Number of students who scored above 30 in all subjects: 2"
    },
    {
        "id":30,
        "question":"Write a function to calculate and print the number of students who scored below a certain mark in all subjects.",
        "answer":"Number of students who scored below 30 in all subjects: 0"
    },
    {
        "id":31,
        "question":"Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.",
        "answer":"Percentage of students who scored above 30 in Maths: 100%"
    },
    {
        "id":32,
        "question":"Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.",
        "answer":"Percentage of students who scored below 35 in Physics: 50%"
    },
    {
        "id":33,
        "question":"Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.",
        "answer":"Percentage of students who scored above 30 in all subjects: 50%"
    },
    {
        "id":34,
        "question":"Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.",
        "answer":"Percentage of students who scored below 30 in all subjects: 0%"
    },
    {
        "id":35,
        "question":"Write a function to find and print the student(s) with the highest percentage of marks.",
        "answer":"Student with the highest percentage of marks: Binu"
    },
    {
        "id":36,
        "question":"Write a function to find and print the student(s) with the lowest percentage of marks.",
        "answer":"Student with the lowest percentage of marks: Mini SS "
    },
    {
        "id":37,
        "question":"Write a function to find and print the subject(s) with the highest percentage of marks.",
        "answer":"Subject with the highest percentage of marks: Maths"
    },
    {
        "id":38,
        "question":"Write a function to find and print the subject(s) with the lowest percentage of marks.",
        "answer":"Subject with the lowest percentage of marks : English"
    },
    {
        "id":39,
        "question":"Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
        "answer":"Student with the highest percentage of marks in Physics: Binu "
    },
    {
        "id":40,
        "question":"Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
        "answer":"Student with the lowest percentage of marks in Physics: Mini SS "
    },
    {
        "id":41,
        "question":"Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
        "answer":"Subject with the highest percentage of marks for Ravi: Maths "
    },
    {
        "id":42,
        "question":"Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
        "answer":"Subject with the lowest percentage of marks for Ravi: Computer "
    },
    {
        "id":43,
        "question":"Write a function to find and print the subject(s) in which all students scored above a certain mark.",
        "answer":"Subject in which all students scored above 20: Maths, Physics, Chemistry, Computer"
    },
    {
        "id":44,
        "question":"Write a function to find and print the subject(s) in which all students scored below a certain mark.",
        "answer":"Subject in which all students scored below 30: None"
    },
    {
        "id":45,
        "question":"Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.",
        "answer":"Subject in which the average marks of all students are above 35: Maths, Physics, Chemistry"
    },
    {
        "id":46,
        "question":"Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.",
        "answer":"Subject in which the average marks of all students are below 35: English, Computer"
    },
    {
        "id":47,
        "question":"Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
        "answer":"Students who scored the highest marks in at least one subject: Aju , Binu"
    },
    {
        "id":48,
        "question":"Write a function to find and print the student(s) who scored the lowest marks in at least one subject.",
        "answer":"Students who scored the lowest marks in at least one subject:Mini SS , Ravi"
    },
    {
        "id":49,
        "question":"Write a function to calculate and print the average marks for each student in each subject.",
        "answer":"Ravi : English: 25 , Maths: 48 , Physics: 40 , Chemistry: 30, Computer: 20 \n Aju : English: 35 , Maths: 38 , Physics: 33 , Chemistry: 34, Computer: 30 \n Mini SS : English: 12 , Maths: 49 , Physics: 18 , Chemistry: 30, Computer: 40 \n Binu : English: 49 , Maths: 49 , Physics: 47 , Chemistry: 46, Computer: 50   "
    },
    {
        "id":50,
        "question":"Write a function to calculate and print the total marks for each student in each subject.",
        "answer":"Ravi : English: 25 , Maths: 48 , Physics: 40 , Chemistry: 30, Computer: 20 \n Aju : English: 35 , Maths: 38 , Physics: 33 , Chemistry: 34, Computer: 30 \n Mini SS : English: 12 , Maths: 49 , Physics: 18 , Chemistry: 30, Computer: 40 \n Binu : English: 49 , Maths: 49 , Physics: 47 , Chemistry: 46, Computer: 50 "
    },
    {
        "id":51,
        "question":"Write a function to find and print the student(s) who scored the highest marks in each subject.",
        "answer":"Students who scored highest mark in each subject : English: Binu, \n Maths: Aju and Binu , \n Physics: Binu , \n Chemistry: Binu , \n Computer: Binu"
    },
    {
        "id":52,
        "question":"Write a function to find and print the student(s) who scored the lowest marks in each subject.",
        "answer":"Students who scored lowest mark in each subject : English: Mini SS , \n Maths: Ravi , \n Physics: Mini SS , \n Chemistry: Ravi , \n Computer: Ravi"
    },
    {
        "id":53,
        "question":"Write a function to find and print the subject(s) in which the highest marks were scored.",
        "answer":"Subjects in which highest marks were scored : English: 49 , \n Maths: 49 , \n Physics: 47 , \n  Chemistry: 46 , \n Computer: 50"
    },
    {
        "id":54,
        "question":"Write a function to find and print the subject(s) in which the lowest marks were scored.",
        "answer":"Subjects in which lowest marks were scored : English: 12 , \n Maths: 48 , \n Physics: 47 , \n  Chemistry: 46 , \n Computer: 5"
    },
    {
        "id":55,
        "question":"",
        "answer":"printTotalAverage()"
    },
    {
        "id":56,
        "question":"",
        "answer":""
    },
    {
        "id":57,
        "question":"",
        "answer":""
    },
    {
        "id":58,
        "question":"",
        "answer":""
    },
    {
        "id":59,
        "question":"",
        "answer":""
    },
    {
        "id":60,
        "question":"",
        "answer":""
    },
    {
        "id":61,
        "question":"",
        "answer":""
    },
    {
        "id":62,
        "question":"",
        "answer":""
    },
    {
        "id":63,
        "question":"",
        "answer":""
    },
    {
        "id":64,
        "question":"",
        "answer":""
    },
    {
        "id":65,
        "question":"",
        "answer":""
    },
    {
        "id":66,
        "question":"",
        "answer":""
    },
    {
        "id":67,
        "question":"",
        "answer":""
    },
    {
        "id":68,
        "question":"",
        "answer":""
    },
    {
        "id":69,
        "question":"",
        "answer":""
    },
    {
        "id":70,
        "question":"",
        "answer":""
    },
    {
        "id":71,
        "question":"",
        "answer":""
    },
    {
        "id":72,
        "question":"",
        "answer":""
    },
    {
        "id":73,
        "question":"",
        "answer":""
    },
    {
        "id":74,
        "question":"",
        "answer":""
    },
    {
        "id":75,
        "question":"",
        "answer":""
    },
    {
        "id":"",
        "question":"",
        "answer":""
    }

]


export default answers