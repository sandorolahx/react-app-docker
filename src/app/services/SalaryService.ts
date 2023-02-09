import { injectable } from 'inversify';
import ISalaryService from '../di/interfaces/ISalaryService';

@injectable()
class SalaryService implements ISalaryService {
    getNetSalary(grossSalary: number) {
        return grossSalary / 2;
    }
}

export default SalaryService;
