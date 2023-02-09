import { UserModel } from "../../components/user/UserStore";

interface IUserSevice {
    getFullName: (user: UserModel) => string;
}

export default IUserSevice;
