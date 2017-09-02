import axios from 'axios';

class MapController {

  static async getSnapped(pathValues) {
    const response = await axios({
      method: 'GET',
      url: 'https://roads.googleapis.com/v1/snapToRoads',
      params: {
        path: pathValues.join('|'),
        key: 'AIzaSyBz-JfaschRFGIIACdWGyVkQRsk72a0xeY',
      },
    });
  }

}

export default MapController;
