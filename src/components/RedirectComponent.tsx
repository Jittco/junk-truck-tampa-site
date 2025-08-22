import React, { useEffect } from 'react';

interface RedirectComponentProps {
  to: string;
}

const RedirectComponent: React.FC<RedirectComponentProps> = ({ to }) => {
  useEffect(() => {
    // Perform 301 redirect
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-anton mb-4">Redirecting...</h1>
        <p className="text-muted-foreground">
          This page has moved. You will be redirected to the new location shortly.
        </p>
      </div>
    </div>
  );
};

export default RedirectComponent;