
const List = require('../modals/list');
module.exports  = {
    getData: async (req, res) => {
        try {
            var result = await List.find().exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    getByData: async (req, res) => {
        try {
            var result = await List.findById(req.params.id).exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    createData: async (req, res) => {
        try {
            var list = new List(req.body);
            var result = await list.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    updateData: async (req, res) => {
        try {
            var list = await List.findById(req.params.id).exec();
            list.set(req.body);
            var result = await List.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteData: async (req, res) => {
        try {
            var result = await List.deleteMany().exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    deleteByIdData: async (req, res) => {
        try {
            var result = await List.deleteOne({ _id: req.params.id }).exec();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
