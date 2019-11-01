class Quiz extends DomainEntity {

    name: string;
    questions: Question[];
    creator: User;
}