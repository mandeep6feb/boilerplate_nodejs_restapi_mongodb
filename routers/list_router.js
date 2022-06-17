let express = require('express')
const router = express.Router({mergeParams: true});
const ListController = require('../controller/listContoller');
router.post('/createList', ListController.createData)
router.get('/list', ListController.getData)
router.get('/list/:id',  ListController.getByData)
router.patch('/list/:id', ListController.updateData)
router.delete('/list', ListController.deleteData)
router.delete('/list/:id', ListController.deleteByIdData)

module.exports = router;