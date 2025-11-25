import { useState } from 'react';
import { useTeacher } from '../context/TeacherContext';
import type { Level } from '../context/TeacherContext';
import TeacherCard from '../components/TeacherCard';

export default function AdminDashboard() {
    const { teachers, addTeacher, deleteTeacher } = useTeacher();

    const [form, setForm] = useState({ name: '', city: '', level: 'Primaire' as Level, subject: '', phone: '', price: '' });
    const [photoDataUrl, setPhotoDataUrl] = useState<string | undefined>(undefined);

    function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => setPhotoDataUrl(String(reader.result));
        reader.readAsDataURL(f);
    }

    function handleAdd(e: React.FormEvent) {
        e.preventDefault();
        const payload: any = { ...form };
        if (form.level !== 'Collège') delete payload.price;
        addTeacher({ ...payload, photoDataUrl });
        setForm({ name: '', city: '', level: 'Primaire', subject: '', phone: '', price: '' });
        setPhotoDataUrl(undefined);
    }

    const inputClass = "w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all";

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Admin</h1>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {teachers.length} Professeurs
                </span>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mb-12">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 border-b pb-2">Ajouter un nouveau professeur</h3>
                <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                        <input className={inputClass} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Ville</label>
                        <input className={inputClass} value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Niveau</label>
                        <select className={inputClass} value={form.level} onChange={e => setForm({ ...form, level: e.target.value as Level })}>
                            <option value="Primaire">Primaire</option>
                            <option value="Collège">Collège</option>
                            <option value="Lycée">Lycée</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Matière</label>
                        <select className={inputClass} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required>
                            <option value="Mathématique">Mathématique</option>
                            <option value="Français">Français</option>
                            <option value="Anglais">Anglais</option>
                            <option value="Physique-chimie">Physique-chimie</option>
                            <option value="SVT">SVT</option>
                            <option value="Philosophie">Philosophie</option>
                            <option value="Histoire-Géographie">Histoire-Géographie</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                        <input className={inputClass} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                    </div>

                    {form.level === 'Collège' && (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Prix</label>
                            <input className={inputClass} placeholder="2000/h" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
                        </div>
                    )}

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Photo de profil</label>
                        <div className="flex items-center gap-4">
                            <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg transition-colors border border-slate-300">
                                Choisir une image
                                <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
                            </label>
                            {photoDataUrl && <span className="text-green-600 text-sm">Image sélectionnée ✓</span>}
                        </div>
                    </div>

                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Ajouter le professeur
                        </button>
                    </div>
                </form>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Liste des professeurs (édition)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teachers.map(t => (
                    <TeacherCard key={t.id} teacher={t} onDelete={() => deleteTeacher(t.id)} />
                ))}
            </div>
        </div>
    );
}