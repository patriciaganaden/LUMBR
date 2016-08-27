var db = require(__dirname + '/../lib/mysql');

exports.find = function(req,res,next){
  db.query("SELECT * FROM report",
    function(err,rows){
      if(err) return next(err);
      res.send(rows);
    });
};

exports.insert = function(req, res, next) {
  if (!req.body.employerUname) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: employerUname'});
  }
  if (!req.body.employeeUname) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: employeeUname'});
  }
  if (!req.body.reportTxt) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: reportTxt'});
  }
  if (!req.body.reportImg) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: reportImg'});
  }
  if (!req.body.dateReported) {
    return res.send(451, {'error': true, 'message': 'Missing parameter: dateReported'});
  }
  db.query("INSERT INTO report(employerUname, employeeUname, reportTxt, reportImg, dateReported) VALUES(?, ?, ?, ?, ?)", [req.body.employerUname, req.body.employeeUname, req.body.reportTxt, req.body.reportImg, req.body.dateReported], function(err, row) {
    if (err) return next(err);
    selectOne(row.report_id, function(newRow) {
      if (!newRow) {
        res.send(552, {message: 'report ('+row.report_id+') was not created.'});
      } else {
        res.send(newRow);
      }
    });
  });
};

exports.findSome = function(req, res, next) {
  db.query("SELECT * FROM report LEFT JOIN (plantedTree) ON (plantedTree.treeName=report.treeName ) where plantedTree_id = ?", [req.params.plantedTree_id], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'report not found.'});
    } else {
      res.send(rows);
    }
  });
};

exports.findGivenEmployerUname = function(req, res, next) {
  db.query("SELECT * FROM report WHERE employerUname=?", [req.params.employerUname], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'report not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};


exports.findGivenEmployeeUname = function(req, res, next) {
  db.query("SELECT * FROM report WHERE employeeUname=?", [req.params.employeeUname], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'report not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};

exports.findGivenTreeName = function(req, res, next) {
  db.query("SELECT * FROM report WHERE treeName=?", [req.params.treeName], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      res.send(404, {message: 'report not found.'});
    } else {
      res.send(rows[0]);
    }
  });
};

exports.remove = function(req, res, next) {
  db.query("DELETE FROM report WHERE report_id=?", [req.params.report_id], function(err, row) {
    if (err) return next(err);
    if (row.affectedRows === 0) {
      res.send(554, {message: 'report ('+req.params.report_id+') was not removed.'});
    } else {
      res.send(202, row);
    }
    
  });
};

var selectOne = function(report_id, callback) {
  db.query("SELECT * FROM report WHERE report_id=? LIMIT 1", [report_id], function(err, rows) {
    if (err) return next(err);
    if (rows.length === 0) {
      callback(null);
    } else {
      callback(rows[0]);
    }
  });
}