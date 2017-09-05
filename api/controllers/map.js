import axios from 'axios';

class MapController {
  static attachMapsData(req, res, next) {
    const apiKey = process.env.MAPS_API_KEY;
    const serverKey = process.env.MAPS_SERVER_KEY;

    req.mapsData = {
      apiKey,
      serverKey,
    };

    next();
  }

  static async getSnapped(req, res, next) {
    const values = req.query.pathValues ||
      ['-35.27801,149.12958', '-35.28302,149.12881'];

    try {
      const response = await axios({
        method: 'GET',
        url: 'https://roads.googleapis.com/v1/snapToRoads',
        params: {
          path: values.join('|'),
          key: req.mapsData.apiKey,
        },
      });

      res.json(response.data);
    } catch (error) {
      console.log(error.response);

      res.json({ message: 'Error' });
    }
  }
}

export default MapController;
