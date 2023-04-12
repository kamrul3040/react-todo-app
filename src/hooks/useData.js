import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
} from "firebase/database";
import { useEffect, useState } from "react";
import { useAuth } from './../contexts/AuthContext';
export default function useData() {
  const { currentUser } = useAuth();
  const { uid } = currentUser||{};
  // console.log(uid);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchtasks() {
      //database rellated work
      const db = getDatabase();
      const taskRef = ref(db, "Tasks/" + uid);
      const taskQuery = query(
        taskRef,
        orderByKey(),
      );

      //request firebase database
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(taskQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setTasks((prevtasks) => {
            return [...prevtasks, ...Object.values(snapshot.val())];
          });
        } 
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchtasks();
  }, [uid]);
  return { loading, error, tasks };
}
