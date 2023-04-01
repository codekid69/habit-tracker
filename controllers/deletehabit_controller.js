const Habit = require('../model/habit');

module.exports.delete = async function (req, res) {
  let id = req.query.id;
  const taskDOne= await Habit.findByIdAndDelete(id);
  if (taskDOne) {
    return res.redirect('back');
  }else{
    console.log('Error in deleteing habit');
    return res.redirect('back');
  }
};
