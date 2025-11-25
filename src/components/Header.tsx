import { Link, useNavigate } from 'react-router-dom';
import { useTeacher } from '../context/TeacherContext';

export default function Header() {
    const { isAdmin, logout } = useTeacher();
    const navigate = useNavigate();

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
                <div className="text-xl font-bold">
                    Adama<span className="text-indigo-600">École</span>
                </div>
                <div className="text-indigo-600">🎓</div>
                </div>
            </div>
                <nav className="flex items-center gap-4">
                    <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Accueil</Link>
                    {isAdmin ? (
                        <>
                            <button
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
                                onClick={() => navigate('/dashboard')}
                            >
                                Dashboard
                            </button>
                            <button
                                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-medium transition-colors"
                                onClick={() => { logout(); navigate('/'); }}
                            >
                                Déconnexion
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm hover:shadow-md"
                        >
                            Connexion
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}