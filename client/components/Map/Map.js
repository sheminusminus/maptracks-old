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
    this.positionInterval = null;
    this.navigator = window.navigator;
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.setMapRef = this.setMapRef.bind(this);
  }

  componentDidMount() {
    this.initNavigator();
  }

  componentWillUnmount() {
    clearInterval(this.positionInterval);
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
      zoom: 12,
    });
  }

  addPosition(position) {
    const latest = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    this.setState({
      lat: latest.lat,
      lng: latest.lng,
    });

    this.positions.push(latest);

    if (this.positions.length % 4 === 0) {
      const index = this.positions.length - 1;
      this.addMarker(this.positions[index], `${index + 1}`);
    }
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

  render() {
    return (
      <div
        id="main-map"
        className={styles.map}
        ref={ (el) => { this.setMapRef(el); } }>
        Loading Map...
      </div>
    );
  }
}

export default Map;
