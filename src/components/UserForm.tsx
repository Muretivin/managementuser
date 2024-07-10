// // src/components/UserForm.tsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppDispatch, RootState } from '../store';
// import { createUser, modifyUser } from '../features/users/userSlice';

// const UserForm: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const navigate = useNavigate();
//   const { userId } = useParams<{ userId: string }>();
//   const existingUser = useSelector((state: RootState) =>
//     state.users.users.find(user => user.id === Number(userId))
//   );
//   const [user, setUser] = useState(existingUser || { name: '', email: '' });

//   useEffect(() => {
//     if (existingUser) {
//       setUser(existingUser);
//     }
//   }, [existingUser]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (existingUser) {
//       dispatch(modifyUser(user));
//     } else {
//       dispatch(createUser(user));
//     }
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   );
// };

// export default UserForm;

// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../store';
import { createUser, modifyUser, User } from '../features/users/userSlice';

const UserForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const existingUser = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === Number(userId))
  );

  const initialState: User = existingUser || { id: 0, name: '', email: ''};

  const [user, setUser] = useState<User>(initialState);

  useEffect(() => {
    if (existingUser) {
      setUser(existingUser);
    }
  }, [existingUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingUser) {
      dispatch(modifyUser(user));
    } else {
      dispatch(createUser(user));
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;

