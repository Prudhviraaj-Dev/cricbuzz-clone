const Season = require('../models/pointTable');

// Insert new season data
exports.insertSeasonData = async (req, res) => {
  try {
    const season = new Season(req.body);
    await season.save();
    res.status(201).json({ message: 'Data inserted successfully', season });
  } catch (error) {
    res.status(400).json({ message: 'Error inserting data', error });
  }
};

// Get season data by year
exports.getSeasonByYear = async (req, res) => {
  try {
    const year = req.params.year;
    const seasonData = await Season.findOne({ year: year });

    if (!seasonData) {
      return res.status(404).json({ message: 'Season not found' });
    }

    res.status(200).json(seasonData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
};
