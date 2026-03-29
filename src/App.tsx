import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { ScrollProgress } from "@/components/ui/scroll-animations";
import BackgroundLogs from "@/components/BackgroundLogs";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="cloudops-ui-theme">
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
                        <div className="hidden md:block">
                            <CursorFollower />
                        </div>
                        <ScrollProgress />
                        <BackgroundLogs />
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/project/:id" element={<ProjectDetail />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </TooltipProvider>
        </ThemeProvider>
    </QueryClientProvider>
);

export default App;
