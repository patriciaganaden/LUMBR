var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM plantedTree",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};

exports.insert = function(req, res, next) {
  if (!req.body.treeName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: treeName'});
  }
  if (!req.body.owner) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: owner'});
  }
  if (!req.body.plantedBy) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: plantedBy'});
  }
  if (!req.body.datePlanted) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: datePlanted'});
  }
  if (!req.body.status) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: status'});
  }
  db.query("INSERT INTO plantedTree(treeName, owner, plantedBy, datePlanted, status) VALUES(?, ?, ?, ?, ?)", [req.body.treeName, req.body.owner, req.body.plantedBy, req.body.datePlanted, req.body.status], function(err, row) {
    if (err) return next(err);
    selectOne(row.plantedtree_id, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'planted tree ('+row.plantedtree_id+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.findOne = function(req, res, next) {
  db.query("SELECT * FROM plantedTree LEFT JOIN (tree, user) ON (tree.treeName=plantedTree.treeName AND user.username=plantedTree.plantedBy) where plantedTree_id = ?", [req.params.plantedTree_id], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'planted tree not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};

exports.findGivenTreeName = function(req, res, next) {
  db.query("SELECT * FROM plantedTree WHERE treeName=?", [req.params.treeName], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'planted tree not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};


exports.findGivenOwner = function(req, res, next) {
  db.query("SELECT * FROM plantedTree WHERE owner=?", [req.params.owner], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'planted tree not found.'});
    } else {
      res.send(rows);
    }
  });
};

exports.findGivenPlantedBy = function(req, res, next) {
  db.query("SELECT * FROM plantedTree WHERE plantedBy=?", [req.params.plantedBy], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'planted tree not found.'});
    } else {
      res.send(rows);
    }
  });
};

exports.update = function(req, res, next) {
  db.query("UPDATE plantedTree SET treeName=? owner=? plantedBy=? datePlanted=? status where plantedtree_id=?", [req.body.treeName, req.body.scientificName, req.body.familyName, req.body.conservationStatus, req.body.uses, req.body.seedType, req.body.seedCount, req.params.plantedtree_id], function(err, rows) {
    if (err) return next(err);
    selectOne(req.params.plantedtree_id, function(updatedRow) {
      if (!updatedRow) {
        res.send(553, {message: 'tree ('+req.params.plantedtree_id+') was not updated.'});
      } else {
        res.send(updatedRow);
      }
    });
  });
};

exports.remove = function(req, res, next) {
  db.query("DELETE FROM plantedTree WHERE plantedtree_id=?", [req.params.plantedtree_id], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'planted tree ('+req.params.plantedtree_id+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};

var selectOne = function(plantedtree_id, callback) {
  db.query("SELECT * FROM plantedTree WHERE plantedtree_id=? LIMIT 1", [plantedtree_id], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      callback(null);
    } else {
      callback(rows[0]);
    }
  });
}