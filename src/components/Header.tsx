import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { navigationItems, type NavItem } from '@/src/data/navigation';
import { collegeInfo } from '@/src/data/collegeInfo';
import { CollegeCrest } from './CollegeCrest';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/src/utils/cn';

function DesktopDropdown({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSubOpen(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setSubOpen(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!item.children) {
    return (
      <Link
        to={item.to}
        className={cn(
          'relative px-2.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors',
          isActive ? 'text-[#363789] font-semibold' : 'text-[#202124] hover:text-[#363789]'
        )}
      >
        {item.label}
        {isActive && (
          <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-[#363789]" />
        )}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setSubOpen(null);
      }}
    >
      <div className="flex items-center">
        <Link
          to={item.to}
          onClick={() => setOpen(false)}
          className={cn(
            'relative inline-flex items-center gap-1 px-2.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors',
            isActive ? 'text-[#363789] font-semibold' : 'text-[#202124] hover:text-[#363789]'
          )}
        >
          <span>{item.label}</span>
          <button
            type="button"
            aria-label={`Toggle ${item.label} menu`}
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
            className="p-0.5 rounded hover:bg-[#F5F6FA] cursor-pointer"
          >
            <ChevronDown
              className={cn('h-3.5 w-3.5 transition-transform duration-150', open && 'rotate-180')}
              aria-hidden="true"
            />
          </button>
          {isActive && (
            <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-[#363789]" />
          )}
        </Link>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 pt-1.5"
          >
            <div className="min-w-[235px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
              {item.children.map((child) => {
                if (child.children) {
                  const isSubExpanded = subOpen === child.label;
                  return (
                    <div
                      key={child.label}
                      className="relative"
                      onMouseEnter={() => setSubOpen(child.label)}
                      onMouseLeave={() => setSubOpen(null)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setSubOpen((prev) => (prev === child.label ? null : child.label))
                        }
                        aria-expanded={isSubExpanded}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[#202124] hover:bg-[#E8EAF6] hover:text-[#363789] cursor-pointer"
                      >
                        <span>{child.label}</span>
                        <ChevronRight className="h-4 w-4 text-[#68778A]" aria-hidden="true" />
                      </button>

                      {isSubExpanded && (
                        <div className="lg:absolute lg:left-full lg:top-0 lg:pl-1.5 z-50">
                          <div className="min-w-[215px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">
                            {child.children.map((grandChild) => (
                              <Link
                                key={grandChild.to}
                                to={grandChild.to}
                                onClick={() => {
                                  setOpen(false);
                                  setSubOpen(null);
                                }}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-[#202124] hover:bg-[#E8EAF6] hover:text-[#363789]"
                              >
                                {grandChild.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={child.to}
                    to={child.to!}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#202124] hover:bg-[#E8EAF6] hover:text-[#363789]"
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleGroup = (key: string) => {
    setExpandedGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isNavActive = (item: NavItem) => {
    if (item.to === '/') return pathname === '/';
    if (item.label === "Sambhram's Corner") return pathname.startsWith('/sambhrams-corner');
    return pathname === item.to || pathname.startsWith(`${item.to}/`);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-slate-200 bg-white transition-shadow duration-200',
        isScrolled ? 'shadow-md' : 'shadow-none'
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left: Original Sambhram Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 focus-visible:rounded-lg"
          aria-label={`${collegeInfo.name} Home`}
        >
          <CollegeCrest size="sm" />
        </Link>

        {/* Center/Right: Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-0.5">
          {navigationItems.map((item) => (
            <DesktopDropdown key={item.label} item={item} isActive={isNavActive(item)} />
          ))}
        </nav>

        {/* Right: Mobile Menu */}
        <div className="flex items-center gap-2.5 shrink-0 xl:hidden">

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex xl:hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#363789] hover:bg-[#F5F6FA] cursor-pointer"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 bg-white">
                <CollegeCrest size="sm" />
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navigationItems.map((item) => {
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = Boolean(expandedGroups[item.label]);

                  if (!hasChildren) {
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          isNavActive(item)
                            ? 'bg-[#E8EAF6] text-[#363789] font-semibold'
                            : 'text-[#202124] hover:bg-[#F5F6FA]'
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="rounded-lg">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            'flex-1 rounded-lg px-3 py-2.5 text-sm font-medium',
                            isNavActive(item) ? 'text-[#363789] font-semibold' : 'text-[#202124]'
                          )}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleGroup(item.label)}
                          aria-expanded={isExpanded}
                          aria-label={`Expand ${item.label}`}
                          className="p-2.5 text-[#68778A] hover:text-[#363789] cursor-pointer"
                        >
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              isExpanded && 'rotate-180'
                            )}
                          />
                        </button>
                      </div>

                      {isExpanded && item.children && (
                        <div className="ml-3 border-l border-slate-200 pl-3 pb-2 space-y-1">
                          {item.children.map((child) => {
                            if (child.children) {
                              const subKey = `${item.label}-${child.label}`;
                              const subExpanded = Boolean(expandedGroups[subKey]);
                              return (
                                <div key={child.label}>
                                  <button
                                    type="button"
                                    onClick={() => toggleGroup(subKey)}
                                    aria-expanded={subExpanded}
                                    className="flex w-full items-center justify-between rounded-md px-2.5 py-2 text-xs font-semibold text-[#363789] hover:bg-[#F5F6FA] cursor-pointer"
                                  >
                                    <span>{child.label}</span>
                                    <ChevronDown
                                      className={cn(
                                        'h-3.5 w-3.5 transition-transform',
                                        subExpanded && 'rotate-180'
                                      )}
                                    />
                                  </button>
                                  {subExpanded && (
                                    <div className="ml-2.5 border-l border-slate-200 pl-2.5 space-y-1">
                                      {child.children.map((grand) => (
                                        <Link
                                          key={grand.to}
                                          to={grand.to}
                                          onClick={() => setMobileOpen(false)}
                                          className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-[#68778A] hover:text-[#363789]"
                                        >
                                          {grand.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            return (
                              <Link
                                key={child.to}
                                to={child.to!}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-[#68778A] hover:text-[#363789]"
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
