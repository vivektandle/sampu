import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbNode {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbNode[];
  light?: boolean;
}

export function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
          light ? 'text-slate-200' : 'text-[#68778A]'
        }`}
      >
        <li className="inline-flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              light ? 'hover:text-white' : 'hover:text-[#363789]'
            }`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.label} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
            {item.to && idx < items.length - 1 ? (
              <Link
                to={item.to}
                className={`transition-colors ${
                  light ? 'hover:text-white' : 'hover:text-[#363789]'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  light
                    ? 'text-white font-semibold underline decoration-[#EC3237] decoration-2 underline-offset-4'
                    : 'text-[#363789] font-semibold'
                }
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
