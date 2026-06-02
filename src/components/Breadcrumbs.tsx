// Reusable visible breadcrumb nav + JSON-LD schema in one component.
// Use on standalone pages that don't go through the templated detail/area views.
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import BreadcrumbSchema, { Crumb } from "./BreadcrumbSchema";

interface BreadcrumbsProps {
  items: Crumb[];
  /** Add top padding to clear the fixed nav. Default true. */
  withTopPadding?: boolean;
  className?: string;
}

const Breadcrumbs = ({ items, withTopPadding = true, className }: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
        aria-label="Breadcrumb"
        className={`${withTopPadding ? "pt-32" : "pt-6"} pb-4 bg-muted/30 ${className ?? ""}`}
      >
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            {items.map((c, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={`${c.url}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  {isLast ? (
                    <span className="text-foreground font-medium" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link to={c.url} className="hover:text-primary transition-colors">
                      {c.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
