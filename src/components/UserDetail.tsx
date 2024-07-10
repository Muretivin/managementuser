// src/components/UserDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UserDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = useSelector((state: RootState) =>
    state.users.users.find(user => user.id === Number(userId))
  );

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetail;
