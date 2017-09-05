import { FirebaseService } from '../services';

class FirebaseController {
  static getConfig(req, res, next) {
    const config = FirebaseService.getConfig();

    res.json({ data: config });
  }
}

export default FirebaseController;
