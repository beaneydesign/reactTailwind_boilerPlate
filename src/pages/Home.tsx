import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-6">
                    React TypeScript Tailwind Boilerplate
                </h1>
                <p className="text-lg mb-4">
                    Welcome to your new React TypeScript project with Tailwind CSS and CRACO!
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Features</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>React 18</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>CRACO configuration</li>
                        <li>Path aliases (@/ for src/)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home; 