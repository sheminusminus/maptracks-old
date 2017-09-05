import React from 'react';

import styles from './Map.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };
    this.mapRef = null;
    this.map = null;
    this.markers = [];
    this.positions = [];
    this.points = [];
    this.polylines = [];
    this.positionInterval = null;
    this.navigator = window.navigator;
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.setMapRef = this.setMapRef.bind(this);
    this.requestSnapToRoads = this.requestSnapToRoads.bind(this);
  }

  componentDidMount() {
    this.initNavigator();
  }

  componentWillReceiveProps(nextProps) {
    const points = Map.processSnappedPoints(nextProps.snappedPoints);
    this.drawPolylines(points);
  }

  componentWillUnmount() {
    clearInterval(this.positionInterval);
  }

  drawPolylines(snappedCoordinates) {
    const snappedPolyline = new window.google.maps.Polyline({
      path: snappedCoordinates,
      strokeColor: 'black',
      strokeWeight: 3,
    });

    snappedPolyline.setMap(this.map);
    snappedPolyline.addListener('click', (evt) => {
      console.log(evt);
    });
    this.polylines.push(snappedPolyline);
  }

  static processSnappedPoints(points) {
    const processed = [];

    for (let i = 0; i < points.length; i++) {
      const loc = new window.google.maps.LatLng(
        points[i].location.latitude,
        points[i].location.longitude,
      );

      processed.push(loc);
    }

    return processed;
  }

  position() {
    return {
      lat: this.state.lat,
      lng: this.state.lng,
    };
  }

  setMapRef(el) {
    this.mapRef = el;
  }

  initNavigator() {
    const me = this;
    this.positionInterval = setInterval(() => {
      me.navigator.geolocation.getCurrentPosition((position) => {
        me.addPosition(position);
        me.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }, () => {
          if (me.map) return;
          me.initMap();
          me.addMarker(me.position(), '★');
        });
      });
    }, 2000);
  }

  initMap() {
    const me = this;
    this.map = new window.google.maps.Map(me.mapRef, {
      center: me.position(),
      zoom: 14,
    });
  }

  addPosition(position) {
    const latestPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    const latestPoint = `${latestPosition.lat},${latestPosition.lng}`;

    this.setState({
      lat: latestPosition.lat,
      lng: latestPosition.lng,
    });

    this.positions.push(latestPosition);
    this.points.push(latestPoint);
  }

  addMarker(position, label) {
    const marker = new window.google.maps.Marker({
      position,
      label,
      animation: window.google.maps.Animation.DROP,
    });
    marker.setMap(this.map);
    this.markers.push(marker);
  }

  requestSnapToRoads() {
    this.props.snapToRoads(this.points);
  }

  render() {
    return (
      <div className={styles.mapWrapper}>
        <div
          id="main-map"
          className={styles.map}
          ref={ (el) => { this.setMapRef(el); } }>
          <span>{String.fromCharCode(8635)}</span> Loading Map...
        </div>
        <button
          onClick={this.requestSnapToRoads}
          className={styles.button}>Snap To Roads</button>
      </div>
    );
  }
}

export default Map;
