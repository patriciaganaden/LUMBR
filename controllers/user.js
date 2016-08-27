var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM user",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};

exports.insert = function(req, res, next) {
  if (!req.body.username) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: username'});
  }
  if (!req.body.password) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: password'});
  }
  if (!req.body.fullname) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: fullname'});
  }
  if (!req.body.email) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: email'});
  }
  if (!req.body.cpNumber) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: cpNumber'});
  }
  if (!req.body.type) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: type'});
  }
  db.query("INSERT INTO user(username, password, fullname, email, cpNumber, type) VALUES(?, ?, ?, ?, ?, ?)", [req.body.username, req.body.password, req.body.fullname, req.body.email, req.body.cpNumber, req.body.type], function(err, row) {
    if (err) return next(err);
    selectOne(row.username, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'user ('+row.username+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.findOne = function(req, res, next) {
  db.query("SELECT * FROM user WHERE username=?", [req.params.username], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'user not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};


exports.update = function(req, res, next) {
  db.query("UPDATE user SET username=? password=? fullname=? email=? cpNumber=? type=? WHERE username=?", [req.body.username, req.body.password, req.body.fullname, req.body.email, req.body.cpNumber, req.body.type, req.params.username], function(err, rows) {
    if (err) return next(err);
    selectOne(req.params.username, function(updatedRow) {
      if (!updatedRow) {
        res.send(553, {message: 'user ('+req.params.username+') was not updated.'});
      } else {
        res.send(updatedRow);
      }
    });
  });
};


exports.remove = function(req, res, next) {
  db.query("DELETE FROM user WHERE username=?", [req.params.username], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'user ('+req.params.username+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};

var selectOne = function(username, callback) {
  db.query("SELECT * FROM user WHERE username=? LIMIT 1", [username], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      callback(null);
    } else {
      callback(rows[0]);
    }
  });
}