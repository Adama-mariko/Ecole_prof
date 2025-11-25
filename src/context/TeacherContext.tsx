import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Level = 'Primaire' | 'Collège' | 'Lycée';

export type Teacher = {
    id: string;
    name: string;
    city: string;
    level: Level;
    subject: string;
    phone: string;
    price?: string;
    photoDataUrl?: string;
};

type TeacherContextType = {
    teachers: Teacher[];
    addTeacher: (t: Omit<Teacher, 'id'>) => void;
    editTeacher: (id: string, t: Partial<Teacher>) => void;
    deleteTeacher: (id: string) => void;
    isAdmin: boolean;
    login: (email: string, password: string) => boolean;
    logout: () => void;
};

const TeacherContext = createContext<TeacherContextType | undefined>(undefined);

export function useTeacher() {
    const ctx = useContext(TeacherContext);
    if (!ctx) throw new Error('useTeacher must be used inside a TeacherProvider');
    return ctx;
}

export function TeacherProvider({ children }: { children: ReactNode }) {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isAdmin, setIsAdmin] = useState(false);

     useEffect(() => {
        const loadInitialData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setTeachers(prev => {
                    if (prev.length === 0) {
                        return data.teachers;
                    }
                    return prev;
                });
            } catch (error) {
                console.log('Chargement des données initiales');
            }
        };

        loadInitialData();
    }, []);

    function addTeacher(t: Omit<Teacher, 'id'>) {
        const id = String(Date.now());
        setTeachers(prev => [...prev, { id, ...t }]);
    }

    function editTeacher(id: string, t: Partial<Teacher>) {
        setTeachers(prev => prev.map(x => x.id === id ? { ...x, ...t } : x));
    }

    function deleteTeacher(id: string) {
        setTeachers(prev => prev.filter(x => x.id !== id));
    }

    function login(email: string, password: string) {
        if (email === 'admin@gmail.com' && password === '123') {
            setIsAdmin(true);
            return true;
        }
        return false;
    }

    function logout() {
        setIsAdmin(false);
    }

    return (
        <TeacherContext.Provider value={{ teachers, addTeacher, editTeacher, deleteTeacher, isAdmin, login, logout }}>
            {children}
        </TeacherContext.Provider>
    );
}