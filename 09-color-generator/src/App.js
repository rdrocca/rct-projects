import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f01234').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };
  // console.log(color);

  return (
    <main>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f01234"
            className={`${error ? 'error' : null}`}
          />
          <button type="submit" className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map(
          (colorInsideList, index) => {
            //console.log(colorInsideList)
            return <SingleColor key={index} {...colorInsideList} index={index} hexColor={colorInsideList.hex} />
          }
        )}
      </section>
    </main>
  );
}

export default App
