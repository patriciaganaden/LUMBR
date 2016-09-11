USE foresthackDB;

DELETE FROM tree;
DELETE FROM phenology;
DELETE FROM user;
DELETE FROM plantedTree;
DELETE FROM report;

ALTER TABLE tree AUTO_INCREMENT = 1;

INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Akle", "Albizia acle", "Fabaceae", "NA", "gunstock, carving, sculpture, and musical instruments", "Orthodox", 597, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Almaciga", "Agathis philippinensis", "Araucariaceae", "NA", "resin from bark", "Recalcitrant", 0, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Almon", "Shorea almon", "Dipterocarpaceae", "Vulnerable", "plywood and furniture", "Recalcitrant", 660, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Amugis", "Koordersiodendron pinnatum", "Anacardiaceae", "Vulnerable", "flooring, construction, furniture, and cabinet work", "Recalcitrant", 430, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Apitong", "Dipterocarpus grandiflorus", "Dipterocarpaceae", "NA", "resin from bark", "Recalcitrant", 93, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Bagalunga", "Melia azedarach", "Meliaceae", "NA", "plywood, construction, furniture, lumber, and paneling", "Orthodox", 4162, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Bagtikan", "Parashorea malaanonan", "Dipterocarpaceae", "Critically Endangered", "construction, cabinet and furniture making, finishing, veneer, plywood, and particleboard", "Recalcitrant", 503, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Balakat gubat", "Balakata luzonica", "Euphorbiaceae", "Vulnerable", "plywood, particle board", "NA", 0, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Batino", "Alstonia macrophylla", "Sapotaceae", "NA", "furniture, splints, boxes, matches, and local medicine", "Orthodox", 365000, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Bitaog", "Calophyllum inophyllum", "Clusiaceae", "NA", "medicinal", "Orthodox/Intermediate", 210, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Dao", "Dracontomelon dao", "Anacardiaceae", "Vulnerable", "furniture, interior finishing, paneling, and cabinet work", "Orthodox", 1525, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Dita", "Alstonia scholaris", "Apocynaceae", "NA", "pulp", "Orthodox", 370000, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Igyo", "Dysoxylum gaudichaudianum", "Meliaceae", "NA", "light construction", "Intermediate", 1536, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Ipil", "Instia bijuga", "Fabaceae", "Endangered", "general purpose timber", "Orthodox", 184, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Kalantas", "Toona calantas", "Meliaceae", "Critically Endangered", "furniture, plywood, musical instruments", "Intermediate", 0, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Kamagong", "Diospyros blancoi", "Ebenaceae", "Critically Endangered", "furniture and carving and other handicraft", "Orthodox", 238, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Malapapaya", "Polyscias nodosa", "Araliaceae", "NA", "chopsticks, matchsticks", "Orthodox", 220000, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Molave", "Vitex parviflora", "Lamiaceae", "Endangered", "house building, ship building, and carving", "Orthodox", 8594, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Narra (Smooth)", "Pterocarpus indicus forma indicus", "Fabaceae", "Critically Endangered", "furniture", "Orthodox", 1603, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Narra (Prickly)", "Pterocarpus indicus forma echinatus", "Fabaceae", "Critically Endangered", "future, high quality", "Orthodox", 1794, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Palosapis", "Anisoptera thurifera", "Dipterocarpaceae", "Critically Endangered", "cabinetwork, paneling", "Recalcitrant", 900, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Tanguile", "Shorea polysperma", "Dipterocarpaceae", "Critically Endangered", "commercial timber and light construction", "Recalcitrant", 0, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Tindalo", "Afzelia rhoboidea", "Fabaceae", "Critically Endangered", "high grade furniture", "Orthodox", 230, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Toog", "Petersianthus quadrialatus", "Lecythidaceae", "NA", "heavy construction", "Recalcitrant", 20000, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("White Lauan", "Shorea contorta", "Dipterocarpaceae", "Vulnerable", "commercial timber", "Recalcitrant", 160, "Timber");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Caimito", "Chrysophyllum cainito", "Sapotaceae", "NA", "fruits and medicinal", "Orthodox", 0, "Fruit-Bearings");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Duhat", "Syzygium cumini", "Myrtaceae", "NA", "fruits and medicinal", "Orthodox", 0, "Fruit-Bearings");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Langka", "Artocarpus heterophyllus", "Moraceae", "NA", "fruits an medicinal", "Orthodox", 0, "Fruit-Bearings");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Lanzones", "Lansium domesticum", "Myrtaceae", "NA", "NA", "fruits and medicinal", 0, "Fruit-Bearings");
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount, classification) VALUES ("Atis", "Annona squamosa", "Annonaceae", "NA", "fruits and medicinal", "Orthodox", 0, "Fruit-Bearings");

