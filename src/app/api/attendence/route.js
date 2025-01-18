"use server";

import { collection, addDoc,getDocs,query, doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";

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



export async function GET(req) {
    try {


        const url = new URL(req.url); // Get the URL object from the request
        const id = url.searchParams.get('id'); // Extract the `id` from query parameters
        if (id) {
            const docRef = doc(db, 'attendence',id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            return new Response(JSON.stringify({ id: docSnap.id, ...docSnap.data() }), { status: 200 });
            } else {
            return new Response(JSON.stringify({ message: "No such document!" }), { status: 404 });
            }
        }
        
        const attendenceRef = collection(db, 'attendence');

        const snapshot = await getDocs(query(attendenceRef));
        
        const attendenceList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return new Response(JSON.stringify(attendenceList), { status: 200 });
    } catch (err) {
        console.error("Error fetching data: ", err);
        return new Response(JSON.stringify({ err }), { status: 500 });
    }
}


export async function PUT (req){
        const url = new URL(req.url); // Get the URL object from the request
        const id = url.searchParams.get('id'); // Extract the `id` from query parameters
        const docRefs = doc(db, 'attendence', id);

    try{
        
        const { name, father_name, phone,type,location,hours,block,city,dist,state} = await req.json();

         await updateDoc(docRefs, {
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

        return Response.json({ message: "Data Updated successfully" }, { status: 200 });


    }
    catch(err){
        console.error("Error updating data: ", err);
        return Response.json({ err },{status:500});
    }
}


export async function DELETE(req) {
    try {
        const url = new URL(req.url); // Get the URL object from the request
        const id = url.searchParams.get('id'); // Extract the `id` from query parameters

        if (!id) {
            return new Response(JSON.stringify({ message: "ID is required" }), { status: 400 });
        }

        const docRef = doc(db, 'attendence', id);
        await deleteDoc(docRef);

        return new Response(JSON.stringify({ message: "Document deleted successfully" }), { status: 200 });
    } catch (err) {
        console.error("Error deleting document: ", err);
        return new Response(JSON.stringify({ err }), { status: 500 });
    }
}






// export async function GET(req) {
//     try {
//         const attendenceRef = collection(db, 'attendence');

//         const snapshot = await getDocs(attendenceRef);
        
//         const attendenceList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//         return Response.json(attendenceList, { status: 200 });
//     } catch (err) {
//         console.error("Error fetching data: ", err);
//         return Response.json({ err }, { status: 500 });
//     }
// }


