import { Client, Databases, Account } from "appwrite";
import config from "../config/config";

const client = new Client();

client
    .setEndpoint(config.appWriteURL)
    .setProject(config.appwriteProjectID);

export const account = new Account(client);
export const databases = new Databases(client);    