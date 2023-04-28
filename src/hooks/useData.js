import { getDatabase, off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuth } from "./../contexts/AuthContext";
export default function useData(updatedData) {
  const { currentUser } = useAuth();
  const { uid } = currentUser || {};
  console.log(updatedData);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Set up Firebase listener when component mounts
    if (uid !== null) {
      setLoading(true);
      async function fetchDta() {
        const databaseRef = ref(getDatabase(), "Tasks/" + uid);
        await onValue(databaseRef, (snapshot) => {
          // Get data from snapshot
          const newData = snapshot.val();
          // Update component state with new data
          setData(newData);
        });

        // Clean up Firebase listener when component unmounts
        return () => {
          off(databaseRef);
        };
      }
      setLoading(false);
      fetchDta();
    }
  }, [uid]);
  return { loading, data };
}
