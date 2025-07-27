import React, { useState } from 'react';

function ProfilePage() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div style={{ padding: '20px' }}>
        <input
            type="text"
            value={inputValue} 
            onChange={handleChange}
            placeholder="Enter username"
            className = "usernameBox"
        />
        <input
            type="text"
            value={inputValue} 
            onChange={handleChange}
            placeholder="Enter password"
            className = "passwordBox"
        />
        <button>Login</button>
        </div>
    );
}

export default ProfilePage;