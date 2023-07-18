import { collection, DocumentData, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from "../../Database/FirebaseCon";


const Schedule = () => {
  const [fag, setFag] = useState<DocumentData[]>([]);
  

  useEffect(
    () =>
     onSnapshot(collection(db, "Fag"), (snapshot) =>
       setFag(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  return (
    <div className="root">
      <ul>
        {fag.map(fag =>(
          <li>
            {fag.navn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
