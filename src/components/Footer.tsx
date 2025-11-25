export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Colonne 1: À propos */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Mariko Adama</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Développeur web passionné par la création d'applications web et mobiles 
                            innovantes et performantes.
                        </p>
                        <div className="flex items-center space-x-2 text-slate-400">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span>Cocody Riviera Abatta, Abidjan</span>
                        </div>
                    </div>

                    {/* Colonne 2: Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Mes Services</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Développement Web</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Applications Mobiles</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                <span>UI/UX Design</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span>Consulting Tech</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <span>Maintenance & Support</span>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3: Technologies */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">React</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">Next.js</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">Node.js</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">TypeScript</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">Tailwind</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">MongoDB</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">React Native</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">Firebase</span>
                        </div>
                    </div>

                    {/* Colonne 4: Contact */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Téléphone</p>
                                    <p className="font-semibold">05 00 51 61 73</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Email</p>
                                    <p className="font-semibold">dmsmariko@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Réseaux sociaux */}
                        <div className="pt-4">
                   <h4 className="text-white font-semibold mb-3">Suivez-moi</h4>

                   <div className="flex space-x-4">

                    {/* Facebook */}
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center 
                                hover:bg-blue-600 transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12"/>
                        </svg>
                    </a>

                    {/* Twitter / X */}
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center 
                                hover:bg-gray-700 transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.36 2H21l-6.53 7.46L22 22h-6.24l-4.87-6.52L5 22H2.36l7.03-8.03L2 2h6.26l4.57 6.17L18.36 2z"/>
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a 
                        href="#" 
                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center 
                                hover:bg-purple-600 transition-colors"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zM17.8 6.2a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3z"/>
                        </svg>
                    </a>

                </div>
            </div>

                    </div>
                </div>

                {/* Section copyright */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                    <p className="text-slate-500">
                        © {new Date().getFullYear()} Mariko Adama - Développeur Web. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}