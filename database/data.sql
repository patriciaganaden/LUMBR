USE foresthackDB;

DELETE FROM tree;
DELETE FROM phenology;
DELETE FROM user;
DELETE FROM plantedTree;
DELETE FROM report;

ALTER TABLE tree AUTO_INCREMENT = 1;

INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Akle", "Albizia acle", "Fabaceae", "NA", "NA", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Almaciga", "Agathis philippinensis", "Araucariaceae", "NA", "resin from bark", "Recalcitrant", 0);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Almon", "Shorea almon", "Dipterocarpaceae", "Vulnerable", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Amugis", "Koordersiodendron pinnatum", "Anacardiaceae", "Vulnerable", "flooring, construction, furniture, and cabinet work", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Apitong", "Dipterocarpus grandiflorus", "Dipterocarpaceae", "NA", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Bagalunga", "Melia azedarach", "Meliaceae", "NA", "NA", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Bagtikan", "Parashorea malaanonan", "Dipterocarpaceae", "Critically Endangered", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Balakat gubat", "Balakata luzonica", "Euphorbiaceae", "NA", "Vulnerable", "plywood, particle board", "NA", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Batino", "Alstonia macrophylla", "Sapotaceae", "NA", "NA", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Bitaog", "Calophyllum inophyllum", "Clusiaceae", "NA", "NA", "Orthodox/Intermediate", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Dao", "Dracontomelon dao", "Anacardiaceae", "Vulnerable", "furniture, interior finishing, paneling, and cabinet work", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Dita", "Alstonia scholaris", "Apocynaceae", "NA", "pulp", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Igyo", "Dysoxylum gaudichaudianum", "Meliaceae", "NA", "light construction", "Intermediate", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Ipil", "Instia bijuga", "Fabaceae", "Endangered", "general purpose timber", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Kalantas", "Toona calantas", "Meliaceae", "NA", "NA", "Critically Endangered", "furniture, plywood, musical instruments", "Intermediate", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Kamagong", "Diospyros blancoi", "Ebenaceae", "Critically Endangered", "furniture and carving and other handicraft", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Malapapaya", "Polyscias nodosa", "Araliaceae", "NA", "chopsticks, matchsticks", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Molave", "Vitex parviflora", "Lamiaceae", "Endangered", "house building, ship building, and carving", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Narra (Smooth)", "Pterocarpus indicus forma indicus", "Fabaceae", "Critically Endangered", "furniture", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Narra (Prickly)", "Pterocarpus indicus forma echinatus", "Fabaceae", "Critically Endangered", "future, high quality", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Palosapis", "Anisoptera thurifera", "Dipterocarpaceae", "Critically Endangered", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Tanguile", "Shorea polysperma", "Dipterocarpaceae", "Critically Endangered", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Tindalo", "Afzelia rhoboidea", "Fabaceae", "NA", "NA", "Critically Endangered", "high grade furniture", "Orthodox", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("Toog", "Petersianthus quadrialatus", "Lecythidaceae", "NA", "NA", "Recalcitrant", 597);
INSERT INTO tree(treeName, scientificName, familyName, conservationStatus, seedType, uses, seedCount) VALUES ("White Lauan", "Shorea contorta", "Dipterocarpaceae", "Vulnerable", "NA", "Recalcitrant", 597);

INSERT INTO phenology VALUES ("Akle", "September", "October", "March", "May-June");
INSERT INTO phenology VALUES ("Almaciga", "NA", "March", "NA", "October-November");
INSERT INTO phenology VALUES ("Almon", "NA", "March-May", "NA", "October-November");
INSERT INTO phenology VALUES ("Amugis", "April-December", "February", "NA", "July-August");
INSERT INTO phenology VALUES ("Apitong", "April", "May-June", "NA", "August-September");
INSERT INTO phenology VALUES ("Bagalunga", "April-May","June", "July", "August-October");
INSERT INTO phenology VALUES ("Bagtikan", "October", "November-May", "June", "July-August");
INSERT INTO phenology VALUES ("Balakat gubat", "September-December", "February-June", "NA", "NA");
INSERT INTO phenology VALUES ("Batino", "NA", "July-November", "NA", "NA");
INSERT INTO phenology VALUES ("Bitaog", "January-May", "July-August", "September-October", "NA");
INSERT INTO phenology VALUES ("Dao", "April-May", "June", "August", "September-October");
INSERT INTO phenology VALUES ("Dita", "May-June", "July", "NA", "August-September");
INSERT INTO phenology VALUES ("Igyo", "June", "July-August", "October-November", "December-January");
INSERT INTO phenology VALUES ("Ipil", "November-December", "January-February", "April", "May-June");
INSERT INTO phenology VALUES ("Kalantas", "NA", "November", "February", "NA");
INSERT INTO phenology VALUES ("Kamagong", "December-January", "March-April", "May-June", "July-October");
INSERT INTO phenology VALUES ("Malapapaya", "January-February", "March-April", "May", "June");
INSERT INTO phenology VALUES ("Molave", "June-July", "August", "NA", "September-October");
INSERT INTO phenology VALUES ("Narra (Prickly)", "March-April", "May", "June", "September-October");
INSERT INTO phenology VALUES ("Narra (Smooth)", "March-April", "May-June", "July", "August-September");
INSERT INTO phenology VALUES ("Palosapis", "NA", "March-May", "NA", "September-October");
INSERT INTO phenology VALUES ("Tanguile", "May-December", "February", "March-August", "NA");
INSERT INTO phenology VALUES ("Tindalo", "NA", "March-April", "June-August", "September-December");
INSERT INTO phenology VALUES ("Akle", "September", "October", "March", "May-June");
INSERT INTO phenology VALUES ("Toog", "NA", "NA", "NA", "December-February");
INSERT INTO phenology VALUES ("White Lauan", "February-March", "April-June", "July", "August");

INSERT INTO employer VALUES ("jdcruz", "12345", "Juan Dela Cruz", "juanD@gmail.com", "09123456789");
INSERT INTO employer VALUES ("jypark", "igot7", "Jin Young Park", "jypark@gmail.com", "09174426045");
INSERT INTO employer VALUES ("narchibald", "xo4xo", "Nathaniel Archibald", "narchibald@gmail.com", "09955689231");
INSERT INTO employer VALUES ("tstjames", "gg143", "Tiffany St. James", "tffnystjames@gmail.com", "09498761243");
INSERT INTO employer VALUES ("mymina", "2wiceS", "Mina Myoui", "minarin@gmail.com", "09216789931");

INSERT INTO employee VALUES ("pabpikaso", "qwerty", "Pablo Pikaso", "pabPik@gmail.com", "09987654321");
INSERT INTO employee VALUES ("kimmontalla", "nEilC", "Kristine Montalla", "KimMon@gmail.com", "09957031014");
INSERT INTO employee VALUES ("hdeguzman", "BaogAQ", "Hannah De Guzman", "hdeguzman@gmail.com", "09757869023");
INSERT INTO employee VALUES ("byunbaek", "exol9", "Baekhyun Byun", "baekpuppy@gmail.com", "09459856713");
INSERT INTO employee VALUES ("msgranger", "aCcIo", "Hermoine Granger", "hgranger@gmail.com", "09327654");

INSERT INTO plantedTree(treeName, owner, plantedBy, status) VALUES ("Akle", "jdcruz", "pabpikaso", "Healthy tree.");

INSERT INTO report(employerUname, employeeUname, reportTxt) VALUES ("jdcruz", "pabpikaso", "The tree is healthy sir!");