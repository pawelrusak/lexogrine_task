import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

import AuthRoute from "@/utils/AuthRoute";
import AuthPage from "@/features/auth/AuthPage";
import PricingPage from "@/features/pricing/PricingPage";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AuthRoute redirectPath="/pricing" />}>
          <Route index element={<AuthPage />} />
        </Route>
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
