import { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router as WouterRouter, Route, Switch, useLocation, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrandProvider } from "./contexts/BrandContext";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Dossier from "./pages/Dossier";


function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path={"/guidelines"} component={Home} />
      <Route path={"/applications"} component={Applications} />
      <Route path={"/dossie"} component={Dossier} />
      <Route path={"/examples"}>
        <Redirect to="/applications" />
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll reveal
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    let tiltCleanup: (() => void) | null = null;

    // Provide a small timeout to allow React to render the DOM children
    const timeoutId = setTimeout(() => {
      const observerElems = document.querySelectorAll('.reveal-on-scroll');
      observerElems.forEach(el => revealObserver.observe(el));

      // Tilt Effect
      const tiltCards = document.querySelectorAll<HTMLElement>('.hover-tilt');
      const tiltHandlers: Array<{ card: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

      tiltCards.forEach(card => {
        const moveHandler = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          card.style.boxShadow = `${-rotateY*2}px ${rotateX*2}px 25px rgba(0,0,0,0.15)`;
        };
        const leaveHandler = () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
          card.style.boxShadow = 'none';
        };
        card.addEventListener('mousemove', moveHandler);
        card.addEventListener('mouseleave', leaveHandler);
        tiltHandlers.push({ card, move: moveHandler, leave: leaveHandler });
      });

      tiltCleanup = () => {
        tiltHandlers.forEach(({ card, move, leave }) => {
          card.removeEventListener('mousemove', move);
          card.removeEventListener('mouseleave', leave);
        });
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      revealObserver.disconnect();
      tiltCleanup?.();
    };
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <BrandProvider>
          <TooltipProvider>
            <Toaster />
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <AppRoutes />
            </WouterRouter>
          </TooltipProvider>
        </BrandProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
