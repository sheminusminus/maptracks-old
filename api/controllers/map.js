import axios from 'axios';

class MapController {
  static async getSnapped(pathValues) {
    const key = process.env.MAPS_API_KEY;

    const response = await axios({
      method: 'GET',
      url: 'https://roads.googleapis.com/v1/snapToRoads',
      params: {
        path: pathValues.join('|'),
        key,
      },
    });
  }
}

export default MapController;
