db.languageTable.drop()
db.toursTable.drop()
db.galeryTable.drop()
db.raceTable.drop()


var engID=new ObjectId()
var geoID=new ObjectId()
var rusID=new ObjectId()

var a=new ObjectId()
var galeryID=new ObjectId()
var raceID=new ObjectId()

db.languageTable.insert({'_id':engID,'language':'English'})
db.languageTable.insert({'_id':geoID,'language':'ქართული'})
db.languageTable.insert({'_id':rusID,'language':'русский'})

//_______________________________ტურები
//   English
a=new ObjectId()
a1=new ObjectId()
a2=new ObjectId()
a3=new ObjectId()
a4=new ObjectId()
a5=new ObjectId()
a6=new ObjectId()
a7=new ObjectId()
a8=new ObjectId()
a9=new ObjectId()
a10=new ObjectId()
a11=new ObjectId()
a12=new ObjectId()
a13=new ObjectId()
a14=new ObjectId()
a15=new ObjectId()

galeryID=new ObjectId()
raceID=new ObjectId()
//____________________________________MTSKHETA____________________________________________________________
db.toursTable.insert({	
'tourID':a,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'მცხეთა',
'aboutPlaceShort':'მცხეთა ერთ-ერთი უძველესი ქალაქია საქართველოში.მცხეთის ისტორიული ძეგლები იუნესკოს მსოფლიო კულტურული მემკვიდრეობის ნუსხაშია შეტანილი: ჯვრის მონასტერი,სვეტიცხოველის ტაძარი, სამთავრო, შიო მღვიმის და ზედაზენის  სამონასტრო კომპლექსი.',
'tourDetailShort':'<p>მარშრუტი: თბილის-მცხეთა--თბილისი</p><p>ტურის სახეობა: ტური,კულტურული, საეკლესიო</p><p>კვება: არა</p><p>განთავსება: არა</p><p>ტურის ხანგრძლივობა: 1 დღე</p><p>მანძილი: 30კმ</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'ერთ დღიანი ტური, მცხეთის მონახულება',
'tourDetailLong':'<p>1. ჯვრის მონასტერი </p><p>2. სვეტიცხოველი</p><p>3. სამთავრო</p><p>4. შიო მღვიმის სამონასტრო კომპლექსი</p><p>5. ზედაზენის  სამონასტრო კომპლექსი</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'Mtskheta',
'aboutPlaceShort':'Mtskheta is one of oldest cities of Georgia (in Kartli province of Eastern Georgia), near Tbilisi. Mtskheta was a capital of the Georgian Kingdom  of Iberia during the 3rd century BC - 5th century AD. Here Georgians accepted Christianity in 317 and Mtskheta still remains the headquarters of the Georgian Orthodox and Apostolic Church.In Mtskheta we shall see: the unique church Jvari Monastery,Svetitskhoveli Cathedral,Samtavro,Shiomghvime and Zedazeni Monasteries.',
'tourDetailShort':'<p>Routes: Tbilisi-Mtsketa-Tbilisi</p><p>Tour Type: cultural,Monastery</p><p>Food: No</p><p>Placement: No</p><p>Duration: One Day</p><p>Distance: 30 KM</p><p>Price: </p>',
'tourDetailShortHeaderName':'One day tour in Mtsketa',
'tourDetailLong':'<p>1 Jvari Monastery</p><p>2 Svetitskhoveli Cathedral</p><p>3 Samtavro</p><p>4 Shiomghvime</p><p>5 Zedazeni</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'Мцхета',
'aboutPlaceShort':'Мцхета - один из самых старых городов Грузии  (в области Картли Восточной Грузии), 24 километрах от Тбилиси. Основан во 2-й половине 1 тысячелетия до н. э. До конца V века н. э. — столица Картлийского царства. Здесь располагаются остатки укреплённых резиденций, городских кварталов, могильники, а также комплекс монастыря Самтавро (главный храм XI века) и кафедральный собор Светицховели. Близ Мцхеты находится древнейший в стране монастырский храм Джвари (VI век). Святое место для православных грузин которым связано история хитона Иисуса христа, принятие христианство государственной религией Мцхета и на сей день остается главным местом грузинской Ортодоксальной и Апостольской Церкви.',
'tourDetailShort':'<p>Маршруты: Тбилиси  - Мцхета -Тбилиси</p><p>Тип тура: культурный,церковь</p><p>питание: нет</p><p>размещение: нет</p><p>продолжительность: один день</p><p>расстояние: 30 км</p><p>цена: </p>',
'tourDetailShortHeaderName':'Однодневный тур в  Мцхета',
'tourDetailLong':'<p>1 Джвари </p><p>2 Светицховели</p><p>3 Самтавро</p><p>4 Шио-Мгвимский монастырь</p><p>5 Зедазнийский монастырь</p>',
'tourDetailLongHeaderName':'Oписание тура',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})
//_______________________________________SVANETI_______________________________________________________
db.toursTable.insert({	
'tourID':a1,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'სვანეთი',
'aboutPlaceShort':'სვანეთი მაღალმთიანი რეგიონია რომელიც მდებარეობს საქართველოს ჩრდილო დასავლეთში. სტუმრები, რომლებმაც სვანეთი მოინახულეს ერთხმად აღნიშნავენ, რომ სვანეთი არის მუზეუმი ღია ცის ქვეშ. სვანეთი იყოფა ორ ნაწილად, ზემო სვანეთი და ქვემო სვანეთი. ზემო სვანეთის ადმინისტრაიული ცენტრი არის ქალაქი მესტია, რომელიც ზღვის დონიდან არის 1500 მ. სიმაღლეზე. ზემო სვანეთი ცნობილია თავისი არქიტექტურით. აქ თქვენ შეხვდებით უნიკალურ სვანურ კოშკებს და უძველეს ეკლესიებს.',
'tourDetailShort':'<p>მარშრუტი: თბილისი-ზუგდიდი-მესტია-უშგული - თბილისი</p><p>ტურის სახეობა: კულტურული</p><p>კვება: ორჯერადი კვება</p><p>განთავსება: დაბინავება ოჯახურ სასტუმროში</p><p>ტურის ხანგრძლივობა: 2 ღამე / 3 დღე</p><p>მანძილი: 550კმ</p><p>სატრანსპორტო საშუალება: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური სვანეთში',
'tourDetailLong':'<ul><dt><p>1 დღე:</p></dt><dd><p>1 დადიანების სასახლე</p></dd><dd><p>2 ენგურის წყალსაცავი</p></dd><dd><p>3. მესტია</p></dd><dd><p>4. ლატალი</p></dd><dd><p>5 მესტიის ეთნოგრაფიული მუზეუმი,</p></dd><dd><p>6,ხერგიანების მუზეუმი</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1.უშგული</p></dd><dd><p>2.სიყვარულის კოშკი</p></dd><dd><p>3.თამარ მეფის საზამთრო და საზაფხულო კოშკები</p></dd><dd><p>4.ლამარიას ციხე-კოშკი.</p></dd><dd><p>5.მუზეუმი</p></dd><dt><p>მე-3 დღე</p></dt><dd><p>1.ჰაწვალის მთა</p></dd><dd><p>2.ქორულდის  ტბა</p></dd><dd><p>3.ჩახის ტბა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a1,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'Svaneti',
'aboutPlaceShort':'Svaneti is high mountain region on the north west side of Georgia. The guests, who visited the region, unanimously note, that the Svaneti is an open-air museum. Svaneti is divided into two parts, the upper Svaneti and a lower Svaneti. Town Mestia is the administrative center of the upper Svaneti, which is located on 1500 m. From the level of sea. Upper Svaneti known for its architecture. Here you can meet the unique Svanetian towers and ancient churches.',
'tourDetailShort':'<p>Routes: Tbilisi - Zugdidi - Mestia - Ushguli - Tbilisi</p><p>Tour Type: cultural</p><p>Food: two meals a day </p><p>Placement: Overnight in a Family hotel for two nights</p><p>Duration: 2 nights / 3 days</p><p>Distance: 550 KM</p><p>Transport :  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>Price: </p>',
'tourDetailShortHeaderName':'3-Day tour in Svaneti',
'tourDetailLong':'<ul><dt><p>Day 1</p></dt><dd><p>1.Dadiani Museum in Zugdidi.</p></dd><dd><p>2.  Enguri reservoir;</p></dd><dd><p>3 Mestia</p></dd><dd><p>4.  Latali</p></dd><dd><p>5. Ethnographic Museum</p></dd><dd><p>6. Khergiani Museum</p></dd><dt><p>Day 2</p></dt><dd><p>1.Ushguli</p></dd><dd><p>2. Tower of Love</p></dd><dd><p>3. Tamar&quots winter and summer towers</p></dd><dd><p>4.Lamaria tower</p></dd><dt><p>Day 3</p></dd><dt><p>1.Khatsvali</p></dd><dd><p>2.Qoruldi lake </p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a1,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'Сванети',
'aboutPlaceShort':'Сванети горний краи каторый находится в северно-западноий грузии. Люди посетившие сванети часто називают его музейм под откритим небом. Сванети делят на две Верхную и Нижную часть. Административним центром верхной сванети является город (п.г.т.) местя который находится 1500 метров над уровнем моря. Верхняя Сванетия известна своими архитектурными сокровищами. здесь вы увидите средневековие церкви и укрепления Местийского района каторые били включени в список Всемирного наследия ЮНЕСКО.',
'tourDetailShort':'<p>Маршруты: Тбилиси – Зугдиди – Местиа – Ушгули – Тбилиси</p><p>Тип тура: культурный</p><p>питание: Двухразовое питание</p><p>размещение: Остановка в семейном отеле на 2 ночь</p><p>продолжительность: 2 ночи/ 3 дня</p><p>расстояние: 550 км</p><p>Транспорт: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>цена: </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Сванети',
'tourDetailLong':'<ul><dt><p>День 1:</p></dt><dd><p>1.Дворец Дадиани в Зугдиди</p></dd><dd><p>2.водохранилище Ингури</p></dd><dd><p>3.Местия</p></dd><dd><p>4.Латали</p></dd><dd><p>5 музей Местии</p></dd><dd><p>6. музей имени Хергиани.</p></dd><dt><p>День 2</p></dt><dd><p>1.Ушгули</p></dd><dd><p>2. Башню Любви</p></dd><dd><p>3. зимние и летние башни царицы Тамары,</p></dd><dd><p>4.Замковая башня Ламариа.</p></dd><dt><p>День 3</p></dt><dd><p>1.Хацвали</p></dd><dd><p>2.озера корульди</p></dd><dd><p>3.озера chaxis</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//__________________________________SAMCXE_JAVAKHETI________________________________________________
db.toursTable.insert({	
'tourID':a2,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'სამცხე-ჯავახეთი',
'aboutPlaceShort':'სამცხე-ჯავახეთი საქართვლოს უძველესი კუთხეა. ამ ტერიტორიაზე მრავალი არქეოლოგიური ძეგლია. შეიძლება ითქვას, რომ სამცხე-ჯავახეთის მიწა-წყალი მრავალ საიდუმლოს ინახავს და მისი ვრცელი ტერიტორიების არქეოლოგიური კვლევა გრძელდება. მიუხედავად ამისა, სამცხე-ჯავახეთი მდიდარია სანახაობებითი. თქვენ ამაში აუცილებლად დარწმუნდებით მას შემდეგ, რაც ესტუმრებით ამ კუთხეს.აქაური სამზარეულო მთელს საქართველოშია განთქმული თავისი უნიკალურობით. ასევე აქ გვაქვს ღვინის ისეთი სახეობები, რომლებიც ძალზე დიდ იშვიათობას წარმოადგენს და გვხვდება მხოლოდ ამ კუთხეში.',
'tourDetailShort':'<p>მარშრუტი: თბილისი-ბორჯომი-ახალციხე-აბასთუმანი-ვარძია-თბილისი</p><p>ტურის სახეობა: კულტურულ ,შემეცნებითი</p><p>კვება: ორჯერადი კვება</p><p>განთავსება: დაბინავება  სასტუმროში</p><p>ტურის ხანგრძლივობა: 2 ღამე / 3 დღე</p><p>მანძილი: 250 კმ</p><p>სატრანსპორტო საშუალება: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური სამცხე-ჯავახეთში',
'tourDetailLong':'<ul><dt><p>პირველი დღე</p></dt><dd><p>1.ბორჯომი</p></dd><dd><p>2,ტიმოთესუბნის ღვთისმშობლის სახელობის მონასტერი</p></dd><dd><p>3.ბაკურიანი</p></dd><dd><p>4.სადგერის მონასტერი </p></dd><dd><p>5.სერაფიმ საროვსკის ეკლესია</p></dd><dd><p>6.ექსკურსია ბორჯომის პარკში</p></dd><dd><p>7.დაბინავება  ბორჯომში</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1.მწვანე მონასტერი</p></dd><dd><p>2.რაბათის ციხე</p></dd><dd><p>3.საფარას მონასტერი</p></dd><dd><p>4.ჭულევის მონასტერი</p></dd><dd><p>5 ზარზმას მონასტერი</p></dd><dd><p>6.აბასთუმნის ასტროფიზიკური ობსერვატორი</p></dd><dd><p>7. დაბინავება ახალციხეში</p></dd><dt><p>მე-3 დღე</p></dt><dd><p>1.ვარძიის კომპლექსი</p></dd><dd><p>2.ფარავანის ტბა</p></dd><dd><p>3. წალკა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a2,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'SAMTSKHE-JAVAKHETI',
'aboutPlaceShort':'Samtskhe-Javakheti – one of the oldest part of Georgia. On its territory there is a huge number of archeological monuments. We can say that this land is full of mysteries and puzzles, many of which are not discovered yet. You will be able to taste the local cuisine which is unusual and varied, even for residents of Georgian other parts. Here is producing unique wines. Our tour will introduce this beautiful place with the cultural and historical diversity of Samtskhe-Javakheti.',
'tourDetailShort':'<p>Routes: Tbilisi- Borjomi - Akhaltsikhe - Abastumani - Vardzia - Tsalka - Tbilisi</p><p>Tour Type: cultural,Monastery</p><p>Food: two meals a day </p><p>Placement: Overnight in a  hotel for two nights</p><p>Duration: 2 nights / 3 days</p><p>Distance: 250 KM</p><p>Transport :  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>Price: </p>',
'tourDetailShortHeaderName':'3-Day tour in SAMTSKHE-JAVAKHETI',
'tourDetailLong':'<ul><dt><p>Day 1</p></dt><dd><p>1. Borjomi </p></dd><dd><p>2.Timotesubani Virgin Mary Monastery (Tsaghvery)</p></dd><dd><p>3. Bakuriani</p></dd><dd><p>4. TabatskuriSadgeri monastery</p></dd><dd><p>5. Church of Seraphim Sarov</p></dd><dd><p>6.Borjomi park</p></dd><dd><p>7.Night in Borjomi</p></dd><dt><p>Day 2</p></dt><dd><p>1.Mtsvane monastery</p></dd><dd><p>2. Rabati Complex</p></dd><dd><p>3.Sapara Monastery</p></dd><dd><p>4.Chulevi Monastery</p></dd><dd><p>5.Zarzma Monastery</p></dd><dd><p>6.Abastumani Astrophysical Observatory</p></dd><dd><p>7.Night in Akhaltsikhe</p></dd><dt><p>Day 3</p></dt><dd><p>1.Vardzia Cave Monastery</p></dd><dd><p>2.Paravany Lake</p></dd><dd><p>3. Tsalka</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a2,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'САМЦХЕ-ДЖАВАХЕТИ',
'aboutPlaceShort':'Самцхе-Джавахети – древнейший край Грузии. На его территории расположено огромное количество археологических памятников. Можно сказать, что эта земля полна тайн и загадок, многие из которых еще предстоит открыть. И Вы в этом непременно убедитесь!  Вкусовая гамма местной кухни необычна и разнообразна даже для жителей других частей Грузии.Здесь производят уникальные сорта вин, которые не поддаются воспроизведению на другой почве.Наш тур поможет Вам познакомиться со всем культурно-историческим многообразием Самцхе-Джавахети. ',
'tourDetailShort':'<p>Маршруты: Тбилиси - Бакуриани - Боржоми - Ахалцихе - Вардзиа - Тбилиси</p><p>Тип тура: культурный,церковь</p><p>питание: Двухразовое питание</p><p>размещение: Остановка в  отеле на 2 ночь</p><p>продолжительность: 2 ночи/ 3 дня</p><p>расстояние: 250 км</p><p>Транспорт: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>цена: </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Самцхе-Джавахети',
'tourDetailLong':'<ul><dt><p>День 1</p></dt><dd><p>1. Боржоми</p></dd><dd><p>2.Тимотесубани Храм Пресвятой Богородицы(Цагвери)</p></dd><dd><p>3. Бауриани</p></dd><dd><p>6. Церковь Серафима Саровского</p></dd><dd><p>7. Парк Боржоми</p></dd><dd><p>8. Ночь в Боржоми</p></dd><dt><p>День 2</p></dt><dd><p>1.Зеленый монастырь</p></dd><dd><p>2. Комплекс Рабат</p></dd><dd><p>4.Монастырь Сафара</p></dd><dd><p>5. Монастырь Чулеви</p></dd><dd><p>6. Зарзма Монастырь</p></dd><dd><p>7. Абастумани</p></dd><dd><p>8.Абастуманская астрофизическая обсерватория</p></dd><dd><p>9.Ночь в Ахалцихе</p></dd><dt><p>День 3</p></dt><dd><p>1.Пещерный монастырь Вардзия</p></dd><dd><p>2.Озеро Паравани</p></dd><dd><p>3. Цалка</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//________________________________________yazbegi__________________________________________________

db.toursTable.insert({	
'tourID':a3,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'ყაზბეგი',
'aboutPlaceShort':'საქართველო - მთიანი ქვეყანაა, მყინვარწვერი კი საქართველოს ერთ-ერთი გამორჩეულად ლამაზი მთა. მცხეთა-მთიანეთის მხარე ძალზე პოპულარულია როგორც საქართველოში, ისე მთელს მსოფლიოში. ყაზბეგის რეგიონი კი მისი მარგალიტია, გამომდინარე ულამაზესი ბუნებიდან, ტრადიციებიდან და კულტურული ღირსშესანიშნაობებიდან. აქაური მთის ჰაერი საოცრად სუფთაა, ხოლო თოვლის ნახვა სტუმრებს ალპური მთის კალთებზე ცხელ ზაფხულშიც შეუძლიათ.',
'tourDetailShort':'<p>მარშრუტი: ანანური- გუდაური-  სტეფანწმინდა - დარიალი-თბილისი</p><p>ტურის სახეობა: ტური,კულტურული, საეკლესიო</p><p>კვება: არა</p><p>განთავსება: არა</p><p>ტურის ხანგრძლივობა: 1 დღე</p><p>მანძილი: 180 კმ</p><p>სატრანსპორტო საშუალება: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'ყაზბეგის ტური',
'tourDetailLong':'<p>1 ანანურის კომპლექსი.</p><p>2 გუდაური</p><p>3. ვეძა - მჟავე წყლები </p><p>4. გერგეთის სამება;</p><p>5. პატრიარქის სახლი</p><p>6. დარიალის ხეობა</p><p>7.სნოს ციხე</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a3,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'Kazbeghi',
'aboutPlaceShort':'Georgia is a Caucasian country, therefore mountains are, essentially, everywhere.  Kazbeghi, though, is an exceptionally beautiful mountainous region, the best well-known for both Georgians and foreigners which deeply love mountain landscapes. This area is famous for its beautiful nature, but also because of its traditions and enticing cultural venues. Joining our Kazbeghi tour you’ll enjoy the incredible sights of the Caucasian panorama.',
'tourDetailShort':'<p>Routes: Tbilisi- Borjomi - tbilisi-Ananuri - Gudauri -  Stephantsminda -Darial – Sno-tbilisi</p><p>Tour Type: cultural,Monastery</p><p>Food: No </p><p>Placement: No </p><p>Duration: One Day</p><p>Distance: 180 KM</p><p>Transport :  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>Price: </p>',
'tourDetailShortHeaderName':'One day tour in Kazbeghi',
'tourDetailLong':'<p>1 Ananuri complex</p><p>2 gudauri</p><p>3 Vedza, acidic waters</p><p>4 Gergeti Trinity</p><p>5 Patriarchate residence</p><p>6 Darial Gorge</p><p>7 sno</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a3,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'Казбеги',
'aboutPlaceShort':'Грузия – горная страна, и Казбеги – одна из красивейших наших гор. Мцхета-Тианетский край  благодаря своей прекрасной природе, традициям и памятникам культуры пользуется популярностью как у местных жителей, так и у туристов из разных стран мира. Здешний воздух необыкновенно чистый и свежий, вы почувствуете это  едва выйдя из машины.',
'tourDetailShort':'<p>Маршруты: Тбилиси-  Ананури- Гудаури- Стефанцминда-Дарьял -Сно-Тбилиси</p><p>Тип тура: культурный,церковь</p><p>питание: нет</p><p>размещение: нет</p><p>продолжительность: один день</p><p>расстояние: 180 км</p><p>Транспорт: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>цена: </p>',
'tourDetailShortHeaderName':'Однодневный тур в Казбеги ',
'tourDetailLong':'<p>1 Крепости Ананури</p><p>2 Гудаури</p><p>3 Источники минеральных вод</p><p>4 Троица Гергети</p><p>5 Резиденция Патриарха</p><p>6 Дарьял</p><p>7 Сно</p>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//___________________________________tusheti_______________________________________
db.toursTable.insert({	
'tourID':a4,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'თუშეთი',
'aboutPlaceShort':'თუშეთი საქართველოს ულამაზესი კუთხე – თუშეთი, საქართველოს ჩრდილო-აღმოსავლეთ ნაწილში, აღმოსავლეთ კავკასიონზე მდებარეობს. მისი ფართობი 896 კვადრატული კილომეტრია.უშეთს აღმოსავლეთიდან დაღესტანი, ჩრდილოეთიდან ჩეჩნეთი, დასავლეთით ხევსურეთი, სამხრეთით კი კახეთი ესაზღვრება.თუშეთი ოთხ ძირითად თემად იყოფა. პირიქითა, გომეწრის, წოვათას თემი და  ჩაღმის თემი. თუშეთის ადმინისტრაციული ცენტრი – ომალო ჩაღმის თემს მიეკუთვნება',
'tourDetailShort':'<p>მარშრუტი: თბილისი - ალვანი - ომალო - შენაქო - დიკლო - დართლო - ფარსმა - დოჭუ -თბილისი</p><p>ტურის სახეობა: კულტურულ ,შემეცნებითი</p><p>კვება: ორჯერადი კვება</p><p>განთავსება: დაბინავება ოჯახურ სასტუმროში</p><p>ტურის ხანგრძლივობა: 2 ღამე / 3 დღე</p><p>მანძილი: </p><p>სატრანსპორტო საშუალება: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური თუშეთში',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1.ქვემო ალვანი</p></dd><dd><p>2.აბანოს უღელტეხილი</p></dd><dd><p>3.ომალო </p></dd><dd><p>4.შენაქო</p></dd><dd><p>5.დიკლო</p></dd><dt><p>2.დღე</p></dt><dd><p>1.დართლო</p></dd><dd><p>2.კვავლო</p></dd><dd><p>3.ფარსმა </p></dd><dd><p>4.გირევი</p></dd><dt><p>3 დღე</p></dt><dd><p>1.დოჭუ</p></dd><dd><p>2.ვარბოსელი</p></dd><dd><p>3.ილიურთა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a4,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'Tusheti',
'aboutPlaceShort':'The most beautiful nook of Georgia – Tusheti – is located in northeastern Georgia, on the northern slopes of the Greater Caucasus Mountains.  Its area makes up of 896 square kilometers at a height of 1650-4493 above-sea level. n the east Tusheti borders Daghestan, in the north there is Chechnya, in the west there is Khevsureti and in the south is situated Kakheti.Tusheti is devided into four main Sociaties: Pirikita, Gometsri, Tsova and Chagma. The administrative centre of Tusheti – Omalo – concernes to the Chagmi Sociaty. ',
'tourDetailShort':'<p>Routes: tbilisi-alvani-omalo-shenako-diklo-dartlo-pharsma-Dochu-tbilisi</p><p>Tour Type: cultural,Monastery</p><p>Food: two meals a day  </p><p>Placement: Overnight in a Family hotel for two nights</p><p>Duration:  2 nights / 3 days</p><p>Distance: </p><p>Transport :  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>Price: </p>',
'tourDetailShortHeaderName':'3 day tour in Tusheti',
'tourDetailLong':'<ul><dt><p>1 Day</p></dt><dd><p>1 Alvani </p></dd><dd><p>2 Abano Pass</p></dd><dd><p>3 omalo</p></dd><dd><p>4 shenako</p></dd><dd><p>5.diklo</p></dd><dt><p>2 day</p></dt><dd><p>1 dartlo</p></dd><dd><p>2 kvavlo</p></dd><dd><p>3 pharsma</p></dd><dd><p>4 girev</p></dd><dt><p>3 day</p></dt><dd><p>1 dochu</p></dd><dd><p>2 jvarboseli</p></dd><dd><p>3 iliurta</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a4,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'Тушети',
'aboutPlaceShort':'расивейший уголок Грузии – Тушети – находится в северо-восточной части Грузии, на восточном Кавказском Хребте. Площадь Тушети составляет 896 квадратных километров. Она расположена на высоте 1650-4493 метров над уровнем моря,На востоке Тушети граничит в Дагестаном, с севера – с Чечней, на западе находится Хевсурети, а на юге расположена Кахети.Тушети делится на четыре основных Общества: Пирикита, Гомецри, Цова и Чагма. Административный центр Тушети – Омало – относится к Обществу Чагма. ',
'tourDetailShort':'<p>Тбилиси-Алвани-Омало-Дикло-фарсма-Дочу -Тбилиси</p><p>Тип тура: культурный,церковь</p><p>питание: Двухразовое питание</p><p>размещение: Остановка в  отеле на 2 ночь</p><p>продолжительность: 2 ночи/ 3 дня</p><p>расстояние: </p><p>Транспорт: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>цена: </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Тушети',
'tourDetailLong':'<ul><dt><p>День 1:</p></dt><dd><p>1 Алвани</p></dd><dd><p>2 Абано перевал</p></dd><dd><p>3 Омало</p></dd><dd><p>4 Дикло</p></dd><dd><p>5 шенако</p></dd><dt><p>День  2:</p></dt><dd><p>1 дартло</p></dd><dd><p>2 Квавло</p></dd><dd><p>3 фарсма</p></dd><dd><p>4 гиреви</p></dd><dt><p>День 3:</p></dt><dd><p>1 Дочу </p></dd><dd><p>2 Джварбосели</p></dd><dd><p>3 Илиурта</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//___________________________________________kaxeti_____________________________________

db.toursTable.insert({	
'tourID':a5,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'კახეთი',
'aboutPlaceShort':'კახეთი საქართველოს ერთ-ერთი უმშვენიერესი და მრავალფეროვანი მხარეა.კახეთი აღმოსავლეთ საქართველოს საზღვრისპირა რეგიონს წარმოადგენს.მას ჩრდილოეთიდან რუსეთის ფედერაცია ესაზღვრება, აღმოსავლეთიდან და სამხრეთიდან აზერბაიჯანი.ვინც კახეთში ერთხელ მაინც ყოფილა, მისთვის ეს მხარე მუდამ კარგ ღვინოსთან და გულღია მასპინძლობასთან ასოცირდება, რადგან კახეთი მევენახეობა-მეღვინეობით განთქმული მხარეა. აქ მრავალი ჯიშის ვაზი ხარობს და შესაბამისად მრავალფეროვანი მაღალხარისხიანი ღვინოებიც მზადდება.',
'tourDetailShort':'<p>მარშრუტი: თბილისი-დავით გარეჯის მონასტერი-სიღნაღი-ბოდბე-თბილისი</p><p>ტურის სახეობა: კულტურულ ,საეკლესიო</p><p>კვება: არა</p><p>განთავსება: არა</p><p>ტურის ხანგრძლივობა: 1 დღე</p><p>მანძილი: </p><p>სატრანსპორტო საშუალება: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>ფასი: </p>',
'tourDetailShortHeaderName':'1 დღიანი  ტური კახეთში',
'tourDetailLong':'<p>1 დავით გარეჯის მონასტერი</p><p>2 სიღნაღი</p><p>3 ბოდბე</p><p>4 ღვინის დეგუსტაცია</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a5,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'Kakheti',
'aboutPlaceShort':'Kakheti is one of the most beautiful and diverse lands in Georgia.kakheti is a region along the eastern boundary of Georgia. It is bordered by the Russian Federation from the North and Azerbaijan from the East and South.Whoever has traveled to Kakheti even once in his life will always associate this province with good wine and welcoming hospitality – Kakheti is a land famous for viticulture and winemaking. Farmers grow many kinds of grapes here and are skilled at producing a wide variety of high-quality wines.',
'tourDetailShort':'<p>Routes: tbilisi-David Gareja-Bodbe--tbilisi</p><p>Tour Type: cultural,Monastery</p><p>Food: no</p><p>Placement: no</p><p>Duration:  one day </p><p>Distance: </p><p>Transport :  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>Price: </p>',
'tourDetailShortHeaderName':'1-Day tour in Kakheti ',
'tourDetailLong':'<p>1 David Gareja</p><p>2 Bodbe</p><p>3 Sighnaghi</p><p>4 Wine tasting</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a5,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'Кахетия',
'aboutPlaceShort':'Кахетия является одним из самых красивых и отличающихся мест в Грузии. Кахетия- это регион расположенный вдоль восточной границы. Он граничит с Российской Федерацией с Севера и с Азербайджаном с Востока и Юга. Любой кто посещал Кахетию хотя бы раз в жизни будет ассоциировать его с хорошим вином и гостеприимством . Кахетия - это земля знаменитая виноградством и виноделием.Фермеры растят здесь множество сортов винограда, которые используются специалистами в производстве широкого разнообразия вина высшего качества.',
'tourDetailShort':'<p>Тбилиси - Давид-Гареджи - Бодбе- Тбилиси</p><p>Тип тура: культурный,церковь</p><p>питание: нет</p><p>размещение: нет</p><p>продолжительность: 1 дня</p><p>расстояние: </p><p>Транспорт: Mitsubishi delica (4x4) , nissan xterra (4x4)</p><p>цена: </p>',
'tourDetailShortHeaderName':'Однодневный тур в Кахетии',
'tourDetailLong':'<p>1. Давид Гареджа</p><p>2. Бодбе</p><p>3. Сигнаги</p><p>4. Дегустация вина</p>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})



//_______________________________________________________________________________________
raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'Gudauri',
	'raceDescription':'Travel 25 GEL',
	'imageURL':'images/website/gudauri.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'გუდაური',
	'raceDescription':'მგზავრობა 25 ლარი',
	'imageURL':'images/website/gudauri.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'Гудаури',
	'raceDescription':'Поездка 25 лари',
	'imageURL':'images/website/gudauri.jpg'
})


raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'BAKURIANI',
	'raceDescription':'Travel 25 GEL',
	'imageURL':'images/website/bakuriani.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'ბაკურიანი',
	'raceDescription':'მგზავრობა 25 ლარი',
	'imageURL':'images/website/bakuriani.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'БАКУРИАНИ',
	'raceDescription':'Поездка 25 лари',
	'imageURL':'images/website/bakuriani.jpg'
})

