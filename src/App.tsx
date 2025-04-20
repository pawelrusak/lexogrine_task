import { Routes, Route } from "react-router";

import AuthRoute from "@/utils/AuthRoute";
import AuthPage from "@/features/auth/AuthPage";
import PricingPage from "@/features/pricing/PricingPage";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute redirectPath="/pricing" />}>
        <Route index element={<AuthPage />} />
      </Route>
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
};

export default App;
