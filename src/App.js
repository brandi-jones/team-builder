import React,{useState} from 'react';
import Form from './Form';
import MembersList from './MembersList';
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 0,
      name: '',
      email: '',
      role: ''
    }
  ]);

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

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <MembersList members={members} />
    </div>
  );
}

export default App;
