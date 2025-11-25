import { useMemo, useState, useRef } from 'react';
import { useTeacher } from '../context/TeacherContext';
import TeacherCard from '../components/TeacherCard';
import FilterBar from '../components/FilterBar';

export default function Home() {
    const { teachers } = useTeacher();
    const [filters, setFilters] = useState<{ city?: string; subject?: string; level?: any }>({});
    const teachersSectionRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const cities = useMemo(() => Array.from(new Set(teachers.map(t => t.city))).sort(), [teachers]);

    function handleFilter(partial: any) {
        setFilters(prev => {
            const newFilters = { ...prev, ...partial };
            Object.keys(newFilters).forEach(key => {
                if (newFilters[key as keyof typeof newFilters] === undefined) {
                    delete newFilters[key as keyof typeof newFilters];
                }
            });
            
            return newFilters;
        });
    }

    const filtered = teachers.filter(t => {
        if (filters.city && t.city !== filters.city)
             return false;
        if (filters.subject && !t.subject.toLowerCase().includes(String(filters.subject).toLowerCase()))
             return false;
        if (filters.level && t.level !== filters.level) 
            return false;
        return true;
    });

    const scrollToTeachers = () => {
        if (teachersSectionRef.current) {
            setIsAnimating(true);
            teachersSectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            setTimeout(() => {
                setIsAnimating(false);
            }, 800);
        }
    };

    const handleGetStarted = () => {
        const button = document.querySelector('.cta-primary');
        if (button) {
            button.classList.add('animate-pulse');
            setTimeout(() => {
                button.classList.remove('animate-pulse');
            }, 600);
        }
        
        setTimeout(scrollToTeachers, 300);
    };

    return (
        <section>
            <div className="text-center mb-16">
                {/* Badge de qualité avec animation */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg animate-fade-in">
                    <svg className="w-4 h-4 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Développé avec expertise par Mariko Adama
                </div>

                {/* Titre principal avec effet gradient et animation */}
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-slide-up">
                    <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Trouvez le
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-slate-900 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                        Professeur Idéal
                    </span>
                </h1>

                {/* Sous-titre élégant avec animation retardée */}
                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 animate-slide-up animation-delay-100">
                    Accédez à une <span className="font-semibold text-blue-600">sélection d'excellence</span> des meilleurs enseignants 
                    pour vous accompagner vers la <span className="font-semibold text-purple-600">réussite scolaire</span>.
                </p>

                {/* Statistiques impressionnantes avec animation */}
                <div className="flex justify-center items-center gap-8 mb-8 animate-slide-up animation-delay-200">
                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-slate-900 animate-count-up">500+</div>
                        <div className="text-sm text-slate-500">Professeurs vérifiés</div>
                    </div>
                    <div className="w-1 h-8 bg-slate-300"></div>
                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-slate-900 animate-count-up">98%</div>
                        <div className="text-sm text-slate-500">Taux de satisfaction</div>
                    </div>
                    <div className="w-1 h-8 bg-slate-300"></div>
                    <div className="text-center transform hover:scale-110 transition-transform duration-300">
                        <div className="text-2xl font-bold text-slate-900 animate-count-up">24h</div>
                        <div className="text-sm text-slate-500">Support réactif</div>
                    </div>
                </div>

                {/* CTA buttons avec animations améliorées */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-300">
                    <button 
                        onClick={handleGetStarted}
                        className="cta-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 active:scale-95"
                    >
                        Commencer maintenant
                        <svg className="w-5 h-5 inline-block ml-2 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={scrollToTeachers}
                        className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
                    >
                        Voir les professeurs
                        <svg className="w-5 h-5 inline-block ml-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 pt-8 border-t border-slate-200 animate-fade-in animation-delay-500">
                    <p className="text-sm text-slate-500 mb-4">Recommandé par des établissements prestigieux</p>
                    <div className="flex justify-center items-center gap-8 opacity-60">
                        <div className="text-lg font-bold text-slate-700 hover:opacity-100 transition-opacity duration-300">Lycée Ivoirienne</div>
                        <div className="text-lg font-bold text-slate-700 hover:opacity-100 transition-opacity duration-300">Collège Ivoirienne</div>
                        <div className="text-lg font-bold text-slate-700 hover:opacity-100 transition-opacity duration-300">École Internationale</div>
                    </div>
                </div>
            </div>

            {/* Section des professeurs avec référence pour le scroll */}
            <div ref={teachersSectionRef}>
                <FilterBar cities={cities} onFilter={handleFilter} />
                
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
                    {filtered.length === 0 ? (
                        <div className="col-span-full text-center py-12 animate-fade-in">
                            <p className="text-xl text-slate-500">Aucun professeur ne correspond à vos critères.</p>
                        </div>
                    ) : filtered.map((t, index) => (
                        <div 
                            key={t.id} 
                            className="animate-card-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <TeacherCard teacher={t} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}