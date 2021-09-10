import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [toursList, setToursList] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setLoading(false);
      setToursList(fetchedTours);

      console.log(fetchedTours);

    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  }

  useEffect(() => { fetchTours(); }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <main><Tours toursList={toursList} /></main>
}

export default App
