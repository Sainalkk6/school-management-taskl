import { StudentTypes, ClassObjType, SubjectTotalType, AnswerType, StudentMarksType, studentNameType, newType } from "../src/Types/Types"




export const classObj: ClassObjType = {
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
                { "subject": "Maths", "mark": 48 },
                { "subject": "Physics", "mark": 47 },
                { "subject": "Chemistry", "mark": 46 },
                { "subject": "Computer", "mark": 50 }
            ]
        }
    ]
}



const answers: AnswerType[] = [
    {
        "id": 1,
        "question": "Write a function to print the name of the class ?",
        "function": (obj) => `${obj.name}`
    },
    {
        "id": 2,
        "question": "Write a function to print the teacher's name",
        "function": (obj) => `${obj.teacherName}`
    },
    {
        "id": 3,
        "question": "Write a function to print the names of all the students in the class.",
        "function": (obj) => obj.students.map((student: StudentTypes) => student.name).join('  , ')
    },
    {
        "id": 4,
        "question": "Write a function to print the IDs of all the students in the class",
        "function": (obj) => obj.students.map((student: StudentTypes) => student.id).join('  , ')
    },
    {
        "id": 5,
        "question": "Write a function to print the subject names for a specific student.",
        "type": "student",
        "function": (obj, newStudent) => {
            const student = obj.students.find(student => student.name === newStudent)
            return student ? student.marks.map(mark => mark.subject).join(' , ') : '';
        }

    },
    {
        "id": 6,
        "question": "Write a function to print the marks of a specific student in all subjects.",
        "type": "student",
        "function": (obj, newStudent) => {
            const student = obj.students.find(student => student.name === newStudent)
           return student?.marks.map(mark => `${mark.subject} : ${mark.mark}`).join(' , ')
        }
    },
    {
        "id": 7,
        "question": "Write a function to calculate and print the average marks for a specific student.",
        "type": "student",
        "function": (obj, newStudent) => {
            let total = 0
            let count = obj.students.length
            const student = obj.students.find(student => student.name === newStudent)
            student?.marks.forEach(mark => total += mark.mark)
            return total / count

        }
    },
    {
        "id": 8,
        "question": "Write a function to calculate and print the total marks for a specific student.",
        "function": (obj, newStudent) => {
            let total = 0
            const student = obj.students.find(student => student.name === newStudent)
            student?.marks.forEach(mark => total += mark.mark)
            return total

        },
        "type": "student"
    },
    {
        "id": 9,
        "type": "subject",
        "question": "Write a function to calculate and print the average marks for all students in a specific subject.",
        "function": (obj, newSubject) => {
            let total = 0
            let count = obj.students.length
            const marks = obj.students.map(student => student.marks.find(mark => mark.subject === newSubject)?.mark || 0)
            total = marks.reduce((acc, curr) => acc + curr)
            return `The average mark of all students in ${newSubject} is ${total / count}`

        }
    },
    {
        "id": 10,
        "type": "subject",
        "question": "Write a function to calculate and print the total marks for all students in a specific subject.",
        "function": (obj, newSubject) => {
            let total = 0
            const marks = obj.students.map(student => student.marks.find(mark => mark.subject === newSubject)?.mark || 0)
            total = marks.reduce((acc, curr) => acc + curr)
            return `The totla mark of all students in ${newSubject} is ${total}`
        },
    },
    {
        "id": 11,
        "type": "subject",
        "question": "Write a function to find and print the student with the highest marks in a specific subject.",
        "function": (obj, newSubject) => {
            let highest = 0
            let newStudent
            obj.students.forEach(student => {
                const mark = student.marks.find(i => i.subject === newSubject)?.mark || 0
                if (mark > highest) {
                    highest = mark
                    newStudent = student.name
                }
            })
            return `The student with the highest mark in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id": 12,
        "type": "subject",
        "question": "Write a function to find and print the student with the lowest marks in a specific subject.",
        "function": (obj, newSubject) => {
            let lowest = Infinity
            let newStudent
            obj.students.forEach(student => {
                const mark = student.marks.find(i => i.subject === newSubject)?.mark || 0
                if (mark < lowest) {
                    lowest = mark
                    newStudent = student.name
                }
            })
            return `The student with the lowest mark in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id": 13,
        "question": "Write a function to find and print the student with the highest total marks.",
        "function": (obj) => {
            let highest = 0
            let newStudent
            obj.students.forEach(student => {
                const total = student.marks.reduce((acc, curr) => acc + curr.mark, 0)
                console.log(total)
                if (total > highest) {
                    highest = total
                    newStudent = student.name
                }
            })
            return ` The student with highest total mark is ${newStudent}`
        }
    },
    {
        "id": 14,
        "question": "Write a function to find and print the student with the lowest total marks.",
        "function": (obj) => {
            let lowest = Infinity
            let newStudent
            obj.students.forEach(student => {
                const total = student.marks.reduce((acc, curr) => acc + curr.mark, 0)
                console.log(total)
                if (total < lowest) {
                    lowest = total
                    newStudent = student.name
                }
            })
            return ` The student with lowest total mark is ${newStudent}`
        }
    },
    {
        "id": 15,
        "question": "Write a function to find and print the subject with the highest average marks.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            let highest = 0
            let newSubject
            let count: string[] | number = obj.students.flatMap(student => student.marks.map(mark => mark.subject))
            count = Array.from(new Set(count))
            count = count.length
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            for (const subject in subjectTotal) {
                const average = subjectTotal[subject] / count
                if (average > highest) {
                    highest = average
                    newSubject = subject
                }
            }

            return `Subject with highest average mark is ${newSubject}`

        }
    },
    {
        "id": 16,
        "question": "Write a function to find and print the subject with the lowest average marks.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            let lowest = Infinity
            let newSubject
            let count: string[] | number = obj.students.flatMap(student => student.marks.map(mark => mark.subject))
            count = Array.from(new Set(count))
            count = count.length
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            for (const subject in subjectTotal) {
                const average = subjectTotal[subject] / count
                if (average < lowest) {
                    lowest = average
                    newSubject = subject
                }
            }

            return `Subject with lowest average mark is ${newSubject}`

        }
    },
    {
        "id": 17,
        "question": "Write a function to calculate and print the overall average marks for the class.",
        "function": (obj => {
            let total = 0
            let count = 0
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    total += mark.mark
                    count++
                })
            })
            return `The  overall average marks for the class is ${total / count}`
        })
    },
    {
        "id": 18,
        "question": "Write a function to calculate and print the overall total marks for the class.",
        "function": (obj => {
            let total = 0
            obj.students.forEach(student => {
                student.marks.forEach(mark => total += mark.mark)
            })
            return `The  overall total marks for the class is ${total}`
        })
    },
    {
        "id": 19,
        "question": "Write a function to calculate and print the average marks for each subject.",
        "function": (obj => {
            let count = obj.students.length
            const subjectTotal: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            const average = Object.keys(subjectTotal).map(subject => {
                const totalAverage = subjectTotal[subject] / count
                return `${subject}: ${totalAverage}`
            })
            return `Average marks for each subject : ${average.join(' , ')}`
        })
    },
    {
        "id": 20,
        "question": "Write a function to calculate and print the total marks for each subject.",
        "function": (obj => {
            const subjectTotal: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })
            })
            const average = Object.keys(subjectTotal).map(subject => {
                const total = subjectTotal[subject]
                return `${subject}: ${total}`
            })
            return `Total marks for each subject : ${average.join(' , ')}`
        })
    },
    {
        "id": 21,
        "question": "Write a function to find and print the subject with the highest total marks.",
        "function": (obj => {
            const subjectTotal: SubjectTotalType = {}
            let highest = 0
            let newSubject: string = ''
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
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
        "id": 22,
        "question": "Write a function to find and print the subject with the lowest total marks.",
        "function": (obj => {
            const subjectTotal: SubjectTotalType = {};
            let lowestSubject = '';
            let lowest = Infinity;

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    subjectTotal[mark.subject] = (subjectTotal[mark.subject] || 0) + mark.mark;
                });
            });
            for (const subject in subjectTotal) {
                if (subjectTotal[subject] < lowest) {
                    lowest = subjectTotal[subject];
                    lowestSubject = subject;
                }
            }

            return `The subject with the lowest total marks is ${lowestSubject}`;
        })
    },
    {
        "id": 23,
        "question": "Write a function to find and print the student(s) with the highest average marks.",
        "function": (obj => {
            let highest = 0;
            let newStudent;

            obj.students.forEach(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                if (totalMarks > highest) {
                    highest = totalMarks;
                    newStudent = student.name;
                }
            });
            return `Student with the highest average mark is ${newStudent}`

        })
    },
    {
        "id": 24,
        "question": "Write a function to find and print the student(s) with the lowest average marks.",
        "function": (obj => {
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
            return `Student with the lowest average mark is ${newStudent}`

        })
    },
    {
        "id": 25,
        "question": "Write a function to find and print the student(s) with the highest total marks.",
        "function": (obj => {
            let highest = 0;
            let newStudent;

            obj.students.forEach(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                if (totalMarks > highest) {
                    highest = totalMarks;
                    newStudent = student.name;
                }
            });
            return `Student with the highest total mark is ${newStudent}`

        })
    },
    {
        "id": 26,
        "question": "Write a function to find and print the student(s) with the lowest total marks.",
        "function": (obj => {
            let lowest = Infinity;
            let newStudent;

            obj.students.forEach(student => {
                const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
                if (totalMarks < lowest) {
                    lowest = totalMarks;
                    newStudent = student.name;
                }
            });
            return `Student with the lowest total mark is ${newStudent}`
        })
    },
    {
        "id": 27,
        "question": "Write a function to calculate and print the number of students who scored above a certain mark in a specific subject.",
        "needInput": true,
        "type": "subject",
        "function": (obj, newSubject, value) => {
            const count = obj.students.filter(student =>
                student.marks.some(mark => mark.subject === newSubject && mark.mark > (value || 0))
            ).length;
            console.log(value)

            return ` Number of students who scored above ${value} in ${newSubject} is  ${count}`
        }
    },
    {
        "id": 28,
        "question": "Write a function to calculate and print the number of students who scored below a certain mark in a specific subject.",
        "needInput": true,
        "type": "subject",
        "function": (obj, newSubject, value) => {
            const count = obj.students.filter(student =>
                student.marks.some(mark => mark.subject === newSubject && mark.mark < (value || 0))
            ).length;
            return ` Number of students who scored below ${value} in ${newSubject} is  ${count}`
        }
    },
    {
        "id": 29,
        "question": "Write a function to calculate and print the number of students who scored above a certain mark in all subjects.",
        "needInput": true,
        "function": (obj, _, value) => {
            const count = obj.students.filter(student =>
                student.marks.every(mark => mark.mark >= (value ?? 0))
            ).length
            return ` Number of students who scored above ${value} in all subject is ${count}`
        }
    },
    {
        "id": 30,
        "question": "Write a function to calculate and print the number of students who scored below a certain mark in all subjects.",
        "needInput": true,
        "function": (obj, _, value) => {
            const count = obj.students.filter(student =>
                student.marks.every(mark => mark.mark <= (value ?? 0))
            ).length
            return ` Number of students who scored below ${value} in all subject is ${count}`
        }
    },
    {
        "id": 31,
        "question": "Write a function to calculate and print the percentage of students who scored above a certain mark in a specific subject.",
        "needInput": true,
        "type": "subject",
        "function": (obj, newSubject, value) => {
            const count = obj.students.length;
            const marks = obj.students.filter(student =>
                student.marks.some(mark => mark.subject === newSubject && mark.mark > (value ?? 0))
            ).length;
            const percentage = (marks / count) * 100;
            return `Percentage of students who scored above ${value} in ${newSubject}: ${percentage}%`;
        }
    },
    {
        "id": 32,
        "question": "Write a function to calculate and print the percentage of students who scored below a certain mark in a specific subject.",
        "type": "subject",
        "needInput": true,
        "function": (obj, newSubject, value) => {
            const count = obj.students.length;
            const marks = obj.students.filter(student =>
                student.marks.some(mark => mark.subject === newSubject && mark.mark < (value ?? 0))
            ).length;
            const percentage = (marks / count) * 100;
            return `Percentage of students who scored below ${value} in ${newSubject}: ${percentage}%`;
        }
    },
    {
        "id": 33,
        "question": "Write a function to calculate and print the percentage of students who scored above a certain mark in all subjects.",
        "needInput": true,
        "function": (obj, _, value) => {
            const count = obj.students.length;
            const marks = obj.students.filter(student =>
                student.marks.every(mark => mark.mark > (value || 0))
            ).length;
            const percentage = (marks / count) * 100;
            return `Percentage of students who scored above ${value} in every subject: ${percentage}%`;
        }
    },
    {
        "id": 34,
        "question": "Write a function to calculate and print the percentage of students who scored below a certain mark in all subjects.",
        "needInput": true,
        "function": (obj, _, value) => {
            const count = obj.students.length;
            const marks = obj.students.filter(student =>
                student.marks.every(mark => mark.mark < (value || 0))
            ).length;
            const percentage = (marks / count) * 100;
            return `Percentage of students who scored below ${value} in every subject: ${percentage}%`;
        }
    },
    {
        "id": 35,
        "question": "Write a function to find and print the student(s) with the highest percentage of marks.",
        "function": (obj) => {
            let total = 0
            let highest = 0
            let newStudent
            obj.students.forEach(student => {
                let totalMark = student.marks.length * 50
                student.marks.forEach(mark => {
                    total += mark.mark
                })
                const percentage = total / totalMark * 100
                if (highest < percentage) {
                    highest = percentage
                    newStudent = student.name
                }
            })
            return ` Student with the highest percentage in all subject is ${newStudent}`
        }
    },
    {
        "id": 36,
        "question": "Write a function to find and print the student(s) with the lowest percentage of marks.",
        "function": (obj) => {
            let total = 0
            let lowest = Infinity
            let newStudent
            obj.students.forEach(student => {
                let totalMark = student.marks.length * 50
                student.marks.forEach(mark => {
                    total += mark.mark
                })
                const percentage = total / totalMark * 100
                if (lowest > percentage) {
                    lowest = percentage
                    newStudent = student.name
                }
            })
            return ` Student with the lowest percentage in all subject is ${newStudent}`
        }
    },
    {
        "id": 37,
        "question": "Write a function to find and print the subject(s) with the highest percentage of marks.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            let highest = 0
            let newSubject
            let total = obj.students.map(student => student.marks).length + 1
            total = total * 50
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })

            })

            for (const subj in subjectTotal) {
                const percentage = (subjectTotal[subj] / total) * 100
                if (percentage > highest) {
                    highest = percentage
                    newSubject = subj
                }
            }
            return `Subject with the highest percentage of mark is ${newSubject}`
        }
    },
    {
        "id": 38,
        "question": "Write a function to find and print the subject(s) with the lowest percentage of marks.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            let lowest = Infinity
            let newSubject
            let total = obj.students.map(student => student.marks).length + 1
            total = total * 50
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                })

            })

            for (const subj in subjectTotal) {
                const percentage = (subjectTotal[subj] / total) * 100
                console.log(percentage)
                if (percentage < lowest) {
                    lowest = percentage
                    newSubject = subj
                }
            }
            return `Subject with the lowest percentage of mark is ${newSubject}`
        }
    },
    {
        "id": 39,
        "question": "Write a function to find and print the student(s) with the highest percentage of marks in a specific subject.",
        "type": "subject",
        "function": (obj, newSubject) => {
            let total = 0
            let highest = 0
            let newStudent
            obj.students.forEach(student => {
                let totalMark = student.marks.length * 50
                student.marks.forEach(mark => {
                    if (mark.subject === newSubject) {
                        total = mark.mark
                    }
                })
                const percentage = total / totalMark * 100
                if (highest < percentage) {
                    highest = percentage
                    newStudent = student.name
                }
            })
            return ` Student with the highest percentage of mark  in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id": 40,
        "question": "Write a function to find and print the student(s) with the lowest percentage of marks in a specific subject.",
        "type": "subject",
        "function": (obj, newSubject) => {
            let total = 0
            let lowest = Infinity
            let newStudent
            obj.students.forEach(student => {
                let totalMark = student.marks.length * 50
                student.marks.forEach(mark => {
                    if (mark.subject === newSubject) {
                        total = mark.mark
                    }
                })
                console.log(total)
                const percentage = total / totalMark * 100
                if (lowest > percentage) {
                    lowest = percentage
                    newStudent = student.name
                }
            })
            return ` Student with the highest percentage of mark  in ${newSubject} is ${newStudent}`
        }
    },
    {
        "id": 41,
        "question": "Write a function to find and print the subject(s) with the highest percentage of marks for a specific student.",
        "type": "student",
        "function": (obj, newStudent) => {
            const subjectTotal: SubjectTotalType = {}
            let highest = 0
            let newSubject
            let total = obj.students.map(student => student.marks).length + 1
            total = total * 50
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (student.name === newStudent) {
                        if (!subjectTotal[mark.subject]) {
                            subjectTotal[mark.subject] = 0
                        }
                        subjectTotal[mark.subject] += mark.mark
                    }
                })
            })
            for (const subj in subjectTotal) {
                const percentage = (subjectTotal[subj] / total) * 100
                if (percentage > highest) {
                    highest = percentage
                    newSubject = subj
                }
            }
            return `Subject with highest percentage of mark for ${newStudent} is ${newSubject}`
        }
    },
    {
        "id": 42,
        "question": "Write a function to find and print the subject(s) with the lowest percentage of marks for a specific student.",
        "type": "student",
        "function": (obj, newStudent) => {
            const subjectTotal: SubjectTotalType = {}
            let lowest = Infinity
            let newSubject
            let total = obj.students.map(student => student.marks).length + 1
            total = total * 50
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (student.name === newStudent) {
                        if (!subjectTotal[mark.subject]) {
                            subjectTotal[mark.subject] = 0
                        }
                        subjectTotal[mark.subject] += mark.mark
                    }
                })
            })

            for (const subj in subjectTotal) {
                const percentage = (subjectTotal[subj] / total) * 100
                if (percentage < lowest) {
                    lowest = percentage
                    newSubject = subj
                }
            }
            return `Subject with lowest percentage of mark for ${newStudent} is ${newSubject}`
        }
    },
    {
        "id": 43,
        "question": "Write a function to find and print the subject(s) in which all students scored above a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            let subjectAboveValue: string[] = [];
            const subjects = obj.students[0].marks.map(mark => mark.subject);
            subjects.forEach(subject => {
                const allAbove = obj.students.every(student => {
                    const studentMark = student.marks.find(mark => mark.subject === subject);
                    return studentMark ? studentMark.mark >= (value || 0) : false
                });

                if (allAbove) {
                    subjectAboveValue.push(subject);
                }
            });

            if (subjectAboveValue.length > 0) {
                return `Everyone scored above ${value} in the following subjects: ${subjectAboveValue.join(', ')}`;
            } else {
                return `No subjects where all students scored above ${value}`;
            }
        }

    },
    {
        "id": 44,
        "needInput": true,
        "question": "Write a function to find and print the subject(s) in which all students scored below a certain mark.",
        "function": (obj, _, value) => {
            let subjectBelowValue: string[] = [];
            const subjects = obj.students[0].marks.map(mark => mark.subject);
            subjects.forEach(subject => {
                const allAbove = obj.students.every(student => {
                    const studentMark = student.marks.find(mark => mark.subject === subject);
                    return studentMark ? studentMark.mark <= (value || 0) : false
                });

                if (allAbove) {
                    subjectBelowValue.push(subject);
                }
            });
            return `Everyone scored below ${value} in the following subjects: ${subjectBelowValue.join(', ')}`;
        }
    },
    {
        "id": 45,
        "question": "Write a function to find and print the subject(s) in which the average marks of all students are above a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            let subjectAboveValue: string[] = [];
            const subjects = obj.students[0].marks.map(mark => mark.subject);

            subjects.forEach(subject => {
                let totalMarks = 0;
                let numOfStudents = obj.students.length;
                obj.students.forEach(student => {
                    const studentMark = student.marks.find(mark => mark.subject === subject);
                    studentMark ? totalMarks += studentMark.mark : 0
                });
                const averageMarks = totalMarks / numOfStudents;
                if (averageMarks >= (value || 0)) {
                    subjectAboveValue.push(subject);
                }
            });
            if (subjectAboveValue.length > 0) {
                return `The subjects where the average marks are above ${value} are: ${subjectAboveValue.join(', ')}`;
            } else {
                return `No subjects where the average marks are above ${value}`;
            }
        }
    },
    {
        "id": 46,
        "question": "Write a function to find and print the subject(s) in which the average marks of all students are below a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            let subjectAboveValue: string[] = [];
            const subjects = obj.students[0].marks.map(mark => mark.subject);

            subjects.forEach(subject => {
                let totalMarks = 0;
                let numOfStudents = obj.students.length;
                obj.students.forEach(student => {
                    const studentMark = student.marks.find(mark => mark.subject === subject);
                    studentMark ? totalMarks += studentMark.mark : false
                });
                const averageMarks = totalMarks / numOfStudents;
                if (averageMarks <= (value || 0)) {
                    subjectAboveValue.push(subject);
                }
            });
            if (subjectAboveValue.length > 0) {
                return `The subjects where the average marks are below ${value} are : ${subjectAboveValue.join(', ')}`;
            } else {
                return `No subjects where the average marks are below ${value}`;
            }
        }
    },
    {
        "id": 47,
        "question": "Write a function to find and print the student(s) who scored the highest marks in at least one subject.",
        "function": (obj) => {
            let highestMark = 0;
            let topStudents: string[] = [];
            let final: string[] = []
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark > highestMark) {
                        highestMark = mark.mark;
                        topStudents = [student.name];
                    } else if (mark.mark === highestMark) {
                        if (!topStudents.includes(student.name)) {
                            topStudents.push(student.name);
                            final.push(topStudents.join(' , '))
                        }
                    }
                });
            });
            return `The student(s) who scored the highest marks  in atleast one subject : ${final}`;
        }
    },
    {
        "id": 48,
        "question": "Write a function to find and print the student(s) who scored the lowest marks in at least one subject.",
        "function": (obj) => {
            let lowest = Infinity;
            let topStudents: string[] = [];
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark < lowest) {
                        lowest = mark.mark;
                        if (!topStudents.includes(student.name)) {
                            topStudents.push(student.name)
                        }
                    }
                });
            });
            return `The student(s) who scored the lowest marks  in atleast one subject : ${topStudents.join(" , ")}`;
        }
    },
    {
        "id": 49,
        "question": "Write a function to calculate and print the average marks for each student in each subject.",
        "function": (obj) => {
            let result = "";
            const studentMarks: StudentMarksType = {};
            obj.students.forEach(student => {
                if (!studentMarks[student.name]) {
                    studentMarks[student.name] = {};
                }
                student.marks.forEach(mark => {
                    if (!studentMarks[student.name][mark.subject]) {
                        studentMarks[student.name][mark.subject] = [];
                    }
                    studentMarks[student.name][mark.subject].push(mark.mark);
                });
            });

            for (const student in studentMarks) {
                result += `Student : ${student} \n`;
                for (const subject in studentMarks[student]) {
                    const marks = studentMarks[student][subject];
                    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
                    const averageMarks = totalMarks / marks.length;
                    result += `${subject} : ${averageMarks} ,\n`;
                }
            }

            return result.trim();
        }
    },
    {
        "id": 50,
        "question": "Write a function to calculate and print the total marks for each student in each subject.",
        "function": (obj) => {
            let result = "";
            const studentMarks: StudentMarksType = {};
            obj.students.forEach(student => {
                if (!studentMarks[student.name]) {
                    studentMarks[student.name] = {};
                }
                student.marks.forEach(mark => {
                    if (!studentMarks[student.name][mark.subject]) {
                        studentMarks[student.name][mark.subject] = [];
                    }
                    studentMarks[student.name][mark.subject].push(mark.mark);
                });
            });

            for (const student in studentMarks) {
                result += `Student : ${student} \n`;
                for (const subject in studentMarks[student]) {
                    const marks = studentMarks[student][subject];
                    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
                    result += `${subject} : ${totalMarks} ,`;
                }
            }

            return result.trim();
        }
    },
    {
        "id": 51,
        "question": "Write a function to find and print the student(s) who scored the highest marks in each subject.",
        "function": (obj) => {
            let highestMarks: SubjectTotalType = {};
            let studentName: studentNameType = {};
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!highestMarks[mark.subject]) {
                        highestMarks[mark.subject] = mark.mark;
                        studentName[mark.subject] = [student.name];
                    } else if (mark.mark > highestMarks[mark.subject]) {
                        highestMarks[mark.subject] = mark.mark;
                        studentName[mark.subject] = [student.name];
                    } else if (mark.mark === highestMarks[mark.subject]) {
                        studentName[mark.subject].push(student.name);
                    }
                });
            });
            let result: string[] | string = [];
            for (const subject in highestMarks) {
                result.push(`${subject} : ${studentName[subject]}`);
            }
            result = result.join(" , ");
            return result


        }
    },
    {
        "id": 52,
        "question": "Write a function to find and print the student(s) who scored the lowest marks in each subject.",
        "function": (obj) => {
            let highestMarks: SubjectTotalType = {};
            let studentName: studentNameType = {};
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!highestMarks[mark.subject]) {
                        highestMarks[mark.subject] = mark.mark;
                        studentName[mark.subject] = [student.name];
                    } else if (mark.mark < highestMarks[mark.subject]) {
                        highestMarks[mark.subject] = mark.mark;
                        studentName[mark.subject] = [student.name];
                    } else if (mark.mark === highestMarks[mark.subject]) {
                        studentName[mark.subject].push(student.name);
                    }
                });
            });
            let result: string[] | string = [];
            for (const subject in highestMarks) {
                result.push(` ${subject} : ${studentName[subject]} `);
            }
            result = result.join(" , ");
            return result
        }
    },
    {
        "id": 53,
        "question": "Write a function to find and print the subject(s) in which the highest marks were scored.",
        "function": (obj) => {
            let highestMarks: SubjectTotalType = {};
            let maxMark = 0;

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!highestMarks[mark.subject] || mark.mark > highestMarks[mark.subject]) {
                        highestMarks[mark.subject] = mark.mark;
                        if (mark.mark > maxMark) {
                            maxMark = mark.mark;
                        }
                    }
                });
            });
            let subjects = [];
            for (const subject in highestMarks) {
                if (highestMarks[subject] === maxMark) {
                    subjects.push(subject);
                }
            }
            return `Subject with the highest marks scored ${subjects.join(', ')}`;
        }
    },
    {
        "id": 54,
        "question": "Write a function to find and print the subject(s) in which the lowest marks were scored.",
        "function": (obj) => {
            let lowest = Infinity
            let lowestSubjects: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!lowestSubjects[mark.subject] || mark.mark < lowestSubjects[mark.subject]) {
                        lowestSubjects[mark.subject] = mark.mark
                    }
                    if (mark.mark < lowest) {
                        lowest = mark.mark
                    }

                })
            })
            let subjects = []
            for (const sub in lowestSubjects) {
                console.log(lowestSubjects)
                if (lowestSubjects[sub] === lowest) {
                    subjects.push(sub)
                    console.log(subjects)
                }
            }
            return ` The subject in which the lowest marks were scored is ${subjects.join(' , ')}`
        }
    },
    {
        "id": 55,
        "question": "Write a function to find and print the student(s) who scored above the class average marks.",
        "function": (obj) => {
            let totalMarks = 0;
            let totalSubjects = 0;
            let studentAboveAverage = ""

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalMarks += mark.mark;
                    totalSubjects++;
                });
            });

            const averageMarks = totalMarks / totalSubjects;

            obj.students.forEach(student => {
                let studentTotalMarks = 0;
                let studentSubjects = student.marks.length;

                student.marks.forEach(mark => {
                    studentTotalMarks += mark.mark;
                });


                const studentAverage = studentTotalMarks / studentSubjects;
                if (studentAverage > averageMarks) {
                    studentAboveAverage = student.name
                }
            })
            return `Student who scored above the class average marks is  ${studentAboveAverage}`;
        }
    },
    {
        "id": 56,
        "question": "Write a function to find and print the student(s) who scored below the class average marks.",
        "function": (obj) => {
            let totalMarks = 0
            let totalSubjects = 0
            let studentBelowAverage = ""
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalMarks += mark.mark
                    totalSubjects++
                })
            })

            const average = totalMarks / totalSubjects
            obj.students.forEach(student => {
                let studentTotalMarks = 0;
                let studentSubjects = student.marks.length;
                student.marks.forEach(mark => {
                    studentTotalMarks += mark.mark
                })

                const newAverage = studentTotalMarks / studentSubjects
                if (newAverage < average) studentBelowAverage = student.name
            })
            return `Student who scored below the class average is ${studentBelowAverage} `
        }
    },
    {
        "id": 57,
        "question": "Write a function to find and print the subject(s) in which the average marks are above the class average marks.",
        "function": (obj) => {
            let totalMarks = 0;
            let totalSubjects = 0;

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalMarks += mark.mark;
                    totalSubjects++;
                });
            });

            const classAverage = totalMarks / totalSubjects;
            let subjectTotals: SubjectTotalType = {};
            let subjectCounts: SubjectTotalType = {};

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = 0;
                        subjectCounts[mark.subject] = 0;
                    }
                    subjectTotals[mark.subject] += mark.mark;
                    subjectCounts[mark.subject]++;
                });
            });

            let subjectsAboveClassAverage = ""

            for (const subject in subjectTotals) {
                const subjectAverage = subjectTotals[subject] / subjectCounts[subject];
                if (subjectAverage > classAverage) {
                    subjectsAboveClassAverage = subject
                }
            }
            return `Subject with average marks above the class average is  ${subjectsAboveClassAverage}`;
        }
    },
    {
        "id": 58,
        "question": "Write a function to find and print the subject(s) in which the average marks are below the class average marks.",
        "function": (obj) => {
            let totalMarks = 0
            let totalSubjects = 0
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    totalMarks += mark.mark
                    totalSubjects++
                })
            })
            const classAverage = totalMarks / totalSubjects
            let subjectTotals: SubjectTotalType = {}
            let subjectCounts: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = 0
                        subjectCounts[mark.subject] = 0
                    }

                    subjectTotals[mark.subject] += mark.mark
                    subjectCounts[mark.subject]++
                })
            })

            let subjectBelowClassAverage = ""

            for (const sub in subjectTotals) {
                const subjectAverage = subjectTotals[sub] / subjectCounts[sub]
                console.log(subjectAverage)
                if (subjectAverage < classAverage) {
                    subjectBelowClassAverage = sub
                }

            }
            return `Subject with average mark below class average is ${subjectBelowClassAverage}`
        }
    },
    {
        "id": 59,
        "question": "Write a function to find and print the subject(s) in which the highest percentage of students scored above a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            const subjectAboveCount: SubjectTotalType = {};
            const subjectCount: SubjectTotalType = {};
            let highestPercentage = 0;
            const subjectsWithHighestPercentage = [];

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectCount[mark.subject]) {
                        subjectCount[mark.subject] = 0;
                        subjectAboveCount[mark.subject] = 0;
                    }
                    subjectCount[mark.subject]++;
                    if (mark.mark > (value || 0)) {
                        subjectAboveCount[mark.subject]++;
                    }
                });
            });

            for (const subject in subjectCount) {
                const percentage = (subjectAboveCount[subject] / subjectCount[subject]) * 100;

                if (percentage > highestPercentage) {
                    highestPercentage = percentage;
                    subjectsWithHighestPercentage.length = 0;
                    subjectsWithHighestPercentage.push(subject);
                } else if (percentage === highestPercentage) {
                    subjectsWithHighestPercentage.push(subject);
                }
                if (percentage === 0) {
                    return `No subjects had students scoring above ${value}.`;
                }

            }

            return `The subject with the highest percentage of students scored above ${value} are: ${subjectsWithHighestPercentage.join(', ')}`;
        }
    },
    {
        "id": 60,
        "needInput": true,
        "question": "Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.",
        "function": (obj, _, val) => {
            const subjectBelowCount: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            let highestPercentage = 0
            const subjectsWithHighestPercentage = []

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectCount[mark.subject]) {
                        subjectCount[mark.subject] = 0
                        subjectBelowCount[mark.subject] = 0
                    }
                    subjectCount[mark.subject]++
                    if (mark.mark < (val || 0)) {
                        subjectBelowCount[mark.subject]++
                    }
                })
            })
            for (const subject in subjectCount) {
                const percentage = (subjectBelowCount[subject] / subjectCount[subject]) * 100
                if (percentage > highestPercentage) {
                    highestPercentage = percentage
                    subjectsWithHighestPercentage.length = 0
                    subjectsWithHighestPercentage.push(subject)
                } else if (percentage === highestPercentage) {
                    subjectsWithHighestPercentage.push(subject)
                }
            }
            return `The subject with the highest percentage of students scored below ${val} are : ${subjectsWithHighestPercentage.join(' , ')}`
        }
    },
    {
        "id": 61,
        "question": "Write a function to find and print the subject(s) in which the highest percentage of students scored below a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            let count = 0
            const subjectBelowCount: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            let lowestPercentage = Infinity
            const subjectWithLowestPercentage = []
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectCount[mark.subject]) {
                        subjectBelowCount[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                        count++
                    }
                    subjectCount[mark.subject]++
                    if (mark.mark < (value || 0)) {
                        subjectBelowCount[mark.subject]++
                    }
                })
            })
            for (const subject in subjectCount) {
                const percentage = (subjectBelowCount[subject] / subjectCount[subject]) * 100
                if (percentage < lowestPercentage) {
                    lowestPercentage = percentage
                    subjectWithLowestPercentage.length = 0
                    subjectWithLowestPercentage.push(subject)
                } else if (percentage === lowestPercentage) {
                    subjectWithLowestPercentage.push(subject)
                }
            }

            return ` The subject with the lowest percentage of students scored below ${value} are : ${subjectWithLowestPercentage.join(', ')}`;
        }
    },
    {
        "id": 62,
        "question": "Write a function to find and print the subject(s) in which the lowest percentage of students scored above a certain mark.",
        "needInput": true,
        "function": (obj, _, value) => {
            const subjectAboveCount: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            let lowestPercentage = Infinity
            const subjectWithLowestPercentage = []
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectCount[mark.subject]) {
                        subjectCount[mark.subject] = 0
                        subjectAboveCount[mark.subject] = 0
                    }
                    subjectCount[mark.subject]++
                    if (mark.mark > (value || 0)) {
                        subjectAboveCount[mark.subject]++
                    }
                })
            })
            for (const subject in subjectCount) {
                const percentage = (subjectAboveCount[subject] / subjectCount[subject]) * 100
                if (percentage < lowestPercentage) {
                    lowestPercentage = percentage
                    subjectWithLowestPercentage.push(subject)
                    subjectWithLowestPercentage.length = 0
                } else if (percentage === lowestPercentage) {
                    subjectWithLowestPercentage.push(subject)
                }
            }
            return `The subject in which the lowest percentage of students who scored above ${value} are ${subjectWithLowestPercentage.join(' , ')}`
        }
    },
    {
        "id": 63,
        "question": "Write a function to calculate and print the percentage of students who scored above the class average marks in each subject.",
        "function": (obj) => {
            const subjectTotals: SubjectTotalType = {};
            const subjectCounts: SubjectTotalType = {};
            const subjectAboveCount: SubjectTotalType = {};
            const subjectAverages: SubjectTotalType = {};

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = 0;
                        subjectCounts[mark.subject] = 0;
                        subjectAboveCount[mark.subject] = 0;
                    }
                    subjectTotals[mark.subject] += mark.mark;
                    subjectCounts[mark.subject]++;
                });
            });

            for (const subject in subjectTotals) {
                subjectAverages[subject] = subjectTotals[subject] / subjectCounts[subject];
            }

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark > subjectAverages[mark.subject]) {
                        subjectAboveCount[mark.subject]++;
                    }
                });
            });

            const percentages = [];
            for (const subject in subjectCounts) {
                const percentage = (subjectAboveCount[subject] / subjectCounts[subject]) * 100;
                percentages.push(`${subject}: ${percentage}%`);
            }

            return `Percentage of students who scored above the class average marks in each subject:\n${percentages.join(' , ')}`;
        }
    },

    {
        "id": 64,
        "question": "Write a function to calculate and print the percentage of students who scored below the class average marks in each subject.",
        "function": (obj) => {
            const subjectTotals: SubjectTotalType = {}
            const subjectCounts: SubjectTotalType = {}
            const subjectBelowCount: SubjectTotalType = {}
            const subjectAverages: SubjectTotalType = {}

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = 0
                        subjectCounts[mark.subject] = 0
                        subjectBelowCount[mark.subject] = 0
                    }
                    subjectTotals[mark.subject] += mark.mark
                    subjectCounts[mark.subject]++
                })
            })
            for (const subject in subjectTotals) {
                subjectAverages[subject] = subjectTotals[subject] / subjectCounts[subject]
            }

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark < subjectAverages[mark.subject]) {
                        subjectBelowCount[mark.subject]++
                    }
                })
            })
            const percentages = []
            for (const subject in subjectCounts) {
                const percentage = (subjectBelowCount[subject] / subjectCounts[subject]) * 100
                percentages.push(`${subject}: ${percentage}%`)
            }
            return ` Percnetage of students who scored below the class average marks in each subject :  \n ${percentages.join(' , ')}`
        }
    },
    {
        "id": 65,
        "question": "Write a function to calculate and print the percentage of students who scored above the class average marks in at least one subject.",
        "function": (obj) => {
            const subjectTotals: SubjectTotalType = {};
            const subjectCounts: SubjectTotalType = {};
            const studentCount = obj.students.length;

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    subjectTotals[mark.subject] = (subjectTotals[mark.subject] || 0) + mark.mark;
                    subjectCounts[mark.subject] = (subjectCounts[mark.subject] || 0) + 1;
                });
            });

            const averages: SubjectTotalType = {};
            for (const subject in subjectTotals) {
                averages[subject] = subjectTotals[subject] / subjectCounts[subject];
            }

            const aboveAverageCount = obj.students.filter(student =>
                student.marks.some(mark => mark.mark > averages[mark.subject])
            ).length;

            const percentage = (aboveAverageCount / studentCount) * 100;
            return `Percentage of students who scored above the class average average in at least one subject: ${percentage}%`;
        }
    },
    {
        "id": 66,
        "question": "Write a function to calculate and print the percentage of students who scored below the class average marks in at least one subject.",
        "function": (obj) => {
            const subjectTotals: SubjectTotalType = {}
            const subjectCounts: SubjectTotalType = {}
            const studentCount = obj.students.length

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotals[mark.subject]) {
                        subjectTotals[mark.subject] = 0;
                        subjectCounts[mark.subject] = 0
                    }
                    subjectTotals[mark.subject] += mark.mark;
                    subjectCounts[mark.subject]++
                })
            })
            const average: SubjectTotalType = {}
            for (const subject in subjectTotals) {
                average[subject] = (subjectTotals[subject] / subjectCounts[subject])
            }
            const belowAverageCount = obj.students.filter(student => {
                student.marks.some(mark => mark.mark < average[mark.subject])
            }).length
            const percentage = (belowAverageCount / studentCount) * 100
            return `The percentage of students who scored below the class average marks in atleast one subject is  ${percentage}%`
        }

    },
    {
        "id": 67,
        "question": "Write a function to find and print the student(s) who scored above the class average marks in all subjects.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    subjectTotal[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            const average: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                average[subject] = subjectTotal[subject] / subjectCount[subject]
            }

            const aboveAverageCount = obj.students.filter(student => student.marks.every(mark => mark.mark > average[mark.subject]))

            return `Student who scored above class average marks in all subject is  ${aboveAverageCount.map(student => student.name)}`;
        }
    },
    {
        "id": 68,
        "question": "Write a function to find and print the student(s) who scored below the class average marks in all subjects.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })
            const average: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                average[subject] = subjectTotal[subject] / subjectCount[subject]
            }

            const belowAverageCount = obj.students.filter(student => student.marks.every(mark => mark.mark < average[mark.subject]))

            console.log(belowAverageCount.length)
            if (belowAverageCount.length === 0) {
                return `There are no students who scored below class average in all  subjects`
            }

            return `Students who scored below class average in all subject is  ${belowAverageCount.map(student => student.name).join(' , ')}`;
        }
    },
    {
        "id": 69,
        "question": "Write a function to find and print the student(s) who scored above the class average marks in the majority of subjects.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    subjectTotal[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            const average: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                average[subject] = subjectTotal[subject] / subjectCount[subject]
            }
            const aboveAverage = obj.students.filter(student => {
                const subjectAboveAverage = student.marks.filter(mark => mark.mark > average[mark.subject])
                return subjectAboveAverage.length > (Object.keys(average).length / 2)
            })

            return `Students who scored above the class average marks in majority of subjects are ${aboveAverage.map(student => student.name).join(" , ")}`
        }
    },
    {
        "id": 70,
        "question": "Write a function to find and print the student(s) who scored below the class average marks in the majority of subjects.",
        "function": (obj) => {
            const subjectTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    subjectTotal[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })
            const average: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                average[subject] = subjectTotal[subject] / subjectCount[subject]
            }
            console.log(average)
            const belowAverage = obj.students.filter(student => {
                const subjectBelowAverage = student.marks.filter(mark => mark.mark < average[mark.subject])
                return subjectBelowAverage.length > (Object.keys(average).length / 2)
            })
            return `Students who scored below the class average in majority of subjects are ${belowAverage.map(student => student.name).join(" , ")}`
        }
    },
    {
        "id": 71,
        "question": "Write a function to find and print the subject(s) in which the majority of students scored above the class average marks.",
        "function": (obj) => {

            let subjectTotal: SubjectTotalType = {}
            let subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    subjectTotal[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })
            const subjectAverages: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                subjectAverages[subject] = subjectTotal[subject] / subjectCount[subject]
            }
            const subjectAboveCount: SubjectTotalType = {}

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectAboveCount[mark.subject]) {
                        subjectAboveCount[mark.subject] = 0

                    }


                    if (mark.mark > subjectAverages[mark.subject]) {
                        subjectAboveCount[mark.subject]++
                    }
                })
            })
            const subjectAboveAverage = Object.keys(subjectAboveCount).filter(subject => subjectAboveCount[subject] > subjectCount[subject] / 2)
            return `The subject in which the majority of students scored above the class average is ${subjectAboveAverage}`
        }
    },
    {
        "id": 72,
        "question": "Write a function to find and print the subject(s) in which the majority of students scored below the class average marks.",
        "function": (obj) => {
            let subjectTotal: SubjectTotalType = {}
            let subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectTotal[mark.subject]) {
                        subjectTotal[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    subjectCount[mark.subject]++
                    subjectTotal[mark.subject] += mark.mark
                })
            })

            const subjectAverage: SubjectTotalType = {}
            for (const subject in subjectTotal) {
                subjectAverage[subject] = subjectTotal[subject] / subjectCount[subject]
            }
            const subjectBelowCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!subjectBelowCount[mark.subject]) subjectBelowCount[mark.subject] = 0
                    if (mark.mark < subjectAverage[mark.subject]) {
                        subjectBelowCount[mark.subject]++
                    }
                })
            })
            const subjectBelowAverage = Object.keys(subjectBelowCount).filter(subject => subjectBelowCount[subject] > subjectCount[subject] / 2)
            console.log(subjectBelowAverage)
            return `The subject in which the majority of students scored below the class average is ${subjectBelowAverage}`
        }
    },
    {
        "id": 73,
        "question": "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in each subject.",
        "type": "student",
        "function": (obj, name) => {
            const student = obj.students.find(s => s.name === name);
            const studentTotal: SubjectTotalType = {};
            const subjectCount: SubjectTotalType = {};

            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0;
                    subjectCount[mark.subject] = 0;
                }
                studentTotal[mark.subject] += mark.mark;
                subjectCount[mark.subject]++;
            });

            const studentsAverage: SubjectTotalType = {};
            for (const subject in studentTotal) {
                studentsAverage[subject] = studentTotal[subject] / subjectCount[subject];
            }

            const percentageAboveStudentCount: SubjectTotalType = {};
            const percentageAboveStudentMark: SubjectTotalType = {};

            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!percentageAboveStudentMark[mark.subject]) {
                        percentageAboveStudentMark[mark.subject] = 0;
                        percentageAboveStudentCount[mark.subject] = 0;
                    }
                    percentageAboveStudentMark[mark.subject] += mark.mark;
                    if (mark.mark > studentsAverage[mark.subject]) {
                        percentageAboveStudentCount[mark.subject]++;
                    }
                });
            });
            const result: newType = {};
            let final = ""
            for (const subject in studentsAverage) {
                const percentage = (percentageAboveStudentCount[subject] / obj.students.length) * 100;
                result[subject] = percentage + "%";
                final += ` ${subject} : ${result[subject]} , `
            }
            final = final.slice(0, -2)
            return `The percentage of students who scored above the average marks of ${name} in each subject is ${final}`
        }
    },
    {
        "id": 74,
        "question": "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in each subject.",
        "type": "student",
        "function": (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }

            const percentageBelowStudentCount: SubjectTotalType = {}
            const percentageBelowStudentMark: SubjectTotalType = {}

            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!percentageBelowStudentMark[mark.subject]) {
                        percentageBelowStudentMark[mark.subject] = 0
                        percentageBelowStudentCount[mark.subject] = 0
                    }
                    percentageBelowStudentMark[mark.subject] += mark.mark
                    if (mark.mark < studentAverage[mark.subject]) {
                        percentageBelowStudentCount[mark.subject]++
                    }
                })
            })
            const result: newType = {}
            let final = ""
            for (const subject in studentAverage) {
                const percentage = (percentageBelowStudentCount[subject] / obj.students.length) * 100
                result[subject] = percentage + "%"
                final += ` ${subject} : ${result[subject]} , `
            }
            final = final.slice(0, -2)
            return `The percentage of students who scored below the average marks of ${name} in each subject is ${final}`

        }
    },
    {
        "id": 75,
        "question": "Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in at least one subject.",
        "type": "student",
        "function": (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }
            const aboveAverage: SubjectTotalType = {}
            const totalCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!aboveAverage[mark.subject]) {
                        aboveAverage[mark.subject] = 0
                        totalCount[mark.subject] = 0
                    }

                    totalCount[mark.subject]++
                    if (mark.mark > studentAverage[mark.subject]) {
                        aboveAverage[mark.subject]++
                    }

                })
            })
            const result: newType = {}
            let final = ""
            for (const subject in totalCount) {
                const percentage = (aboveAverage[subject] / totalCount[subject]) * 100
                result[subject] = percentage.toFixed() + "%"
                final += ` ${subject} : ${result[subject]}  , `

            }
            final = final.slice(0, -2)
            return `The percentage of students who scored above the average marks of ${name} in atleast one subject is ${final}`
        }
    },

    {
        "id": 76,
        "question": "Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in at least one subject.",
        "type": "student",
        "function": (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }

            const belowAverage: SubjectTotalType = {}
            const totalCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!belowAverage[mark.subject]) {
                        belowAverage[mark.subject] = 0
                        totalCount[mark.subject] = 0
                    }
                    totalCount[mark.subject]++
                    if (mark.mark < studentAverage[mark.subject]) {
                        belowAverage[mark.subject]++
                    }
                })
            })
            const result: newType = {}
            let final = ""
            for (const subject in totalCount) {
                const percentage = (belowAverage[subject] / totalCount[subject]) * 100
                result[subject] = percentage.toFixed() + "% "
                final += `${subject} : ${result[subject]} \n`
            }
            final = final.slice(0, -2)
            return `The percentage of students who scored below the average marks of ${name} in atleast one subject is ${final}`
        }
    },
    {
        id: 77,
        question: "Write a function to find and print the student(s) who scored above the average marks of a specific student in all subjects.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            // console.log(studentTotal)
            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }

            if (studentAverage == studentTotal) {
                console.log(":yaay")
            }
            const aboveAverage = obj.students.filter(s => s.marks.every(mark => mark.mark > studentAverage[mark.subject]))
            console.log(aboveAverage)
            if (aboveAverage.length === 0) return `There is no  student who scored above the average marks of ${name} in all subjects`
            return `The students who scored above the average mark of ${name} in all subjects is ${aboveAverage.map(a => a.name)}`
        }
    },
    {
        id: 78,
        question: "Write a function to find and print the student(s) who scored below the average marks of a specific student in all subjects.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            const studentAverage: SubjectTotalType = {}
            for (const subject in subjectCount) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }
            const belowAverage = obj.students.filter(s => s.marks.every(mark => mark.mark < studentAverage[mark.subject]))
            if (belowAverage.length === 0) return `There  is no student who scored below the average mark of ${name} in all subjects`
            return `The students who scored below the average mark of ${name} in all subject is ${belowAverage.map(m => m.name)}`
        }
    },
    {
        id: 79,
        question: "Write a function to find and print the subject(s) in which the average marks are above the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            const student = obj.students.find(s => s.name === name)
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }
            const aboveAverageSubject: SubjectTotalType = {}
            const totalCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!aboveAverageSubject[mark.subject]) {
                        aboveAverageSubject[mark.subject] = 0
                        totalCount[mark.subject] = 0
                    }
                    totalCount[mark.subject]++
                    aboveAverageSubject[mark.subject] += mark.mark
                })
            })

            for (const subject in aboveAverageSubject) {
                aboveAverageSubject[subject] = aboveAverageSubject[subject] / totalCount[subject]
            }
            let subjects: string[] = []
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (studentAverage[mark.subject] < aboveAverageSubject[mark.subject] && !subjects.includes(mark.subject)) {
                        subjects.push(mark.subject)
                    }
                })
            })
            if (subjects.length === 0) {
                return `There arent any subjects in which the average  marks are above the average marks of ${name}`
            }
            return `The subjects in which the average marks are above the average marks of ${name} are ${subjects.map(s => s).join(' , ')}`
        }
    },
    {
        id: 80,
        question: "Write a function to find and print the subject(s) in which the average marks are below the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentTotal[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }

            const belowAverage: SubjectTotalType = {}
            const totalCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!belowAverage[mark.subject]) {
                        belowAverage[mark.subject] = 0
                        totalCount[mark.subject] = 0
                    }
                    belowAverage[mark.subject] += mark.mark
                    totalCount[mark.subject]++
                })
            })

            for (const subject in belowAverage) {
                belowAverage[subject] = belowAverage[subject] / totalCount[subject]
            }
            let subjects: string[] = []
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (studentAverage[mark.subject] > belowAverage[mark.subject] && !subjects.includes(mark.subject)) {
                        subjects.push(mark.subject)
                    }
                })
            })
            if (subjects.length === 0) {
                return `There are no subjects in which the average marks are below the average marks of ${name}`
            }

            return ` The subjects in which the average marks are below the average marks of ${name} are ${subjects.join(' , ')}`
        }
    },
    {
        id: 81,
        question: "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}

            student?.marks.forEach(mark => {
                if (!studentAverage[mark.subject]) {
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const aboveAverageCount: SubjectTotalType = {}
            const totalStudentsCount: SubjectTotalType = {}

            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!totalStudentsCount[mark.subject]) {
                        totalStudentsCount[mark.subject] = 0
                        aboveAverageCount[mark.subject] = 0
                    }
                    totalStudentsCount[mark.subject]++
                    if (mark.mark > studentAverage[mark.subject]) {
                        aboveAverageCount[mark.subject]++
                    }
                })
            })

            let highest = 0
            let topSubjects: string[] = []

            for (const subject in aboveAverageCount) {
                const percentage = (aboveAverageCount[subject] / totalStudentsCount[subject]) * 100
                if (percentage > highest) {
                    highest = percentage
                    topSubjects = [subject]
                } else if (percentage === highest) {
                    topSubjects.push(subject)
                }
            }

            return `Subjects in which the highest percentage of students scored above the average marks of ${name} are ${topSubjects.join(' , ')}`
        }
    },
    {
        id: 82,
        question: "Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                subjectCount[mark.subject]++
                studentTotal[mark.subject] += mark.mark
            })

            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }
            const belowAverageCount: SubjectTotalType = {}
            const studentCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!belowAverageCount[mark.subject]) {
                        belowAverageCount[mark.subject] = 0
                        studentCount[mark.subject] = 0
                    }
                    studentCount[mark.subject]++
                    if (mark.mark > studentAverage[mark.subject]) {
                        belowAverageCount[mark.subject]++
                    }
                })
            })
            let lowest = Infinity
            let topSubjects: string[] = []

            for (const subject in belowAverageCount) {
                const percentage = (belowAverageCount[subject] / studentCount[subject]) * 100
                if (percentage < lowest) {
                    lowest = percentage
                    topSubjects = [subject]
                } else if (percentage === lowest) {
                    topSubjects.push(subject)
                }
            }

            return `The subjects in which the highest percentage of students scored below the average mark of ${name} ${topSubjects.length === 1 ? "is" : "are"} ${topSubjects.join(' , ')}`
        }
    },
    {
        id: 83,
        question: "Write a function to find and print the subject(s) in which the lowest percentage of students scored above the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentAverage[mark.subject]) {
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })
            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const averageCount: SubjectTotalType = {}
            const totalStudentsCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(marks => {
                    if (!averageCount[marks.subject]) {
                        averageCount[marks.subject] = 0
                        totalStudentsCount[marks.subject] = 0
                    }
                    totalStudentsCount[marks.subject]++
                    if (marks.mark > studentAverage[marks.subject]) {
                        averageCount[marks.subject]++
                    }
                })
            })
            let lowest = Infinity
            let subjects: string[] = []

            for (const subject in averageCount) {
                const percentage = (averageCount[subject] / totalStudentsCount[subject]) * 100
                if (percentage < lowest) {
                    lowest = percentage
                    subjects = [subject]
                } else if (percentage === lowest) {
                    subjects.push(subject)
                }
            }
            return ` The subjects in which the  lowest percentage of students scored above the average marks of ${name} ${subjects.length > 1 ? "are" : "is"}  ${subjects.join(' , ')}`
        }
    },
    {
        id: 84,
        question: "Write a function to find and print the subject(s) in which the lowest percentage of students scored below the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            const student = obj.students.find(s => s.name === name)
            student?.marks.forEach(mark => {
                if (!studentAverage[mark.subject]) {
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }
            const averageCount: SubjectTotalType = {}
            const totalCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!averageCount[mark.subject]) {
                        averageCount[mark.subject] = 0
                        totalCount[mark.subject] = 0
                    }
                    totalCount[mark.subject]++
                    if (mark.mark < studentAverage[mark.subject]) {
                        averageCount[mark.subject]++
                    }
                })
            })
            let lowest = Infinity
            let subjects: string[] = []
            for (const subject in averageCount) {
                const percentage = (averageCount[subject] / totalCount[subject]) * 100
                if (percentage < lowest) {
                    lowest = percentage
                    subjects = [subject]
                } else if (percentage === lowest) {
                    subjects.push(subject)
                }
            }
            return `The subjects in which the  lowest percentage of students who scored below the average marks of ${name} ${subjects.length > 1 ? "are" : "is"} ${subjects.join(' , ')}`
        }
    },
    {
        id: 85,
        question: "Write a function to calculate and print the percentage of students who scored above the average marks of the class in each subject.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {};
            const subjectCount: SubjectTotalType = {};

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0;
                        subjectCount[mark.subject] = 0;
                    }
                    studentAverage[mark.subject] += mark.mark;
                    subjectCount[mark.subject]++;
                });
            });

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject];
            }

            const averageCount: SubjectTotalType = {};

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!averageCount[mark.subject]) {
                        averageCount[mark.subject] = 0;

                    }

                    if (mark.mark > studentAverage[mark.subject]) {
                        averageCount[mark.subject]++;
                    }
                });
            });

            let final = ""

            for (const subject in averageCount) {
                const percentage = (averageCount[subject] / obj.students.length) * 100;
                final += `${subject} : ${percentage} `
            }
            return `The percentage of students who scored avove average marks of the class in each subject ${final} \n`
        }

    },
    {
        id: 86,
        question: "Write a function to calculate and print the percentage of students who scored below the average marks of the class in each subject.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }
            const averageCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!averageCount[mark.subject]) {
                        averageCount[mark.subject] = 0
                    }
                    if (mark.mark < studentAverage[mark.subject]) {
                        averageCount[mark.subject]++
                    }
                })
            })
            let final = ""
            for (const subject in averageCount) {
                const percentage = (averageCount[subject] / obj.students.length) * 100
                final += ` ${subject} :  ${percentage}%`
            }

            return `The percentage of students who scored below the average marks of class in each subjects are ${final}`
        }
    },
    {
        id: 87,
        question: "Write a function to calculate and print the percentage of students who scored above the average marks of the class in at least one subject.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    subjectCount[mark.subject]++
                    studentAverage[mark.subject] += mark.mark
                })
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const count: string[] = [];

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark > studentAverage[mark.subject] && !count.includes(student.name)) {
                        count.push(student.name);
                    }
                });
            });

            const percentage = (count.length / obj.students.length) * 100;
            return ` The percentage of students who scored above the class average marks of the class in atleast one subject  is ${percentage}%`
        }

    },
    {
        id: 88,
        question: "Write a function to calculate and print the percentage of students who scored below the average marks of the class in at least one subject.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    subjectCount[mark.subject]++
                    studentAverage[mark.subject] += mark.mark
                })
            })
            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const count: string[] = []
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark < studentAverage[mark.subject] && !count.includes(student.name)) {
                        count.push(student.name)
                    }
                })
            })
            const percentage = (count.length / obj.students.length) * 100
            return `The percentage of students who scored below the average marks in atleast one subject is ${percentage}%`
        }
    },
    {
        id: 89,
        question: "Write a function to find and print the student(s) who scored above the average marks of the class in all subjects.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const count = obj.students.filter(student => student.marks.every(mark => mark.mark > studentAverage[mark.subject]))
            return ` The student who scored above the class average in all subjects is ${count.map(c => c.name).join('')}`

        }
    },
    {
        id: 90,
        question: "Write a function to find and print the student(s) who scored below the average marks of the class in all subjects.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })
            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }
            console.log(studentAverage)

            const count = obj.students.filter(student => student.marks.every(mark => mark.mark < studentAverage[mark.subject]))
            if (count.length === 0) {
                return "No student scored below the class average in all subjects"
            }
            return `Students who scored below the class average in all subjects is ${count.map(c => c.name).join(' , ')}`
        }
    },
    {
        id: 91,
        question: "Write a function to find and print the student(s) who scored above the average marks of the class in the majority of subjects.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {};
            const subjectCount: SubjectTotalType = {};

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0;
                        subjectCount[mark.subject] = 0;
                    }
                    studentAverage[mark.subject] += mark.mark;
                    subjectCount[mark.subject]++;
                });
            });

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject];
            }

            const subjects = obj.students.map(s => s.marks.map(m => m.subject).length)
            const majority = subjects[0] / 2;
            const studentsAboveAverage: string[] = [];
            obj.students.forEach(student => {
                let count = 0;
                student.marks.forEach(mark => {
                    if (mark.mark > studentAverage[mark.subject]) {
                        count++;
                    }
                });
                if (count >= majority) {
                    studentsAboveAverage.push(student.name)
                }
            });

            return `The student who scored above the average marks of the class in majority of the subjects is ${studentsAboveAverage.join(' , ')}`
        }
    },
    {
        id: 92,
        question: "Write a function to find and print the student(s) who scored below the average marks of the class in the majority of subjects. ",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }
            const subjects = obj.students.map(s => s.marks.map(l => l.subject).length)
            const majority = subjects[0] / 2
            let studentsBelowAverage: string[] = []
            obj.students.forEach(student => {
                let count = 0
                student.marks.forEach(mark => {
                    if (mark.mark < studentAverage[mark.subject])
                        count++
                })
                if (count >= majority) {
                    studentsBelowAverage.push(student.name)
                }
            })
            return `The students who scored below the class average in majority of the subjects are ${studentsBelowAverage.join(' , ')}`
        }
    },
    {
        id: 93,
        question: "Write a function to find and print the subject(s) in which the majority of students scored above the average marks of the class.",
        function: (obj) => {
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (!studentAverage[mark.subject]) {
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }
                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })
            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }
            const studentAboveAverageCount: SubjectTotalType = {};
            console.log(studentAverage)

            obj.students.forEach(student => {
                student.marks.forEach(mark => {
                    if (mark.mark > studentAverage[mark.subject]) {
                        if (!studentAboveAverageCount[mark.subject]) {
                            studentAboveAverageCount[mark.subject] = 0;
                        }
                        studentAboveAverageCount[mark.subject]++;
                    }
                });
            });

            const subjectsAboveAverage: string[] = [];
            const majority = obj.students.length / 2
            console.log(majority)

            for (const subject in studentAboveAverageCount) {
                if (studentAboveAverageCount[subject] > majority) {
                    subjectsAboveAverage.push(subject);
                }
            }

            return `The subject in which the majority of students scored above the average marks of the class is ${subjectsAboveAverage.join(' , ')}`
        }
    },
    {
        id: 94,
        question:"Write a function to find and print the subject(s) in which the majority of students scored below the average marks of the class.",
        function:(obj)=>{
            const studentAverage:SubjectTotalType = {}
            const subjectCount:SubjectTotalType = {}
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(!studentAverage[mark.subject]){
                        studentAverage[mark.subject] = 0
                        subjectCount[mark.subject] = 0
                    }

                    studentAverage[mark.subject] += mark.mark
                    subjectCount[mark.subject]++
                })
            })

            for(const subject in studentAverage){
                studentAverage[subject] /= subjectCount[subject]
            }
            const majority = obj.students.length / 2
            const subjectBelowAverage:string[] = []
            const studentCount:SubjectTotalType = {}
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(mark.mark < studentAverage[mark.subject]){
                        if(!studentCount[mark.subject]){
                            studentCount[mark.subject] = 0
                        }
                        studentCount[mark.subject]++
                    }
                })
            })
            console.log(studentAverage)
            for(const subject in studentCount){
                if(studentCount[subject] > majority){
                    subjectBelowAverage.push(subject)
                }
            }
            return `The subject in which the majority of students scored below the average marks of the class is ${subjectBelowAverage.join( ' , ')}`
        }
    },
    {
        id: 95,
        question:"Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
        type:"student",
        function:(obj,name)=>{
            const student = obj.students.find(s=>s.name === name)
            const studentAverage:SubjectTotalType = {}
            const subjectCount:SubjectTotalType = {}
            student?.marks.forEach(mark=>{
                if(!studentAverage[mark.subject]){
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            for(const subject in studentAverage){
                studentAverage[subject] /= subjectCount[subject]
            }

            const totalCount:SubjectTotalType = {}
            const count = obj.students.map(student=>student.marks.map(mark=> mark.subject).length)
            const majority = count[0] / 2
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(mark.mark > studentAverage[mark.subject]){
                        if(!totalCount[mark.subject]) totalCount[mark.subject] = 0
                        totalCount[mark.subject]++
                    }
                })
            })
            let newCount = 0
            for(const subject in  totalCount){
                if(totalCount[subject] > majority) newCount++
            }
            const percentage = (newCount / obj.students.length)  * 100
           
            if(percentage === 0) {
                return `There arent any students who scored above the average marks of ${name} in majority of subjects`
            }
            return `The percentage of students who scored above the average marks of ${name} in majority of subjects is ${percentage}%`

        }
    },
    {
        id:96,
        question:"Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
        type:"student",
        function:(obj,name)=>{
            const student = obj.students.find(s=> s.name === name)
            const studentAverage:SubjectTotalType = {}
            const subjectCount:SubjectTotalType = {}
            student?.marks.forEach(mark=>{
                if(!studentAverage[mark.subject]){
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentAverage[mark.subject] +=mark.mark
                subjectCount[mark.subject]++
            })
            for(const subject in studentAverage){
                studentAverage[subject] /=  subjectCount[subject]
            }

            const totalCount:SubjectTotalType = {}
            const count = obj.students.map(student=>student.marks.map(mark=> mark.subject).length)
            const majority = count[0] / 2
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(mark.mark < studentAverage[mark.subject]){
                        if(!totalCount[mark.subject]) totalCount[mark.subject] = 0
                        totalCount[mark.subject]++
                    }
                })
            })
            console.log(studentAverage)
            let newCount = 0
            for(const subject in  totalCount){
                if(totalCount[subject] > majority) newCount++
            }
            const percentage = (newCount / obj.students.length)  * 100
            console.log(percentage)
            if(percentage === 0) {
                return `There arent any students who scored below the average marks of ${name} in majority of subjects`
            }
            return `The percentage of students who scored below the average marks of ${name} in majority of subjects is ${percentage}%`
        }
    },
    {
        id:97,
        question:"Write a function to calculate and print the percentage of students who scored above the average marks of a specific student in the majority of subjects.",
        type:"student",
        function:(obj,name)=>{
            const student = obj.students.find(s=>s.name === name)
            const studentAverage:SubjectTotalType = {}
            const subjectCount:SubjectTotalType = {}
            student?.marks.forEach(mark=>{
                if(!studentAverage[mark.subject]){
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }

                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            for(const subject in studentAverage){
                studentAverage[subject] /= subjectCount[subject]
            }

            const totalCount:SubjectTotalType = {}
            const count = obj.students.map(student=>student.marks.map(mark=> mark.subject).length)
            const majority = count[0] / 2
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(mark.mark > studentAverage[mark.subject]){
                        if(!totalCount[mark.subject]) totalCount[mark.subject] = 0
                        totalCount[mark.subject]++
                    }
                })
            })
            let newCount = 0
            for(const subject in  totalCount){
                if(totalCount[subject] > majority) newCount++
            }
            const percentage = (newCount / obj.students.length)  * 100
           
            if(percentage === 0) {
                return `There arent any students who scored above the average marks of ${name} in majority of subjects`
            }
            return `The percentage of students who scored above the average marks of ${name} in majority of subjects is ${percentage}%`

        }
    },
    {
        id:98,
        question:"Write a function to calculate and print the percentage of students who scored below the average marks of a specific student in the majority of subjects.",
        type:"student",
        function:(obj,name)=>{
            const student = obj.students.find(s=> s.name === name)
            const studentAverage:SubjectTotalType = {}
            const subjectCount:SubjectTotalType = {}
            student?.marks.forEach(mark=>{
                if(!studentAverage[mark.subject]){
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentAverage[mark.subject] +=mark.mark
                subjectCount[mark.subject]++
            })
            for(const subject in studentAverage){
                studentAverage[subject] /=  subjectCount[subject]
            }

            const totalCount:SubjectTotalType = {}
            const count = obj.students.map(student=>student.marks.map(mark=> mark.subject).length)
            const majority = count[0] / 2
            obj.students.forEach(student=>{
                student.marks.forEach(mark=>{
                    if(mark.mark < studentAverage[mark.subject]){
                        if(!totalCount[mark.subject]) totalCount[mark.subject] = 0
                        totalCount[mark.subject]++
                    }
                })
            })
            console.log(studentAverage)
            let newCount = 0
            for(const subject in  totalCount){
                if(totalCount[subject] > majority) newCount++
            }
            const percentage = (newCount / obj.students.length)  * 100
            console.log(percentage)
            if(percentage === 0) {
                return `There arent any students who scored below the average marks of ${name} in majority of subjects`
            }
            return `The percentage of students who scored below the average marks of ${name} in majority of subjects is ${percentage}%`
        }
    },
    {
        id: 99,
        question: "Write a function to find and print the subject(s) in which the highest percentage of students scored above the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentAverage: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}

            student?.marks.forEach(mark => {
                if (!studentAverage[mark.subject]) {
                    studentAverage[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                studentAverage[mark.subject] += mark.mark
                subjectCount[mark.subject]++
            })

            for (const subject in studentAverage) {
                studentAverage[subject] /= subjectCount[subject]
            }

            const aboveAverageCount: SubjectTotalType = {}
            const totalStudentsCount: SubjectTotalType = {}

            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!totalStudentsCount[mark.subject]) {
                        totalStudentsCount[mark.subject] = 0
                        aboveAverageCount[mark.subject] = 0
                    }
                    totalStudentsCount[mark.subject]++
                    if (mark.mark > studentAverage[mark.subject]) {
                        aboveAverageCount[mark.subject]++
                    }
                })
            })

            let highest = 0
            let topSubjects: string[] = []

            for (const subject in aboveAverageCount) {
                const percentage = (aboveAverageCount[subject] / totalStudentsCount[subject]) * 100
                if (percentage > highest) {
                    highest = percentage
                    topSubjects = [subject]
                } else if (percentage === highest) {
                    topSubjects.push(subject)
                }
            }

            return `Subjects in which the highest percentage of students scored above the average marks of ${name} are ${topSubjects.join(' , ')}`
        }
    },
    {
        id: 100,
        question: "Write a function to find and print the subject(s) in which the highest percentage of students scored below the average marks of a specific student.",
        type: "student",
        function: (obj, name) => {
            const student = obj.students.find(s => s.name === name)
            const studentTotal: SubjectTotalType = {}
            const subjectCount: SubjectTotalType = {}
            student?.marks.forEach(mark => {
                if (!studentTotal[mark.subject]) {
                    studentTotal[mark.subject] = 0
                    subjectCount[mark.subject] = 0
                }
                subjectCount[mark.subject]++
                studentTotal[mark.subject] += mark.mark
            })

            const studentAverage: SubjectTotalType = {}
            for (const subject in studentTotal) {
                studentAverage[subject] = studentTotal[subject] / subjectCount[subject]
            }
            const belowAverageCount: SubjectTotalType = {}
            const studentCount: SubjectTotalType = {}
            obj.students.forEach(s => {
                s.marks.forEach(mark => {
                    if (!belowAverageCount[mark.subject]) {
                        belowAverageCount[mark.subject] = 0
                        studentCount[mark.subject] = 0
                    }
                    studentCount[mark.subject]++
                    if (mark.mark > studentAverage[mark.subject]) {
                        belowAverageCount[mark.subject]++
                    }
                })
            })
            let lowest = Infinity
            let topSubjects: string[] = []

            for (const subject in belowAverageCount) {
                const percentage = (belowAverageCount[subject] / studentCount[subject]) * 100
                if (percentage < lowest) {
                    lowest = percentage
                    topSubjects = [subject]
                } else if (percentage === lowest) {
                    topSubjects.push(subject)
                }
            }

            return `The subjects in which the highest percentage of students scored below the average mark of ${name} ${topSubjects.length === 1 ? "is" : "are"} ${topSubjects.join(' , ')}`
        }
    }
]


export default answers