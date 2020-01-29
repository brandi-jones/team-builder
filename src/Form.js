import React, {useState} from 'react';


const Form = (props) => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
        console.log("member: ", member);
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
       
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name:"", email: "", role: "" })
    }


    return (

        <form onSubmit={submitForm}>

            <label htmlFor="nameInput">Name: </label>
            <input 
                id="nameInput" 
                type="text" 
                name="name" 
                onChange={handleChanges} 
                value={member.name}
            />
    
            <label htmlFor="emailInput">Email: </label>
            <input
                id="emailInput"
                type="text"
                name="email"
                onChange={handleChanges}
                value={member.email}
            />
            
            <label htmlFor="roleInput">Role: </label>
            <input
                id="roleInput"
                type="text"
                name="role"
                onChange={handleChanges}
                value={member.role}
            />

            <button type="submit">Add Member</button>
        </form>

    );


}



export default Form;