import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTeacher } from './context/TeacherContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
    const { isAdmin } = useTeacher();

    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<AdminLogin />} />
                        <Route path="/dashboard" element={isAdmin ? <AdminDashboard /> : <AdminLogin />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}