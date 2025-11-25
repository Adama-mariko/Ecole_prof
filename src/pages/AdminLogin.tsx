import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTeacher } from '../context/TeacherContext';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useTeacher();
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const ok = login(email, password);
        if (ok) navigate('/dashboard');
        else alert('Identifiants incorrects. Veuillez réessayer.');
    }

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Connexion Administrateur</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                           
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg mt-4"
                    >
                        Se connecter
                    </button>
                </div>
            </form>
        </div>
    );
}