INSERT INTO phenology VALUES ("Akle", "September", "October", "March", "May-June");
INSERT INTO phenology VALUES ("Almaciga", "NA", "March", "NA", "October-November");
INSERT INTO phenology VALUES ("Almon", "NA", "March-May", "NA", "October-November");
INSERT INTO phenology VALUES ("Amugis", "April-December", "February", "NA", "July-August");
INSERT INTO phenology VALUES ("Apitong", "April", "May-June", "NA", "August-September");
INSERT INTO phenology VALUES ("Atis", "NA", "NA", "NA", "NA");
INSERT INTO phenology VALUES ("Bagalunga", "April-May","June", "July", "August-October");
INSERT INTO phenology VALUES ("Bagtikan", "October", "November-May", "June", "July-August");
INSERT INTO phenology VALUES ("Balakat gubat", "September-December", "February-June", "NA", "NA");
INSERT INTO phenology VALUES ("Batino", "NA", "July-November", "NA", "NA");
INSERT INTO phenology VALUES ("Bitaog", "January-May", "July-August", "September-October", "NA");
INSERT INTO phenology VALUES ("Caimito", "NA", "NA", "NA", "NA");
INSERT INTO phenology VALUES ("Dao", "April-May", "June", "August", "September-October");
INSERT INTO phenology VALUES ("Dita", "May-June", "July", "NA", "August-September");
INSERT INTO phenology VALUES ("Duhat", "January-February", "June-July", "July-August", "NA");
INSERT INTO phenology VALUES ("Igyo", "June", "July-August", "October-November", "December-January");
INSERT INTO phenology VALUES ("Ipil", "November-December", "January-February", "April", "May-June");
INSERT INTO phenology VALUES ("Kalantas", "NA", "November", "February", "NA");
INSERT INTO phenology VALUES ("Kamagong", "December-January", "March-April", "May-June", "July-October");
INSERT INTO phenology VALUES ("Langka", "November-December", "June-July", "NA", "NA");
INSERT INTO phenology VALUES ("Lanzones", "NA", "NA", "NA", "NA");
INSERT INTO phenology VALUES ("Malapapaya", "January-February", "March-April", "May", "June");
INSERT INTO phenology VALUES ("Molave", "June-July", "August", "NA", "September-October");
INSERT INTO phenology VALUES ("Narra (Prickly)", "March-April", "May", "June", "September-October");
INSERT INTO phenology VALUES ("Narra (Smooth)", "March-April", "May-June", "July", "August-September");
INSERT INTO phenology VALUES ("Palosapis", "NA", "March-May", "NA", "September-October");
INSERT INTO phenology VALUES ("Tanguile", "May-December", "February", "March-August", "NA");
INSERT INTO phenology VALUES ("Tindalo", "NA", "March-April", "June-August", "September-December");
INSERT INTO phenology VALUES ("Toog", "NA", "NA", "NA", "December-February");
INSERT INTO phenology VALUES ("White Lauan", "February-March", "April-June", "July", "August");

INSERT INTO user VALUES ("jdcruz", "12345", "Juan Dela Cruz", "juanD@gmail.com", "09123456789", "employer");
INSERT INTO user VALUES ("jypark", "igot7", "Jin Young Park", "jypark@gmail.com", "09174426045", "employer");
INSERT INTO user VALUES ("narchibald", "xo4xo", "Nathaniel Archibald", "narchibald@gmail.com", "09955689231", "employer");
INSERT INTO user VALUES ("tstjames", "gg143", "Tiffany St. James", "tffnystjames@gmail.com", "09498761243", "employer");
INSERT INTO user VALUES ("mymina", "2wiceS", "Mina Myoui", "minarin@gmail.com", "09216789931", "employer");

INSERT INTO user VALUES ("pabpikaso", "qwerty", "Pablo Pikaso", "pabPik@gmail.com", "09987654321", "employee");
INSERT INTO user VALUES ("kimmontalla", "nEilC", "Kristine Montalla", "KimMon@gmail.com", "09957031014", "employee");
INSERT INTO user VALUES ("hdeguzman", "BaogAQ", "Hannah De Guzman", "hdeguzman@gmail.com", "09757869023", "employee");
INSERT INTO user VALUES ("byunbaek", "exol9", "Baekhyun Byun", "baekpuppy@gmail.com", "09459856713", "employee");
INSERT INTO user VALUES ("msgranger", "aCcIo", "Hermoine Granger", "hgranger@gmail.com", "09327654", "employee");

INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Tindalo", "mymina", "kimmontalla", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Bagtikan", "jdcruz", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Toog", "narchibald", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Almaciga", "jypark", "msgranger", "Presece of scorching.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Bagtikan", "jdcruz", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kalantas", "mymina", "hdeguzman", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Ipil", "jypark", "hdeguzman", "Have galls.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Palosapis", "tstjames", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Molave", "tstjames", "msgranger", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kamagong", "narchibald", "kimmontalla", "Healthy tree.");

/** added **/

INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Tindalo", "mymina", "kimmontalla", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Bagtikan", "jdcruz", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Toog", "narchibald", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Almaciga", "jypark", "msgranger", "Presece of scorching.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Bagtikan", "jdcruz", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kalantas", "mymina", "hdeguzman", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Ipil", "jypark", "hdeguzman", "Have galls.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Palosapis", "tstjames", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Molave", "tstjames", "msgranger", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kamagong", "narchibald", "kimmontalla", "Healthy tree.");

INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Bagtikan", "mymina", "kimmontalla", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kalantas", "jdcruz", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Toog", "narchibald", "pabpikaso", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Almaciga", "jypark", "msgranger", "Presece of scorching.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Palosapis", "jdcruz", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Kalantas", "mymina", "hdeguzman", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Ipil", "jypark", "hdeguzman", "Have galls.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Molave", "tstjames", "byunbaek", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Ipil", "tstjames", "msgranger", "Healthy tree.");
INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Toog", "narchibald", "kimmontalla", "Healthy tree.");


/** end added **/

INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Tindalo", "mymina", "kimmontalla", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Bagtikan", "jdcruz", "pabpikaso", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Toog", "narchibald", "pabpikaso", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Almaciga", "jypark", "msgranger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Bagtikan", "jdcruz", "byunbaek", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Kalantas", "mymina", "hdeguzman", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Ipil", "jypark", "hdeguzman", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Palosapis", "tstjames", "byunbaek", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Molave", "tstjames", "msgranger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
INSERT INTO report(treeName, employerUname, employeeUname, reportTxt) VALUES ("Kamagong", "narchibald", "kimmontalla", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");