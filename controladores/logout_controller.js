const db  = require('../models');

async function logoutController(req, res, next) {
    try {
         const user = await User.findByPk(req.user.id);
          user.token = null;
         await user.save();
         res.json({message:'logout done'});
    } catch (error) {
        console.log('error', error)
        res.status(500).json({message: 'ups'})
    }
  }

  module.exports = logoutController;