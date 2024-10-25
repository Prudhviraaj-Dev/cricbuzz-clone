
const playermodel = require('../models/player');

const creatplayer = async (req, res) => {
    try {
        const {
            imgURL,
            name,
            typeURL,
            playertype,
            age,
            style
        } = req.body;

        const player = new playermodel({
            imgURL,
            name,
            typeURL,
            playertype,
            age,
            style
        });

        await player.save();
        res.status(201).json(player);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getplayer = async (req, res) => {
    try {
        const players = await playermodel.find();
        res.status(200).json(players);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePlayer = async (req, res) => {
    try {
        const deleteplayer = await player.findByIdAndDelete(req.params.id)
        res.status(204).send

    } catch (error) {
        console.log("there is an error", error)
        res.status(500).json({ message: 'server error' })
    }
};

const editPlayer = async (req, res) => {
    try {
        const
            {
                imgURL,
                name,
                Score,
                Runrate,
                dob
            } = req.body

        const myplayer = await player.findByIdAndUpdate(
            req.params.id,
            {

                imgURL,
                name,
                Score,
                Runrate,
                dob
            })

        if (!myplayer) {
            res.status(404).json({ message: "record not found" })
        }
        res.status(200).json(myplayer)

    } catch (error) {
        console.log("there is an error", error)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = { creatplayer, getplayer, deletePlayer, editPlayer };
