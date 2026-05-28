import { lazy, Suspense, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";

import { Header, Footer } from "@/components/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { ScrollToTop } from "@/components/ScrollToTop";

const HomePage = lazy(() => import("@/pages/HomePage"));
const BathroomRenovationsPage = lazy(() => import("@/pages/BathroomRenovationsPage"));
const TilingServicesPage = lazy(() => import("@/pages/TilingServicesPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ThankYouPage = lazy(() => import("@/pages/ThankYouPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function AppLayout({ openQuote }: { openQuote: () => void }) {
  const HomePageWithProps = () => <HomePage openQuote={openQuote} />;
  const BathroomRenovationsPageWithProps = () => <BathroomRenovationsPage openQuote={openQuote} />;
  const TilingServicesPageWithProps = () => <TilingServicesPage openQuote={openQuote} />;
  const AboutPageWithProps = () => <AboutPage openQuote={openQuote} />;

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      <Header openQuote={openQuote} />
      <Suspense fallback={<div className="flex-1" />}>
        <Switch>
          <Route path="/" component={HomePageWithProps} />
          <Route path="/services/bathroom-renovations" component={BathroomRenovationsPageWithProps} />
          <Route path="/services/tiling-services" component={TilingServicesPageWithProps} />
          <Route path="/about" component={AboutPageWithProps} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/thank-you" component={ThankYouPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const openQuote = () => setQuoteModalOpen(true);

  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppLayout openQuote={openQuote} />
      </WouterRouter>
      <Toaster />
      <QuoteModal isOpen={quoteModalOpen} setIsOpen={setQuoteModalOpen} />
    </>
  );
}

export default App;
