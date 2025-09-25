import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEODashboard from '../components/SEODashboard';

const SEODashboardPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SEO Dashboard | Junk in the Truck Co</title>
        <meta name="description" content="Monitor and optimize your website's search engine performance with our comprehensive SEO dashboard." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-background">
        <SEODashboard />
      </main>
      <Footer />
    </>
  );
};

export default SEODashboardPage;