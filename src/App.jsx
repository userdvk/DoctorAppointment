import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Homepage } from "./pages/Homepage/Homepage";
import { useEffect, useState } from "react";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { AuthContext } from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { GuestRoute } from "./components/Routes/GuestRoute";
import { Loader } from "./components/Loader/Loader";
import { Profile } from "./pages/Profile/Profile";
import { PersonalDetails } from "./pages/Profile/PersonalDetails/PersonalDetails";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged фукция для получения юзера
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const DocRef = doc(db, "users", currentUser.uid); // Получаем базу данных и юзера в ней
        const docSnap = await getDoc(DocRef); // Получаем базу данных и юзера в ней

        // 2. Объединяем объект из Firebase Auth и данные из базы
        if (docSnap.exists()) {
          setUser({
            ...currentUser,
            ...docSnap.data(),
          });
        }
      }
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/PersonalDetails" element={<PersonalDetails />} />
            </Route>

            <Route element={<GuestRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
