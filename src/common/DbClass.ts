import { db } from "../firebase";


class DbClass {

    dbFire;

    constructor() {
        this.dbFire = db;
    }

    sendMsg = async (message)=>{ // Enregistrement d'un message en base
        console.log("Message :",message);
    }

}

export default DbClass;