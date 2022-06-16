const DB = require("./db.json");
import saveToDatabase from "./utils";

const getAllUsers = () => {
  try {
    return DB.users;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const User = {
    getAllUsers
};
export default User;