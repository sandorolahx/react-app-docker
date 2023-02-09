import { inject, injectable } from 'inversify';
import TYPES from '../di/types';
import IUserSevice from '../di/interfaces/IUserSevice'
import SalaryService from './SalaryService';
import { UserModel } from '../components/user/UserStore';

@injectable()
class UserService implements IUserSevice {
    // @inject(TYPES.SalaryService) 
    // private salaryService: SalaryService;

    constructor(
        @inject(TYPES.SalaryService) private readonly salaryService: SalaryService
    ) { }

    public getFullName(user: UserModel) {
        return user.firstName + ' ' + user.lastName + ' Salary: ' + this.salaryService.getNetSalary(user.grossSalary);
    }
}

export default UserService;
