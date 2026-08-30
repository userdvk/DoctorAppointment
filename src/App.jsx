import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout/MainLayout";
import { Homepage } from "./pages/Homepage/Homepage";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { AuthContext } from "./context/AuthContext";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { GuestRoute } from "./Routes/GuestRoute";
import { Loader } from "./components/ui/Loader/Loader";
import { Profile } from "./pages/Profile/Profile";
import { PersonalDetails } from "./pages/Profile/PersonalDetails/PersonalDetails";
import useGetUser from "./hooks/useGetUser";
import AppointmentDetailes from "./pages/AppointmentDetailes/AppointmentDetailes";

function App() {
  const [user, isLoading] = useGetUser();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={user}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/PersonalDetails" element={<PersonalDetails />} />
            <Route path="/doctor/:id" element={<AppointmentDetailes />} />
          </Route>

          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          <Route path="*" element={<>404</>} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
