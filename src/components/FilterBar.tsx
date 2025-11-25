import type { Level } from '../context/TeacherContext';

export default function FilterBar({ cities, onFilter }: { cities: string[]; onFilter: (filters: { city?: string; subject?: string; level?: Level | '' }) => void }) {
    const inputClass = "px-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white text-slate-700 w-full sm:w-auto";

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <select
                    className={inputClass}
                    onChange={e => onFilter({ city: e.target.value || undefined })}
                >
                    <option value="">Toutes les villes</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select
                    className={inputClass}
                    onChange={e => onFilter({ subject: e.target.value || undefined })}
                >
                    <option value="">Toutes les matières</option>
                    <option value="Mathématique">Mathématique</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Physique-chimie">Physique-chimie</option>
                    <option value="SVT">SVT</option>
                    <option value="Philosophie">Philosophie</option>
                    <option value="Histoire-Géographie">Histoire-Géographie</option>
                </select>

                <select
                    className={inputClass}
                    onChange={e => onFilter({ level: (e.target.value as Level) || undefined })}
                >
                    <option value="">Tous les niveaux</option>
                    <option value="Primaire">Primaire</option>
                    <option value="Collège">Collège</option>
                    <option value="Lycée">Lycée</option>
                </select>
            </div>
        </div>
    );
}