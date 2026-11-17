import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-20 right-5 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#363789]/30 bg-white text-[#363789] shadow-md transition-colors hover:bg-[#363789] hover:text-white cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
