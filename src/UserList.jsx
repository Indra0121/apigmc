import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
