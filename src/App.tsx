import React from 'react';
import logo from './logo.svg';
import './App.css';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router';

import { FullMap } from './Map';
import { NavigationBar } from './Navbar';
import { Container } from 'react-bootstrap';
import List from './List';
import ObjectPage from './ObjectPage';

function App() {
  return (
    <YMaps>
      <Router basename={""}>
        <NavigationBar/>
        <Container>
          <Routes>
            <Route path="/" element={<FullMap />} />
            <Route path="/list" element={<List />} />
            <Route path="/object/:id" element={<ObjectPage />} />
            <Route path="*" element={<Navigate to="/#/" />} />
          </Routes>
        </Container>
      </Router>
    </YMaps>
  );
}

export default App;
