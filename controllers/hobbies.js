var Hobby = require('../models/hobby');

module.exports = {
   show,
   create: createHobby,
   delete: deleteHobby,
   update
};

function show(req, res) {
   Hobby.findById(req.params.id, function(err, hobby) {
      res.render('hobbies/show', { title: 'Hobby Details Page', hobby });
    })
};

function createHobby(req, res) {
   Hobby.create(req.body)
   .then(res.redirect('/'));
};

function deleteHobby(req, res) {
   Hobby.findByIdAndDelete(req.params.id, function(err, hobby) {
      res.redirect('/');
   })
};

function update(req, res) {
   Hobby.findByIdAndUpdate(req.params.id, req.body, (err, hobby) => {
      res.redirect(`/hobbies/${req.params.id}`)
   })
};