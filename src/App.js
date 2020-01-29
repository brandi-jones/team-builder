import React,{useState} from 'react';
import Form from './Form';
import MembersList from './MembersList';
import './App.css';

function App() {

  //create state to hold the members array/list
  const [members, setMembers] = useState([
    {
      id: 0,
      name: '',
      email: '',
      role: ''
    }
  ]);

  //function to change the members list/array state
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role

    };
    setMembers([...members, newMember]); //set members with old members state, plus new member after
    console.log("Members array: ", members);
  }



  //edit member stretch
  const [memberToEdit, setMemberToEdit] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleMemberChanges = member => {

    setMemberToEdit(member);
    console.log("handleMemberChanges ran. setMemberToEdit set member as: ", member)
  };
  
  //directly mutating data here. need to figure out how to remove old member from array while replacing with new with spread operator
  //also, memberToEdit here will not have an associated ID like member. therefore, temporarily was matching based on
  //name, therefore making name unchangable.
  const editMember = (memberToEdit) => {
    members.map(member => {
      if (member.name === memberToEdit.name) {
        //member.name = memberToEdit.name;
        member.email = memberToEdit.email;
        member.role = memberToEdit.role;
        console.log("edited member. member is now: ", member);
      }
      
    })
   
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
      <MembersList members={members} handleMemberChanges={handleMemberChanges}/>
    </div>
  );
}

export default App;
