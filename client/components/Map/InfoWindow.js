function InfoWindow(title) {
  const startStyles = 'border: 0; background-color: salmon; color: white; width: 100px; height: 30px;';
  const endStyles = 'border: 0; background-color: teal; color: white; width: 100px; height: 30px;';

  this.content = `
    <div id="content">
      <h1>Waypoint</h1>
      <div id="bodyContent">
        <button style="${startStyles}">Start</button>
        <button style="${endStyles}">End</button>
      </div>
    </div>
  `;
  return this;
}

export default InfoWindow;
