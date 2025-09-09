import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import Home from './pages/Home';

function App() {
    return (
        <div className="min-h-screen bg-background">
            <Router>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <h1 className="text-lg font-semibold">Dashboard</h1>
                        </header>
                        <div className="p-4">
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </Router>
        </div>
    );
}

export default App; 