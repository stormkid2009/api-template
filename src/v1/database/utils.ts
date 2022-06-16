import fs from 'fs';

const saveToDatabase = (DB:object) => {
    fs.writeFileSync("./src/v1/database/db.json", JSON.stringify(DB, null, 2), {
      encoding: "utf-8",
    });
  };
  
  //module.exports = { saveToDatabase };
  export default saveToDatabase;