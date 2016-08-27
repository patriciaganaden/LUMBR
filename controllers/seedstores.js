var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM seedStores",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};

exports.insert = function(req, res, next) {
  if (!req.body.seedName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: seedName'});
  }
  if (!req.body.storeName) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: storeName'});
  }
  db.query("INSERT INTO seedStores(seedName, storeName) VALUES(?, ?)", [req.body.seedName, req.body.storeName], function(err, row) {
    if (err) return next(err);
    selectOne(row.seedStores_id, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'seedStores ('+row.seedStores_id+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.update = function(req, res, next) {
  db.query("UPDATE seedStores SET seedName=? storeName=? where seedStores_id=?", [req.body.seedName, req.body.storeName, req.params.seedStores_id], function(err, rows) {
    if (err) return next(err);
    selectOne(req.params.seedStores_id, function(updatedRow) {
      if (!updatedRow) {
        res.send(553, {message: 'seed store ('+req.params.seedStores_id+') was not updated.'});
      } else {
        res.send(updatedRow);
      }
    });
  });
};

exports.remove = function(req, res, next) {
  db.query("DELETE FROM seedStores WHERE seedStores_id=?", [req.params.seedStores_id], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'seedStores ('+req.params.seedStores_id+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};

var selectOne = function(seedStores_id, callback) {
  db.query("SELECT * FROM seedStores WHERE seedStores_id=? LIMIT 1", [seedStores_id], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      callback(null);
    } else {
      callback(rows[0]);
    }
  });
}