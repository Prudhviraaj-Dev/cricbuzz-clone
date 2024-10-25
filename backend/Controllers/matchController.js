const matche = require('../models/matche');
const matchModel = require('../models/matche');

const creatmatch = async (req, res) => {
    try {
        const {
            flag1,
            team1,
            flag2,
            team2,
            stadium,
            place,
            date,
            time
        } = req.body;

        const match = new matchModel({
            flag1,
            team1,
            flag2,
            team2,
            stadium,
            place,
            date,
            time
        });

        await match.save();
        res.status(201).json(match);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getmatches = async (req, res) => {
    try {
        const matches = await matchModel.find();
        res.status(200).json(matches);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteMatch = async (req, res) => {
    try {
        const deletelivescore = await matche.findByIdAndDelete(req.params.id)
        res.status(204).send

    } catch (error) {
        console.log("there is an error", error)
        res.status(500).json({ message: 'server error' })
    }
};

const editmatch = async (req, res) => {
    try {
        const {
            flag1,
            team1,
            flag2,
            team2,
            stadium,
            place,
            date,
            time
    } = req.body

    const mymatche = await matche.findByIdAndUpdate(
        req.params.id,
        {
            flag1,
            team1,
            flag2,
            team2,
            stadium,
            place,
            date,
            time
        })

    if (!mymatche) {
        res.status(404).json({ message: "record not found" })
    }
    res.status(200).json(mymatche)

} catch (error) {
    console.log("there is an error", error)
    res.status(500).json({ message: 'server error' })
}
}

module.exports = { creatmatch, getmatches, deleteMatch, editmatch };
