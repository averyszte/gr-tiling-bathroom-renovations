import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Header, Footer } from "@/components/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ThankYouPage from "@/pages/ThankYouPage";
import PlaceholderPage from "@/pages/PlaceholderPage";
import BathroomRenovationsPage from "@/pages/BathroomRenovationsPage";
import TilingServicesPage from "@/pages/TilingServicesPage";
import AboutPage from "@/pages/AboutPage";

const queryClient = new QueryClient();

function AppLayout({ openQuote }: { openQuote: () => void }) {
  const HomePageWithProps = () => <HomePage openQuote={openQuote} />;
  const BathroomRenovationsPageWithProps = () => <BathroomRenovationsPage openQuote={openQuote} />;
  const TilingServicesPageWithProps = () => <TilingServicesPage openQuote={openQuote} />;
  const AboutPageWithProps = () => <AboutPage openQuote={openQuote} />;
  const ContactPage = () => <PlaceholderPage title="Contact" />;

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      <Header openQuote={openQuote} />
      <Switch>
        <Route path="/" component={HomePageWithProps} />
        <Route path="/services/bathroom-renovations" component={BathroomRenovationsPageWithProps} />
        <Route path="/services/tiling-services" component={TilingServicesPageWithProps} />
        <Route path="/about" component={AboutPageWithProps} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/thank-you" component={ThankYouPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const openQuote = () => setQuoteModalOpen(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppLayout openQuote={openQuote} />
        </WouterRouter>
        <Toaster />
        <QuoteModal isOpen={quoteModalOpen} setIsOpen={setQuoteModalOpen} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
