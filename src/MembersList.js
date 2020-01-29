import React from 'react';

const MembersList = (props) => {
    return(
        <div className="membersList">
            <h1>Team</h1>
            {props.members.map(member => (
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <h4>{member.email}</h4>
                </div>
            ))}
        </div>
    );
}

export default MembersList;