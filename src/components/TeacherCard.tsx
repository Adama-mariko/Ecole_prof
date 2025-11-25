import type { Teacher } from '../context/TeacherContext';

export default function TeacherCard({ teacher, onEdit, onDelete }: { teacher: Teacher; onEdit?: () => void; onDelete?: () => void }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col group">
            {/* Header avec photo et badge */}
            <div className="h-52 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                {teacher.photoDataUrl ? (
                    <img
                        src={teacher.photoDataUrl}
                        alt={teacher.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                        <svg className="w-16 h-16 text-slate-400 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
                
                {/* Badge de niveau avec design amélioré */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-md ${
                        teacher.level === 'Primaire' ? 'bg-emerald-500 text-white' :
                        teacher.level === 'Collège' ? 'bg-blue-500 text-white' :
                        'bg-violet-500 text-white'
                    }`}>
                        {teacher.level}
                    </span>
                </div>
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>

            {/* Contenu des informations */}
            <div className="p-6 flex-1 flex flex-col">
                {/* Nom avec typographie améliorée */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight border-b border-slate-100 pb-3">
                    {teacher.name}
                </h3>

                {/* Informations avec icônes */}
                <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <div className="text-sm text-slate-500">Ville</div>
                            <div className="font-medium text-slate-800">{teacher.city}</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                            <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <div>
                            <div className="text-sm text-slate-500">Matière</div>
                            <div className="font-medium text-slate-800">{teacher.subject}</div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div>
                            <div className="text-sm text-slate-500">Téléphone</div>
                            <div className="font-medium text-slate-800">{teacher.phone}</div>
                        </div>
                    </div>

                    {teacher.price && (
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <div className="text-sm text-slate-500">Tarif</div>
                                <div className="font-bold text-green-600 text-lg">{teacher.price}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Boutons d'action - Toujours visibles et bien espacés */}
                {(onEdit || onDelete) && (
                    <div className="mt-6 pt-4 border-t border-slate-200 flex gap-3">
                        {onEdit && (
                            <button
                                onClick={onEdit}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-200 border border-blue-200 hover:border-blue-300 hover:scale-105 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                Modifier
                            </button>
                        )}
                        {onDelete && (
                            <button
                                onClick={onDelete}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-700 rounded-lg font-semibold hover:bg-red-100 transition-all duration-200 border border-red-200 hover:border-red-300 hover:scale-105 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Supprimer
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}