import { useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";

import { Header, Footer } from "@/components/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import BathroomRenovationsPage from "@/pages/BathroomRenovationsPage";
import TilingServicesPage from "@/pages/TilingServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import CostGuidePage from "@/pages/CostGuidePage";
import WetRoomPage from "@/pages/WetRoomPage";
import AccessibleBathroomPage from "@/pages/AccessibleBathroomPage";
import FloorWallTilingPage from "@/pages/FloorWallTilingPage";
import BathroomTilingPage from "@/pages/BathroomTilingPage";
import KitchenTilingPage from "@/pages/KitchenTilingPage";
import TileRepairsPage from "@/pages/TileRepairsPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import NotFound from "@/pages/not-found";
import { trackQuoteOpen } from "@/lib/analytics";

function AppLayout({ openQuote }: { openQuote: () => void }) {
  const HomePageWithProps = () => <HomePage openQuote={openQuote} />;
  const BathroomRenovationsPageWithProps = () => <BathroomRenovationsPage openQuote={openQuote} />;
  const TilingServicesPageWithProps = () => <TilingServicesPage openQuote={openQuote} />;
  const AboutPageWithProps = () => <AboutPage openQuote={openQuote} />;
  const CostGuidePageWithProps = () => <CostGuidePage openQuote={openQuote} />;
  const WetRoomPageWithProps = () => <WetRoomPage openQuote={openQuote} />;
  const AccessibleBathroomPageWithProps = () => <AccessibleBathroomPage openQuote={openQuote} />;
  const FloorWallTilingPageWithProps = () => <FloorWallTilingPage openQuote={openQuote} />;
  const BathroomTilingPageWithProps = () => <BathroomTilingPage openQuote={openQuote} />;
  const KitchenTilingPageWithProps = () => <KitchenTilingPage openQuote={openQuote} />;
  const TileRepairsPageWithProps = () => <TileRepairsPage openQuote={openQuote} />;

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <ScrollToTop />
      <Header openQuote={openQuote} />
      <Switch>
        <Route path="/" component={HomePageWithProps} />
        <Route path="/services/bathroom-renovations" component={BathroomRenovationsPageWithProps} />
        <Route path="/services/tiling-services" component={TilingServicesPageWithProps} />
        <Route path="/cost-guide" component={CostGuidePageWithProps} />
        <Route path="/services/wet-room-installation-dublin" component={WetRoomPageWithProps} />
        <Route path="/services/accessible-bathroom-dublin" component={AccessibleBathroomPageWithProps} />
        <Route path="/services/floor-wall-tiling-dublin" component={FloorWallTilingPageWithProps} />
        <Route path="/services/bathroom-tiling-dublin" component={BathroomTilingPageWithProps} />
        <Route path="/services/kitchen-tiling-dublin" component={KitchenTilingPageWithProps} />
        <Route path="/services/tile-repairs-dublin" component={TileRepairsPageWithProps} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms" component={TermsPage} />
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
  const openQuote = () => {
    trackQuoteOpen();
    setQuoteModalOpen(true);
  };

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
