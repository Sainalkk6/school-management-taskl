export type StudentTypes = {
    name: string;
    id: string;
    marks:
    {
        subject: string,
        mark: number
    }[]

}

export type ClassObjType = {
    name: string;
    teacherName: string;
    students: StudentTypes[]
}

export type SubjectTotalType = {[subject:string]: number}

export type AnswerType={
    id:number;
    question?:string;
    type?:string;
    needInput?:boolean;
    function:(obj:ClassObjType, type?:string,value?:number)=> any
}

export type StudentMarksType =  {
    [studentName: string]: {
        [subject: string]: number[];
    };
}

export type studentNameType = {[subject:string] : string[]}
export type newType = {[subject:string] : string}
