import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';
import { useLenisScroll } from '@/src/hooks/useLenisScroll';
import { AnnouncementBar } from '@/src/components/AnnouncementBar';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { WhatsAppButton } from '@/src/components/WhatsAppButton';
import { BackToTop } from '@/src/components/BackToTop';

export function MainLayout() {
  useLenisScroll();
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#363789] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <AnnouncementBar />
      <Header />

      <main id="main-content" className="flex-1">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
          }}
        >
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <Toaster position="top-right" richColors />
    </div>
  );
}
