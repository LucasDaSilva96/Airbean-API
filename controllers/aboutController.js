const aboutJSON = require('../data/about.json');

// gets about page data
exports.sendAboutInfo = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'About successfully fetched',
      data: aboutJSON,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
