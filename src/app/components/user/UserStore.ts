import { action, computed, observable, reaction, runInAction, makeObservable, IReactionDisposer } from 'mobx';

export class UserModel {
    constructor(
        firstName: string,
        lastName: string,
        grosssalary: number,
        nrOfHolidays: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grossSalary = grosssalary;
        this.nrOfHolidays = nrOfHolidays;
        makeObservable(this);
    }

    firstName: string = '';

    lastName: string = '';

    grossSalary: number = 0;

    @observable
    nrOfHolidays: number = 25;
}

export class UserStore {

    private _user: UserModel;

    private reactions: IReactionDisposer[] = [];

    constructor(
        firstName: string,
        lastName: string,
        grossSalary: number,
        nrOfHolidays: number
    ) {
        this._user = new UserModel(firstName, lastName, grossSalary, nrOfHolidays);
        this.reactions.push(reaction(() => this.user.nrOfHolidays, () => {
            console.log('Nr of holidays changed :', nrOfHolidays);
        }));
        makeObservable(this);
    }

    @computed
    public get user() {
        return this._user;
    }

    @action.bound
    public increaseNrOfHolidays(): void {
        this._user.nrOfHolidays++;
    }

    @action.bound
    public decreaseNrOfHolidays(): void {
        this._user.nrOfHolidays--;
    }

    @action.bound
    public init() {
        return this.dispose;
    }

    @action.bound
    public dispose() {
        this.reactions.forEach(reaction => reaction());
    }
}

export default UserStore;
