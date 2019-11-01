class Game extends DomainEntity {

    owner: User;
    answers: Answer[];
    quiz: Quiz;
}