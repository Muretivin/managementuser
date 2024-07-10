// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">User Management App</h1>
        <Routes>
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:userId" element={<UserForm />} />
          <Route path="/view/:userId" element={<UserDetail />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
