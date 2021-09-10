import React from 'react';
import Tour from './Tour';
const Tours = ({ toursList }) => {
  return <section>
    <div className='title'>
      <h2>
        our tours
      </h2>
      <div className='underline' />
    </div>
    <div>
      {toursList.map((tour) =>
        <Tour key={tour.id} {...tour} />
      )}
    </div>
  </section>;
}

export default Tours;
