
// Gère les différentes connexions 

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();

class AuthClass{

    authFire;
    dbFire;

    constructor(){
        this.authFire = auth;
        this.dbFire = db;
    }

    connexionGoogle = async () => {
        const result = await signInWithPopup(this.authFire, googleProvider);
        console.log("User : ", result);

        if (result != null){ // Si l'utilisateur est connecté

            // Vérifier s'il existe en base (dans le firestore)

            // Preparation de la requete 
            const docRefUser = doc(this.dbFire,'users',result.user.uid); // Lecture du document ( de la table users )
            // Lancement de la requete 
            const snapUser = await getDoc(docRefUser);

            if(!snapUser.exists()){ // Vérifie si la requete retourne des données
                // Ajouter des données
                await setDoc(docRefUser,{
                    name : result.user.displayName
                })
            }
        }
    }

}

export default AuthClass;