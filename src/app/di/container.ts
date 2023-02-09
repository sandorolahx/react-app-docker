import { Container } from 'inversify';
import TYPES from './types';
import UserService from '../services/UserService';
import IUserService from './interfaces/IUserSevice';
import ISalaryService from './interfaces/ISalaryService';
import SalaryService from '../services/SalaryService';
import IConfig from './interfaces/IConfig';
import Config from '../global/config';

const container = new Container();

container.bind<IConfig>(TYPES.Config).toConstantValue(Config);

container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<ISalaryService>(TYPES.SalaryService).to(SalaryService).inSingletonScope();

export default container;
