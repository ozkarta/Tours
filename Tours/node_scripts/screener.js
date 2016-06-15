var endOfLine='<br>'// = require('os').EOL;

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
		rusList.push(new menuItem(0,'Главная','/','русский'));
		rusList.push(new menuItem(1,'туры','tours','русский'));
		rusList.push(new menuItem(2,'Рейсы','trips','русский'));
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
		this.hardCodes.push(new hardCodedItem('@album','Photo Album','albomi rusulad','ფოტო ალბომი'));
		this.hardCodes.push(new hardCodedItem('@races','Races','Рейсы','რეისები'));
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
		
		this.hardCodes.push(new hardCodedItem('@number','Quantity: ','raod rus:  ','რაოდენობა'));
		this.hardCodes.push(new hardCodedItem('@aboutUsTitle','LTD  Mate Tour Georgia','SPs MateTourGeorgia','შპს  Mate Tour Georgia'));
		this.hardCodes.push(new hardCodedItem('@aboutUsText1',
				'Travel agency "Mate Tour Georgia" is a young travel agency. Our agency specializes on internal group and individual tourism, independently develops and realizes rounds on rest and trips in Georgia.The Company offers tourists entering in Georgia appropriate service with high standards.',
				'Туристическая компания "Mate Tour Georgia" является молодой туристической компанией.Наша компания занимается организацией как разнообразных групповых, так и индивидуальных туров отдыха и поездок по Грузии.',
				'ტურისტული კომპანია შპს "Mate Tour Georgia"  არის ახალგაზრდა ტურისტული კომპანია,რომელიც ანხორციელებს შიდა ტურებს საქართველოში. კომპანია საქართველოში შემომსვლელ ვიზიტორებს სთავაზობს უმაღლესი სტანდარტების შესაბამის მომსახურებას.'));
		this.hardCodes.push(new hardCodedItem('@aboutUsText2',
				'<h3>Travel Company "Mate Tour Georgia" offers:</h3><p>'+endOfLine+'Booking of air tickets in all directions;'+endOfLine+'Services of the guide and the translator;'+endOfLine+'Transfer from/to the airport;'+endOfLine+'The car with the professional driver;'+endOfLine+'Excursions;'+endOfLine+'Room reservation of hotels of any class;'+endOfLine+'Wine tasting in the unique ancient cellars;'+endOfLine+'Excursions are conducted in English, Russian and Georgian;'+endOfLine+'Cultural-cognitive and specialized single/multi-day tours for groups and individual tourists;'+endOfLine+'</p>',
				'<h3>Наше компания  "Mate Tour Georgia"  предлагает:</h3>'+endOfLine+'<p>бронирование авиабилетов по всем направлениям;'+endOfLine+'услуги гида и переводчика;'+endOfLine+'трансфер из/до аэропорта;'+endOfLine+'машину с профессиональным водителем;'+endOfLine+'экскурсии;'+endOfLine+'бронирование номеров гостиниц любого класса;'+endOfLine+'Экскурсии на русском, английском, грузинском языках;'+endOfLine+'Дегустацию вин в уникальных старинных погребах;'+endOfLine+'Культурно-познавательные и специализированные одно/многодневные как групповые, так и индивидуальные туры;'+endOfLine+'</p>',
				'<h3>ჩვენი კომპანია გთავაზობთ:</h3><p>'+endOfLine+'თვითმფრინავის ბილეთების დაჯავშნას ყველა მიმართულებით;'+endOfLine+'გიდისა და თარჯიმნის მომსახურებას;'+endOfLine+'ტრანსფერებს აეროპორტამდე და აეროპორტიდან ქალაქში;'+endOfLine+'საექსკურსიო მარშრუტებს;'+endOfLine+' სასტუმროებისა და ოჯახური სასტუმროს  დაჯავშნას საქართველოს მაშტაბით;'+endOfLine+'სატრანსპორტო მომსახურებას;'+endOfLine+'ექსკურსიების ჩატარებას ინგლისურ, რუსულ და ქართულ ენებზე;'+endOfLine+'ღვინის დეგუსტაციას უნიკალურ უძველეს სარდაფებში;'+endOfLine+'კულტურულ-შემეცნებით  ტურებს;<p/>'));
		

	}




}

module.exports.screener=screener;
module.exports.raceItem=raceItem;
module.exports.tourItem=tourItem;
module.exports.galeryItem=galeryItem;