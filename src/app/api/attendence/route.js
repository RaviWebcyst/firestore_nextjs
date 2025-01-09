"use server";

import { collection, addDoc } from "firebase/firestore";

import { db } from '../../../../firestore';

export async function POST(req){
    try{
        const { name, father_name, phone,type,location,hours,block,city,dist,state} = await req.json();

        const docRef = await addDoc(collection(db, 'attendence'), {
            name,
            father_name,
            phone,
            type,
            location,
            hours,
            block,
            city,
            dist,
            state,
            timestamp: new Date()
        });

        return Response.json({ message: "Data added successfully", id: docRef.id }, { status: 200 });


    }
    catch(err){
        console.error("Error adding data: ", err);
        return Response.json({ err },{status:500});
    }
}