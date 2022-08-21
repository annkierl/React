import { useState, useEffect } from "react";
import { studentsData } from "../helpers/getDataFromFirebase";
import { addDoc } from "firebase/firestore";
export const Form = ({ setStudents }) => {
  const [newstudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    adress: {city:"", street:""},
  });
  // const newObjectInObject=(inputObject)=>{
  //   const { name, value } = inputObject.target;
  //   console.log(inputObject)
  //   if(name ==='city' || (name==='street')) {
  //     setNewStudent( {
  //       ...newstudent,
  //       adress:{...newstudent.adress, 
  //      city: value}
  //     })
  //   }
  //   else {
  //    setNewStudent({
  //      ...newstudent,
  //      [name]:value,
  //    });
  //    console.log(newstudent)
  // }}
  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value)
    //  const {adressStudent} = adress[name]= value
  //   if(name = 'city' || (name='street')) {
  //    setNewStudent( 
  //      ...newstudent,
  //      adress:{...newstudent.adress, 
  //     city: e.target.value}
  //      )
  //     }
  //  else {
  //   setNewStudent({
  //     ...newstudent,
  //     [e.target.name]: e.target.value,
      
  //   });

    // newObjectInObject(e)
    if (['firstName', 'lastName', "birthDate"].includes(name)) {
      setUserInfo(prevState => {
        return {
          user: {
            ...prevState.user,
            [name]: e.target.value,
          }
        };
      });
    } else {
      setUserInfo(prevState => {
        return {
          user: {
            ...prevState.user,
            phone: name === 'primary' ?
             [prevState.user.phone.find(e => Object.keys(e).includes('alternate')), {[name]: e.target.value}] :
             [prevState.user.phone.find(e => Object.keys(e).includes('primary')), {[name]: e.target.value}]
          }
        };
      });
    }
    
  //   setNewStudent(prevState => ({
  //     ...prevState,
  //     [name]: value
  // }));
    console.log(newstudent)
  };

  const onClick = (e) => {
    e.preventDefault();
    addDoc(studentsData, newstudent).then(() => {
      setNewStudent({
        firstName: " ",
        lastName: " ",
        birthDate: " ",
        adress: { city: " ", street: "" },
      });
    });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            value={newstudent.firstName}
            name="firstName"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            value={newstudent.lastName}
            name="lastName"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="birthDate">birthDate:</label>
          <input
            type="text"
            id="birthDate"
            value={newstudent.birthDate}
            name="birthDate"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="city">city:</label>
          <input
            type="text"
            id="city"
            value={newstudent.adress.city}
            name="city"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="street">street:</label>
          <input
            type="text"
            id="street"
            value={newstudent.adress.street}
            name="street"
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="numberOfHouse">Number of house:</label>
          <input
            type="text"
            id="numberOfHouse"
            name="numberOfHouse"
            onChange={onChange}
          ></input>
        </div>

        <div>
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            name="class"
            onChange={onChange}
          ></input>
        </div>
        <button type="submit" onClick={onClick}>
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};
