import React from 'react';
import { ArrowRight, ShoppingBag, Zap, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-8 animate-in fade-in slide-in-from-top-10 duration-1000">
                            The Future of <span className="text-indigo-600">Shopping</span> is Here.
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-12 animate-in fade-in duration-1000 delay-300">
                            Discover a curated collection of premium products designed for the modern lifestyle. Fast, secure, and beautiful.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95">
                                Shop Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-100 text-lg font-bold rounded-full text-gray-900 bg-white hover:bg-gray-50 transition-all hover:border-gray-200">
                                View Collection
                            </button>
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 blur-3xl opacity-20 pointer-events-none">
                    <div className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <Zap className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                            <p className="text-gray-500 leading-relaxed">Experience zero lag with our highly optimized, next-gen shopping platform.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <ShoppingBag className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Curated Selection</h3>
                            <p className="text-gray-500 leading-relaxed">Only the best products make it into our store. Quality is our top priority.</p>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                <ShieldCheck className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Checkout</h3>
                            <p className="text-gray-500 leading-relaxed">Your data is safe with our military-grade encryption and secure payment gateways.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
