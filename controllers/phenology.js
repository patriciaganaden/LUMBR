var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM phenology",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};


exports.findOne = function(req, res, next) {
  db.query("SELECT * FROM phenology WHERE treeName=?", [req.params.treeName], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'phenology not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};

exports.insert = function(req, res, next) {
  if (!req.body.treeName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: treeName'});
  }
  if (!req.body.flowering) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: flowering'});
  }
  if (!req.body.fruiting) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: fruiting'});
  }
  if (!req.body.maturity) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: maturity'});
  }
  if (!req.body.collection) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: collection'});
  }
  db.query("INSERT INTO phenology(treeName, flowering, fruiting, maturity, collection) VALUES(?, ?, ?, ?, ?)", [req.body.treeName, req.body.flowering, req.body.fruiting, req.body.maturity, req.body.collection], function(err, row) {
    if (err) return next(err);
    selectOne(row.treeName, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'phenology for ('+row.treeName+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.update = function(req, res, next) {
  db.query("UPDATE phenology SET treeName=? flowering=? fruiting=? maturity=? collection=? WHERE treeName=?", [req.body.treeName, req.body.flowering, req.body.fruiting, req.body.maturity, req.body.collection, req.params.treeName], function(err, rows) {
    if (err) return next(err);
    selectOne(req.params.treeName, function(updatedRow) {
      if (!updatedRow) {
        res.send(553, {message: 'phenology for ('+req.params.treeName+') was not updated.'});
      } else {
        res.send(updatedRow);
      }
    });
  });
};


exports.remove = function(req, res, next) {
  db.query("DELETE FROM phenology WHERE treeName=?", [req.params.treeName], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'phenology for ('+req.params.treeName+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};

var selectOne = function(treeName, callback) {
  db.query("SELECT * FROM phenology WHERE treeName=? LIMIT 1", [treeName], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      callback(null);
    } else {
      callback(rows[0]);
    }
  });
}