import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useGetUser() {
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
  return [user, isLoading];
}
