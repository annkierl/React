import { useState, useEffect } from "react"
import {getDataFromFirebase, studentsData} from '../helpers/getDataFromFirebase'
import {onSnapshot, } from "firebase/firestore";
import {Form} from './form'

export const Students=()=>{
    const [student,setStudents]=useState([])
    useEffect(()=>{
        onSnapshot(studentsData,snapshot=>{
            const students = getDataFromFirebase(snapshot)
            setStudents(students)
        })
    },
    [])
    console.log(student)
    return (
        <>
        <ul>
         {student.map((elem) => {
        return (
          <li key={elem.id}>
            {elem.firstName} {elem.lastName}

          </li>
        );
      })}
      </ul>
      <Form setStudents={setStudents}></Form>
        </>
    

    )}