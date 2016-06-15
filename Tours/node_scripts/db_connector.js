var db_connector=function(){
	this.mongo = require('mongodb');
	var ObjectId = require('mongodb').ObjectID;
	this.assert = require('assert');
	this.url = 'mongodb://localhost:27017/toursDB';

	console.log('db_connector initialized');

	db_connector.prototype.getTours=function(languageID,callback){
		this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'languageID': ObjectId(languageID)}).sort({'effDate':-1}).toArray(function(err,docs){
						
						console.log(docs.length);
						callback(docs);
					});
				});
	}
	db_connector.prototype.getToursForMain=function(languageID,callback){
		this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'languageID': ObjectId(languageID),'MainPageFlag':'Y'}).sort({'effDate':-1}).limit(6).toArray(function(err,docs){
						//console.dir(docs);
						callback(docs);
					});
				});
	}
	db_connector.prototype.getTourForDetail=function(tourID,languageID,callback){
		console.log(tourID);
		this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'tourID': ObjectId(tourID),'languageID':ObjectId(languageID)}).toArray(function(err,docs){
						callback(docs);
					});
				});
	}
	db_connector.prototype.getGaleryHeader=function(galeryID,callback){
		this.mongo.connect(this.url,function(err,db){
					var galeryCollection=db.collection('galeryTable');
					galeryCollection.find({'galeryID': ObjectId(galeryID),'mainImageFlag':'Y'}).toArray(function(err,docs){
						callback(docs);
					});
				});
	}
	db_connector.prototype.getGalery=function(galeryID,callback){
		console.log(galeryID);
		this.mongo.connect(this.url,function(err,db){
					var galeryCollection=db.collection('galeryTable');
					galeryCollection.find({'galeryID': ObjectId(galeryID)}).toArray(function(err,docs){
						//console.dir(docs);
						callback(docs);
					});
				});
	}
	db_connector.prototype.getRaces=function(languageID,callback){
		this.mongo.connect(this.url,function(err,db){
			var racesCollection=db.collection('raceTable');
			racesCollection.find({'languageID': ObjectId(languageID)}).toArray(function(err,docs){
				callback(docs);

			});
		});
	}
	db_connector.prototype.getRacesForMain=function(languageID,callback){
		this.mongo.connect(this.url,function(err,db){
			var racesCollection=db.collection('raceTable');
			racesCollection.find({'languageID': ObjectId(languageID)}).sort({'eddDate':-1}).limit(2).toArray(function(err,docs){
				callback(docs);

			});
		});
	}
	db_connector.prototype.getToursAndRaces=function(){

	}
	db_connector.prototype.getLanguageID=function(language,callback){
		this.mongo.connect(this.url,function(err,db){
			var languageCollection=db.collection('languageTable');
			languageCollection.find({'language':language}).toArray(function(err,docs){
				console.dir(docs[0]._id.toString());
				callback(docs[0]._id.toString());
			});
		});
	}
}





/*
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var ucxoTable=db.collection('ucxotable');
  ucxoTable.find({}).toArray(function(err,docs){
  	console.dir(docs);
  });
  });

*/




module.exports.db_connector=db_connector



