import React, { Component } from 'react';
import { Grid, AutoSizer } from 'react-virtualized'; 
import { Map, TileLayer, Marker } from 'react-leaflet'; 

import 'leaflet/dist/leaflet.css';
import './App.css';

const cellWidth = 500;
const cellHeight = 500;

const columnCount = 100;
const rowCount = 100;

const position = [51.505, -0.09];
const Cell = ({style}) => (
  <div style={style}>
    <Map
      zoomBehaviour={false}
      zoomControl={false}
      scrollWheelZoom={false}
      boxZoom={false}
      center={position}
      zoom={13}
      style={{
        background: 'red',
        position: 'absolute',
        width: cellWidth - 20,
        height: cellHeight - 20,
      }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  </div>
);

class App extends Component {
  cellRenderer = ({style, key, columnIndex, rowIndex}) => <Cell key={key} tileRandomness={key} style={style} />;

  render() {
    return (
      <div className="App">
        <AutoSizer>
          {({width, height}) => (
            <Grid
              cellRenderer={this.cellRenderer}
              columnWidth={cellWidth}
              columnCount={columnCount}
              height={height}
              overscanColumnCount={2}
              overscanRowCount={2}
              // reverseOverscanColumnCount={2}
              // reverseOverscanRowCount={2}
              rowHeight={cellHeight}
              rowCount={rowCount}
              width={width}
            />
          )}
      </AutoSizer>
      </div>
    );
  }
}

export default App;
