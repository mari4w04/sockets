import React from 'react';

class Profile extends React.Component {
    render() {
        const { img, name, age, hobbies } = this.props.profileInfo;
        
        return (
            <div>
                <p>     </p>
                <img src={img} />
                <div>Name: {name}</div>
                <div>Age: {age} </div>
                <div>Hobbies: </div>
                {
                    hobbies.map((element) => {
                        return (<p>{element}</p>);
                    })
                }
            </div>
        );
    }
}

export default Profile;
