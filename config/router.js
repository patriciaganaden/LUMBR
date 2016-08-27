var tree = require('./../controllers/tree');
var phenology = require('./../controllers/phenology');
var user = require('./../controllers/user');
var plantedTree = require('./../controllers/plantedtree');
var report = require('./../controllers/report');
var seedStores = require('./../controllers/seedstores');

module.exports = function(router){

	/** TREES ***/

	router.route('/trees')
	.post(tree.insert)
	.get(tree.find);
	
	router.route('/trees/:treeName')
	.get(tree.findOneGivenTreeName)
	.put(tree.update)
	.delete(tree.remove);

	/** PHENOLOGY **/

	router.route('/phenology')
	.get(phenology.find)
	.post(phenology.insert);

	router.route('/phenology/:treeName')
	.get(phenology.findOne)
	.put(phenology.update)
	.delete(phenology.remove);

	/** USER **/

	router.route('/user')
	.get(user.find)
	.post(user.insert);

	router.route('/user/:username')
	.get(user.findOne)
	.put(user.update)
	.delete(user.remove);

	/** PLANTED TREE **/

	router.route('/plantedTree')
	.get(plantedTree.find)
	.post(plantedTree.insert);

	router.route('/plantedTree/:plantedtree_id')
	.put(plantedTree.update)
	.delete(plantedTree.remove);

	router.route('/plantedTree/byTreeName/:treeName')
	.get(plantedTree.findGivenTreeName);

	router.route('/plantedTree/byOwner/:owner')
	.get(plantedTree.findGivenOwner);

	router.route('/plantedTree/byPlantedBy/:plantedBy')
	.get(plantedTree.findGivenPlantedBy);

	/** REPORT **/

	router.route('/report')
	.get(report.find)
	.post(report.insert);

	router.route('/report/byEmployerName/:employerUname')
	.get(report.findGivenEmployerUname);

	router.route('/report/byEmployeeName/:employeeUname')
	.get(report.findGivenEmployeeUname);

	router.route('/report/:report_id')
	.delete(report.remove);

	/** SEED STORES **/

	router.route('/seedStores')
	.get(seedStores.find)
	.post(seedStores.insert);

	router.route('/seedStores/:')
	.put(seedStores.update)
	.delete(seedStores.remove);

	return router;
};