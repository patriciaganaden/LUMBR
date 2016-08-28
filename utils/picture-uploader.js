var db = require('./../lib/mysql');
/******************************************************
A function that enables picture uploading for
students
******************************************************/
exports.set = function (app, multer) {
	var newFilename;

	// sets destination and filename formats
	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, 'public/uploads')
	  },
	  filename: function (req, file, cb) {
	    var fileType = file.mimetype.split('/');
	    newFilename = "dp-"+Date.now() + '.' + fileType[1];
	    cb(null, newFilename);
	  }
	})

	var upload = multer({ storage: storage});

	app.post('/report-picture/:report_id', upload.single('file'), function(req, res, next){
			// updates current student to have proper filename in picture
	      db.query("UPDATE report SET reportImg = ? WHERE report_id = ?",
	          ["/uploads/"+newFilename, req.params.report_id],
	          function (err, rows) {
	              if(err) return next(err);
	              else if(rows.affectedRows === 0){
	                  res.status(404).send({message:'report is not found!'});
	                  console.log(req.files);
	                  res.end("File uploaded.");
	              }
	              else{
	                  res.status(200).send(rows);
	              }
	          });
	});
}
