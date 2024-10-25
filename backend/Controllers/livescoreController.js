const liveScore = require('../models/liveScore');
const LiveScoreModel = require('../models/liveScore');

const creatlivescore = async (req, res) => {
    try {
        const {
            match,
            venue,
            team1,
            score1,
            team2,
            score2,
            toss,
            result
        } = req.body;

        const liveScore = new LiveScoreModel({
            match,
            venue,
            team1,
            score1,
            team2,
            score2,
            toss,
            result
        });
        
        await liveScore.save();
        res.status(201).json(liveScore);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getlivescore = async (req, res) => {
    try {
        const liveScores = await LiveScoreModel.find();
        res.status(200).json(liveScores);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteLiveScore = async (req, res) =>{
    try{
        const deletelivescore = await liveScore.findByIdAndDelete(req.params.id)
        res.status(204).send

    }catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
};

const editLiveScore = async (req, res) =>{
    try{
        const {match,
            venue,
            team1,
            score1,
            team2,
            score2,
            toss,
            result } = req.body

        const mylivescore = await liveScore.findByIdAndUpdate(
            req.params.id,
            {
                match,
            venue,
            team1,
            score1,
            team2,
            score2,
            toss,
            result })

        if(!mylivescore){
            res.status(404).json({message: "record not found"})
        }
        res.status(200).json(mylivescore)

    }catch(error){
        console.log("there is an error", error)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = { creatlivescore, getlivescore,deleteLiveScore,editLiveScore };
