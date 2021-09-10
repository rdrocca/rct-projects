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

  const removeTour = async (id) => {
    const newTours = toursList.filter((tour) => tour.id != id);
    setToursList(newTours);
  };

  useEffect(() => { fetchTours(); }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (toursList.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>

          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <main><Tours toursList={toursList} removeTour={removeTour} /></main>
}

export default App
