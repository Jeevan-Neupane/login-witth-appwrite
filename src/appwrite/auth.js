import { account } from "./appwrite";
import { ID } from "appwrite";


class AuthService {

    async createAccount({ email, password, username }) {
        try {
            const userAccount = await account.create(ID.unique(), email, password, username);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("Error :: CreateAccount :: Appwrite", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await account.createEmailSession(email, password);
        } catch (error) {
            console.log("Error :: Login :: Appwrite", error);
            throw error;
        }

    }

    async logout() {
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log("Error :: Logout :: Appwrite", error);

        }
    }

    async getCurrentUser() {
        try {
            const loggedIn = await account.get();
            return loggedIn;
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

}

const authService = new AuthService();

export default authService;