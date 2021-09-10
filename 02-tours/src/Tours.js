import React from 'react';
import Tour from './Tour';
const Tours = ({ toursList, removeTour }) => {
  return <section>
    <div className='title'>
      <h2>
        our tours
      </h2>
      <div className='underline' />
    </div>
    <div>
      {toursList.map((tour) =>
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      )}
    </div>
  </section>;
}

export default Tours;
