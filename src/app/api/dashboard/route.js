"use server";

import { collection,getDocs,query,Timestamp,where } from "firebase/firestore";

import { db } from '../../../../firestore';
import jwt from 'jsonwebtoken';

export async function GET(req) {


    try {
        const url = new URL(req.url); 
        const token = url.searchParams.get('token');
        var user_details = await userDetails(token);

         var total_meditation = await getSum("attendence","hours","meditation");
         var today_meditation = await getSum("attendence","hours","today","meditation");
         var this_month_meditation = await getSum("attendence","hours","month","meditation");
       

         var data = {"total_meditation":total_meditation,"today_meditation":today_meditation,"this_month_meditation":this_month_meditation,"user_details":user_details};
            
         
            return new Response(JSON.stringify(data), { status: 200 });
    } catch (err) {
        console.error("Error fetching data: ", err);
        return new Response(JSON.stringify({ err }), { status: 500 });
    }
}


async function getSum(table,column,type="type",value="") {
    const colRef = collection(db, table); // Replace with your collection name

    let snapshot = await getDocs(colRef);


    if(value != ""){
        var q = query(colRef, where(type, "==", value));

        if(type == "today"){
            const today = new Date();


            const startOfDay = new Date(today.setHours(0, 0, 0, 0));
            const endOfDay = new Date(today.setUTCHours(23, 59, 59, 999));

             q = query(
                colRef,
                where("timestamp", ">=", Timestamp.fromDate(startOfDay)),
                where("timestamp", "<=", Timestamp.fromDate(endOfDay))
              );
        }

        if(type == "month"){
            const today = new Date();

            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);

             q = query(
                colRef,
                where("timestamp", ">=", Timestamp.fromDate(startOfMonth)),
                where("timestamp", "<=", Timestamp.fromDate(endOfMonth))
              );
        }

        
        snapshot = await getDocs(q);
    }
  
    let sum = 0;
  
    snapshot.forEach((doc) => {
      const data = doc.data();
      sum += Number(data[column]) || 0; 
    });
  
    return sum;
  }

  async function userDetails(token) {


    try {
      const decoded = jwt.verify(token, "signin"); 
      
      const userId = decoded?.user?.email;
      const colRef = collection(db, "auth");
      const q = query(colRef, where("email", "==", userId));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        throw new Error("User not found");
      }

      const userDetails = snapshot.docs[0].data();
      var data = {
        name: userDetails?.name,
        email: userDetails?.email
      }
       return data;
    } catch (err) {
      console.error("Error verifying token or fetching user details: ", err);
      throw new Error("Unauthorized");
    }
    
  }
