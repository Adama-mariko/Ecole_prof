import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { TeacherProvider } from './context/TeacherContext';


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TeacherProvider>
            <App />
        </TeacherProvider>
    </React.StrictMode>
);