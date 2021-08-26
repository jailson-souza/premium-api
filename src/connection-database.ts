import { createConnection } from "typeorm";

const connectionDatabase = async () => {
    await createConnection().then(_ => console.log("connection created in database"));
};

export default connectionDatabase;
