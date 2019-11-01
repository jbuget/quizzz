class User extends DomainEntity {

    username: string;
    firstName: string;
    lastName: string;
    games: Game[];
    quizzes: Quiz[];

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}