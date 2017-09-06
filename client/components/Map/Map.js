import React from 'react';

import styles from './Map.css';

import InfoWindow from './InfoWindow';

const google = window.google;
const navigator = window.navigator;

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
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.setMapRef = this.setMapRef.bind(this);
    this.handlePolyClick = this.handlePolyClick.bind(this);
    this.requestSnapToRoads = this.requestSnapToRoads.bind(this);
  }

  componentDidMount() {
    this.initNavigator();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.mapRef) return;
    const points = Map.processSnappedPoints(nextProps.snappedPoints);
    this.drawPolylines(points);
  }

  componentWillUnmount() {
    this.mapRef = null;
    clearInterval(this.positionInterval);
  }

  /* eslint-disable */
  handlePolyClick(evt) {
    const win = new InfoWindow('Start');
    const windowPoint = {
      lat: evt.latLng.lat(),
      lng: evt.latLng.lng(),
    };
    const marker = new google.maps.Marker({
      position: windowPoint,
      map: this.map,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: win.content,
    });
    infoWindow.open(this.map, marker);
  }
  /* eslibt-enable */

  drawPolylines(snappedCoordinates) {
    const snappedPolyline = new google.maps.Polyline({
      path: snappedCoordinates,
      // 184, 185, 40
      strokeColor: 'rgba(182,53,157,0.9)',
      strokeWeight: 12,
    });

    snappedPolyline.setMap(this.map);
    snappedPolyline.addListener('click', this.handlePolyClick);

    this.polylines.push(snappedPolyline);
  }

  static processSnappedPoints(points) {
    const processed = [];

    for (let i = 0; i < points.length; i++) {
      const loc = new google.maps.LatLng(
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

  getMapRef() {
    return this.mapRef;
  }

  getMap() {
    return this.map;
  }

  initNavigator() {
    const me = this;

    this.positionInterval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!me.getMapRef()) return;

        me.addPosition(position);

        me.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }, () => {
          if (me.getMap()) return;

          me.initMap();
          me.addMarker(me.position(), '★');
        });
      });
    }, 2000);
  }

  initMap() {
    const me = this;
    this.map = new google.maps.Map(me.mapRef, {
      center: me.position(),
      zoom: 12,
      // styles: mapStylers.map.dark,
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
    const marker = new google.maps.Marker({
      position,
      label,
      animation: google.maps.Animation.DROP,
    });
    marker.setMap(this.map);
    this.markers.push(marker);
  }

  requestSnapToRoads() {
    const firstIndex = this.points.length > 100 ? this.points.length - 100 : 0;
    const points = this.points.slice(firstIndex, this.points.length);
    this.props.snapToRoads(points);
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
