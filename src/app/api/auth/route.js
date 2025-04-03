"use server";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { collection,getDocs, query, where } from "firebase/firestore";

import { db } from '../../../../firestore';

// const database = getFirestore();

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const usersRef = collection(db, "auth");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return Response.json({ message: "User not found" },{status:500});
        }

          let user = null;
          querySnapshot.forEach((doc) => {
            user = { id: doc.id, ...doc.data() };
          });


          const isPasswordValid = await bcrypt.compare(password, user.pwd);
            if (!isPasswordValid) {
                return Response.json({ message: "Invalid password" },{status:500});
            }

            const token = jwt.sign(
              {
                user: user,
              },
              "signin",
              { expiresIn: "12h" },
            );

            return Response.json({ token },{status:200});

      } catch (error) {
        console.error("Error fetching data: ", error);
        return Response.json({ error },{status:500});
      }
    
}