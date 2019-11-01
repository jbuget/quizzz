class Question extends DomainEntity {

    quizIndex: number;
    statement: string;
    responseA: string;
    responseB: string;
    responseC: string;
    responseD: string;
    solution: Solution;
}