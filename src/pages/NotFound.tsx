import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Junk in the Truck Co.</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <main className="min-h-dvh flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Oops! The page you're looking for doesn't exist.</p>
          <a href="/" className="text-primary hover:text-primary/80 underline font-medium">
            Return to Home
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
