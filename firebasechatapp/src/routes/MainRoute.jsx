import React from 'react'
import Login from './../Pages/Login';
import { PrivateRoute } from './PrivateRoute';
import ChatRoom from '../Pages/ChatRoom';
import { Route, Routes } from 'react-router-dom';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default MainRoute
