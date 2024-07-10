// // src/components/UserList.tsx
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { fetchUsers, deleteUser, User } from '../features/users/userSlice';
// import { Button, List, ListItem, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';

// const UserList: React.FC = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state: RootState) => state.users);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <List>
//       {users.map((user: User) => (
//         <ListItem key={user.id}>
//           <ListItemText primary={user.name} secondary={user.email} />
//           <Button variant="contained" color="primary" component={Link} to={`/view/${user.id}`}>
//             View
//           </Button>
//           <Button variant="contained" color="secondary" component={Link} to={`/edit/${user.id}`}>
//             Edit
//           </Button>
//           <Button variant="contained" color="error" onClick={() => dispatch(deleteUser(user.id))}>
//             Delete
//           </Button>
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default UserList;


// src/components/UserList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchUsers, deleteUser } from '../features/users/userSlice';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} secondary={user.email} />
          <Button variant="contained" color="primary" component={Link} to={`/view/${user.id}`}>
            View
          </Button>
          <Button variant="contained" color="secondary" component={Link} to={`/edit/${user.id}`}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={() => dispatch(deleteUser(user.id))}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
