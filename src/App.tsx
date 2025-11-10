import { Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header";
import Home from "./pages/Home/Home";
import Summary from "./pages/Summary/Summary";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Plans from "./pages/Plans/Plans";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import Loader from "./components/Shared/Loader";

const AppContent = () => {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/plans"
          element={
            <ProtectedRoute>
              <Plans />
            </ProtectedRoute>
          }
        />
        <Route
          path="/summary"
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <UserProvider>
        <AppContent />
    </UserProvider>
    </LoadingProvider>
  );
}

export default App;
