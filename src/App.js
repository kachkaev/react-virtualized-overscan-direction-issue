import React, { Component } from 'react';
import { Grid, AutoSizer } from 'react-virtualized'; 
import { Map, TileLayer } from 'react-leaflet'; 
import Vega from 'react-vega';

import 'leaflet/dist/leaflet.css';
import './App.css';

import barChartSpec from './barChartSpec.js';

const cellWidth = 500;
const cellHeight = 500;

const columnCount = 100;
const rowCount = 100;

class App extends Component {
  cellRenderer = ({style, key, columnIndex, rowIndex}) => {
    if ((columnIndex + rowIndex) % 2) {
      return (
        <Map
          key={key}
          zoomBehaviour={false}
          zoomControl={false}
          scrollWheelZoom={false}
          boxZoom={false}
          center={[51.505, -0.09]}
          zoom={13}
          style={{
            ...style,
            background: 'red',
            width: cellWidth - 20,
            height: cellHeight - 20,
          }}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      );
    }
    return (<Vega
      key={key}
      style={{
        ...style,
        background: 'black',
        width: cellWidth - 20,
        height: cellHeight - 20,
      }}
      spec={barChartSpec}
    />);
  }

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
