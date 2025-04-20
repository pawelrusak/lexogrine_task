import { Routes, Route } from "react-router";

import AuthPage from "@/features/auth/AuthPage";
import PricingPage from "@/features/pricing/PricingPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<AuthPage />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
};

export default App;
