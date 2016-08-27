var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM tree",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};

exports.insert = function(req, res, next) {
  if (!req.body.treeName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: treeName'});
  }
  if (!req.body.scientificName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: scientificName'});
  }
  if (!req.body.familyName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: familyName'});
  }
  if (!req.body.conservationStatus) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: conservationStatus'});
  }
  if (!req.body.uses) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: uses'});
  }
  if (!req.body.seedType) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: seedType'});
  }
  if (!req.body.seedCount) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: seedCount'});
  }
  db.query("INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, uses, seedType, seedCount) VALUES(?, ?, ?, ?, ?, ?, ?)", [req.body.treeName, req.body.scientificName, req.body.familyName, req.body.conservationStatus, req.body.uses, req.body.seedType, req.body.seedCount], function(err, row) {
    if (err) return next(err);
    selectOne(row.tree_id, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'Tree ('+row.tree_id+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.findOneGivenTreeName = function(req, res, next) {
  db.query("SELECT * FROM tree WHERE treeName=?", [req.params.treeName], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'tree not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};

exports.update = function(req, res, next) {
  db.query("UPDATE tree SET treeName=? scientificName=? familyName=? conservationStatus=? uses=? seedType=? seedCount=? WHERE treeName=?", [req.body.treeName, req.body.scientificName, req.body.familyName, req.body.conservationStatus, req.body.uses, req.body.seedType, req.body.seedCount, req.params.treeName], function(err, rows) {
    if (err) return next(err);
    selectOne(req.params.treeName, function(updatedRow) {
      if (!updatedRow) {
        res.send(553, {message: 'tree ('+req.params.treeName+') was not updated.'});
      } else {
        res.send(updatedRow);
      }
    });
  });
};


exports.remove = function(req, res, next) {
  db.query("DELETE FROM tree WHERE treeName=?", [req.params.treeName], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'tree ('+req.params.treeName+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};