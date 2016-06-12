var hardCodedItem=function(variableName,engValue,rusValue,geoValue){
	this.variableName=variableName;
	this.engValue=engValue;
	this.geoValue=geoValue;
	this.rusValue=rusValue;
}
var hardCode=function(codes){
	this.codes=codes;

}


var menuItem=function(sequenceNum,name,action,language){
	this.sequenceNum=sequenceNum;
	this.name=name;
	this.action=action;
	this.language=language;
}
var menu=function(men,lang){
	this.men=men;
	this.lang=lang;
}

var tourItem=function(tourID,effDate,mainImageIRL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,galery){

	this.tourID=tourID;
	this.effDate=effDate;
	this.mainImageURL=mainImageIRL;
	this.descriptionImageURL=descriptionImageURL;
	this.tourName=tourName;
	this.tourDescriptionShort=tourDescriptionShort;
	this.tourDescriptionLong=tourDescriptionLong;
	this.aboutPlaceShort=aboutPlaceShort;
	this.aboutPlaceLong=aboutPlaceLong;
	this.tourDetailShort=tourDetailShort;
	this.tourDetailShortHeaderName=tourDetailShortHeaderName;
	this.tourDetailLong=tourDetailLong;
	this.tourDetailLongHeaderName=tourDetailLongHeaderName;
	this.price=price;
	this.priceCurrency=priceCurrency;
	//this.galeryID=galeryID;
	this.galery=galery;
}

var raceItem=function(raceID,effDate,imageURL,raceName,raceDescription){
	this.raceID=raceID;
	this.effDate=effDate;
	this.imageURL=imageURL;
	this.raceName=raceName;
	this.raceDescription=raceDescription;
}

var galeryItem=function(galeryID,effDate,imageURL){
	this.galeryID=galeryID;
	this.effDate=effDate;
	//this.galeryName=galeryName;
	this.imageURL=imageURL;
}

var aboutUsItem=function(headerName,detail){
	this.headerName=headerName;
	this.detail=detail;
}

var contactItem=function(){

}

var screener=function(){
	this.menu=[];
    this.languageSupport=[];
    this.races=[];
    this.tours=[];
    this.tourDetailID='';
    this.galery=[];
    this.hardCodes=[];
    this.currentHardCode='asdasd';
    this.language;

	screener.prototype.init=function(){
		this.initMenu();
		this.initLanguageSupport();
		this.initHardCodes();
	}

	screener.prototype.initMenu=function(){
		var geoList=[]
		geoList.push(new menuItem(0,'მთავარი','/','ქართული'));
		geoList.push(new menuItem(1,'ტურები','tours','ქართული'));
		geoList.push(new menuItem(2,'რეისები','trips','ქართული'));
		geoList.push(new menuItem(3,'გალერეა','galery','ქართული'));
		geoList.push(new menuItem(4,'ჩვენს შესახებ','about','ქართული'));
		geoList.push(new menuItem(5,'კონტაქტი','contact','ქართული'));


		var engList=[]
		engList.push(new menuItem(0,'Main','/','English'));
		engList.push(new menuItem(1,'Tours','tours','English'));
		engList.push(new menuItem(2,'Regular Races','trips','English'));
		engList.push(new menuItem(3,'Galery','galery','English'));
		engList.push(new menuItem(4,'About Us','about','English'));
		engList.push(new menuItem(5,'Contact','contact','English'));

		var rusList=[];
		rusList.push(new menuItem(0,'главный','/','русский'));
		rusList.push(new menuItem(1,'туры','tours','русский'));
		rusList.push(new menuItem(2,'Regular Races rus','trips','русский'));
		rusList.push(new menuItem(3,'галерея','galery','русский'));
		rusList.push(new menuItem(4,'о нас','about','русский'));
		rusList.push(new menuItem(5,'контакт','contact','русский'));

		this.menu.push(new menu(geoList,'ქართული'));
		this.menu.push(new menu(engList,'English'));
		this.menu.push(new menu(rusList,'русский'));
	}
	screener.prototype.initLanguageSupport=function(){
		this.languageSupport.push('ქართული');
		this.languageSupport.push('English');
		this.languageSupport.push('русский');
	}
	screener.prototype.initHardCodes=function(){
		this.hardCodes.push(new hardCodedItem('@tours','Tours','туры','ტურები'));
		this.hardCodes.push(new hardCodedItem('@races','Races','Regular Races rus','რეისები'));
		this.hardCodes.push(new hardCodedItem('@toursInGeorgia','Tours In Georgia','tours in georgia rus','ტურები საქართველოში'));
		this.hardCodes.push(new hardCodedItem('@bookTheTour','Book the Tour','туры დაჯავშნა','ტურების დაჯავშნა'));
		this.hardCodes.push(new hardCodedItem('@fname','Fierst Name','туры','სახელი'));
		this.hardCodes.push(new hardCodedItem('@lname','Last Name','туры','გვარი'));
		this.hardCodes.push(new hardCodedItem('@birthDate','Birth Date','туры','დაბადების თარიღი'));
		this.hardCodes.push(new hardCodedItem('@idNumber','ID number','туры','პირადი ნომერი'));
		this.hardCodes.push(new hardCodedItem('@mail','EMAIL','туры','ელექტრონული ფოსტა'));
		this.hardCodes.push(new hardCodedItem('@cellNumber','Phone Number','туры','ტელეფონის ნომერი'));
		this.hardCodes.push(new hardCodedItem('@book','Book','туры','დაჯავშნა'));
		this.hardCodes.push(new hardCodedItem('@submit','Submit','туры','დადასტურება'));
		this.hardCodes.push(new hardCodedItem('@close','Close','туры','დახურვა'));

		this.hardCodes.push(new hardCodedItem('@contactInfo','Contact Information','sakontakto rusulad','საკონტაქტო ინფორმაცია'));
		this.hardCodes.push(new hardCodedItem('@country','Country','country rus','ქვეყანა'));
		this.hardCodes.push(new hardCodedItem('@message','Message','mesiji rus','შეტყობინება'));
		this.hardCodes.push(new hardCodedItem('@send','Send','туры','გაგზავნა'));
		
		this.hardCodes.push(new hardCodedItem('@price','Price: ','cena rus:  ','ფასი: '));
		

	}




}

module.exports.screener=screener;
module.exports.raceItem=raceItem;
module.exports.tourItem=tourItem;
module.exports.galeryItem=galeryItem;