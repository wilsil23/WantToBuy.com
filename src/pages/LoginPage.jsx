import React, { useState } from 'react';

function ProfilePage() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const handleUsernameChange = (event) => {
        setUsernameValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    return (
        <div style={{ padding: '20px' }}>
        <input
            type="text"
            value={usernameValue} 
            onChange={handleUsernameChange}
            placeholder="Enter username"
            className = "usernameBox"
        />
        <input
            type="text"
            value={passwordValue} 
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className = "passwordBox"
        />
        <button>Login</button>
        </div>
    );
}

export default ProfilePage;