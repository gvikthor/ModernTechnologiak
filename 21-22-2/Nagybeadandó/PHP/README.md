# Webprogramozás – PHP beadandó

## Bevezető

Ki ne szeretne sorozatokat nézni? Egyetemistaként azonban talán erre kevesebb idő jut, mint amennyit szeretnénk, így mire legközelebb a képernyő elé jutunk, már el is felejtettük, hogy hol tartottunk... kivéve, ha van egy olyan webes alkalmazásunk, ahol követni tudjuk a sorozatnézési folyamatot. Pontosan egy ilyen oldal elkészítése lesz most a feladat!

## Feladatok

### Előkészületek
- Az alkalmazásban szükségünk lesz sorozatokra, melyeknek rögzíteni tudjuk, hanyadik évas hanyadik részénél járunk.
    - Könnyítés képp egy-egy sorozatban minden évad ugyanannyi részből áll (de sorozatonként ez a szám eltérhet).
- A sorozatok világa nagyon dinamikus, hetente jelennek meg újabb és újabb címek, amiket követni szeretnénk, így lehetőséget kell bizotsítani új sorozat hozzáadására.
- Persze nem szeretnénk, hogy bárki belenyúlhasson az adatainkba, így csak bejelentkezést követően szabad engedélyezni a szerkesztést.
- Sajnos általában nincs időnk minden sorozatot együtt nézni, így több felhasználóra van szükségünk, akik külön-külön jelölni tudják, hol tartanak a sorozatban.
- Végül, de nem utolsó sorban szeretnénk, ha csak egy admin felhasználó adhatna hozzá új sorozatrészeket.
    - Fontos: Ha azt nem tudtad megoldani, hogy minden felhasználó külön-külön listával rendelkezzen, hanem ha Áron módosítja, hol jár, akkor Gergőnél is módosul, az nem baj ennek a részfeladatnak a szempontjából. Ha csak az Admin felhasználó tud új sorozatot hozzáadni, ezt már kipipálhatod, hiába nem működik a többi user funkció!

### Javasolt oldalak
- **Főoldal** (bejelentkezés nélkül)
    - Kilistázzuk a sorozatokat: cím, évadok száma, részek száma egy évadban.
    - Lehetőség van bejelentkezni névvel és jelszóval.
- **Főoldal** (bejelentkezve, nem admin)
    - Kilistázzuk a sorozatokat: cím, évadok száma, részek száma egy évadban.
    - Lehetőség van megváltoztatni, hol játunk az adott sorozatban.
    - Lehetőség van kijelentkezni.
- **Főoldal** (bejelentkezve, admin)
    - Kilistázzuk a sorozatokat: cím, évadok száma, részek száma egy évadban.
    - Lehetőség van új sorozatot hozzáadni, megadva az évadok számát, és a részek számát egy évadban.
    - Lehetőség van kijelentkezni.
- **Léptető oldal** (segédoldalként működik egy űrlapon keresztül)
    - Ha a felhasználó nincs bejelentkezve, és ide navigál, visszadobjuk a főoldalra.
    - Ha a felhasználó be van jelentkezve, de hiányosak a GET paraméterek, visszadobjuk a főoldalra.
    - Ha a felhasználó be van jelentkezve, és jók a GET paraméterek (tipikusan mert az űrlapunkon keresztül érkezett), frissítjük a megadott sorozatát, és visszairányítjuk a főoldalra.
- **Hozzáadó oldal** (segédoldalként működik egy űrlapon keresztül)
    - Ha a felhasználó nincs bejelentkezve, vagy be van, de nem admin, visszadobjuk a főoldalra.
    - Ha a felhasználó be van jelentkezve és admin, de hiányosak a GET paraméterek, visszadobjuk a főoldalra.
    - Ha a felhasználó be van jelentkezve, admin és jók a GET paraméterek (tipikusan mert az űrlapunkon keresztül érkezett), hozzáadjuk az új sorozatot.
- **Bejelentkező oldal** (segédoldalként működik egy űrlapon keresztül)
    - Ha a felhasználó már be van jelentkezve, visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, de hiányosak a POST paraméterek, visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, és ki vannak töltve a POST paraméterek, de rosszak az adatok (pl. hibás jelszó), visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, ki vannak töltve a POST paraméterek és jók az adatok, bejelentkeztetjük és visszairányítjuk a főoldalra.
- **Kijelentkező oldal** (segédoldalként működik egy űrlapon keresztül)
    - Ha a felhasználó nincs bejelentkezve, visszadobjuk a főoldalra.
    - Ha a felhasználó be van jelentkezve, kijelentkeztetjük és visszairányítjuk a főoldalra.
- **Regisztráló oldal** (segédoldalként működik egy űrlapon keresztül; **extra feladat**)
    - Ha a felhasználó már be van jelentkezve, visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, de hiányosak a POST paraméterek, visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, és ki vannak töltve a POST paraméterek, de rosszak az adatok (pl. van már ilyen felhasználónév), visszadobjuk a főoldalra.
    - Ha a felhasználó nincs bejelentkezve, ki vannak töltve a POST paraméterek és jók az adatok, regisztráljuk, bejelentkeztetjük és visszairányítjuk a főoldalra.
- **Infó oldal** (**extra feladat**)
    - A GET paraméterben kapott ID-jú sorozat neve megjelenik nagy címként.
    - A GET paraméterben kapott ID-jú sorozat információi megjelennek valamilyen módon, például táblázatban.

### Ellenőrzés
A csoportos beadandóhoz hasonlóan ne lehessen "hülyeséget" megadni az egyes értékeknek. Tehát ha a felhasználó megpróbálja bejelölni, hogy a negyedik évadban ját egy 3 évados sorozatban, azt ne engedélyezzük, hanem feltöltés nélkül dobjuk a főoldalra. Hasonlóan, ha megpróbálja bejelölni, hogy a qwe-dik résznél jár, ne engedjük neki.

### Adatok
Az adatokat sokféleképpen lehet tárolni, például a lentebb olvasható modon is. Ez nem kötelező, bármilyen struktúrát használhattok, ami kényelmes, a lényeg, hogy nektek logikus és átlátható legyen (de természetesen a tárolást maradandóan kell megoldani, például JSON vagy SQL segítségével).
```PHP
$series = [
    (object)[
        'id' => 0,
        'title' => 'The Mandalorian',
        'seasons' => 3,
        'episodes' => 6
    ],
    (object)[
        'id' => 1,
        'title' => 'Wanda-Vision',
        'seasons' => 1,
        'episodes' => 10
    ],
    (object)[
        'id' => 2,
        'title' => 'Friends',
        'seasons' => 10,
        'episodes' => 24
    ]
];

$users => [
    (object)[
        'id' => 0,
        'username' => 'Áron',
        'password' => '$2y$10$iXyTJiNVrSonSDICX8PcFul8i9Kzv.yjt6ZAs/5TIOhNEPHIVe2ma',
        'watched' => [
            [2,5],  // 0. index -> 0. ID -> The Mandalorian    így könnyű
            [1,10], // 1. index -> 1. ID -> Wanda-Vision       lesz a listázásnál
            [7,18]  // 2. index -> 2. ID -> Friends            beleindexelni   
        ]
    ],
    (object)[
        'id' => 1,
        'username' => 'Gergő',
        'password' => '$2y$10$YKdZxPV9ZIKxHEwrGENZgOdAxk0PgDZmHtkUAJbWNFQHPsi7FCmp6',
        'watched' => [
            [3,6],
            [0,0], // a 0,0 jelentheti azt, hogy még nem kezdte el
            [8,20]
        ]
    ],
    (object)[
        'id' => 1,
        'username' => 'Laura',
        'password' => '$2y$10$UnqpOyPUiHmLx9zBkcCoLeBV1Dn3JqILoFQOVA39unAxmEFv/jJva',
        'watched' => [
            [0,0],
            [0,0],
            [10,24]
        ]
    ]
]
```

## A fejlesztés lépésekre bontása

Szeretnénk azoknak is segítséget nyújtani, akiknek nehezebb egy nagyobb feladatot átlátni, megtervezni. Lehet az egész feladatot előre megtervezni, és utána fejleszteni, de az alábbi lépések kisebb részfeladatok megoldásánál is használhatók.

### 1. Prototípus
Készítsd el a fejlesztendő alkalmazás statikus HTML prototípusát! Azaz első lépésben csak HTML és CSS segítségével tervezd meg a listaoldalt, a részletező oldalt, stb. Vannak olyan oldalak, ahol vannak feltételes információk, mint pl. az epizódott megtekintettnek jelölő gomb/hivatkozás vagy az admin oldalakra vezető linkek. Ezeket is tervezd meg, majd később PHP-val eltünteted. A CSS-t is ki tudod próbálni statikusan, pl. hogy az egyes epizódok hogyan jelenjenek meg, ezt statikusan beégetheted. Az egyes oldalakat linkekkel kötheted össze.

### 2. Adatok
Gondold át, hogy milyen adatokra lesz szükséged. Mit kell tárolni, azokban milyen mezőket? 
- Hol tárolod a felhasználókat?
- Hol tárolod a sorozatokat?
- Hol tárolod az egyes sorozatok epizódjait?
- Hogyan tárolod azt, ha a felhasználó megnézettnek jelöl egy epizódot?

### 3. Listázás
Gondold át, hogy az előbb átgondolt adatszerkezetekből hogyan tudod az oldalaid számára a megfelelő adatokat kinyerni? Készíts ezekhez egy-egy függvényt, de sokkal jobb, ha ezeket az adott Storage osztály metódusaiként implementálod.
- Hogyan kapod vissza a sorozatokat?
- Hogyan kapom vissza a nézettségi adatot?

### 4. Űrlap
Az űrlapoknál nem elég, ha be tudjuk írni az adatokat, valaminek történni is kell.
- Siker esetén mi történjen?
- Mi számít rossz adatnak?
- Hibát hogyan érzékelem, hogyan kezelem?

## Pontozás

### Minimálisan teljesítendő
6 pont, ezek mindegyike kötelező!
- 2 pont: A sorozatok listája megjelenik. Látszik, a sorozatnak hány része van.
    - Minimálisan teljesítendőhöz nem szükséges évadokkal dolgozni!
- 2 pont: Változtathatjuk, hol tartunk a sorozattal.
    - Minimálisan teljesítendőhöz nem szükséges bejelentkezés!
- 2 pont: Hozzá tudunk adni új sorozatot.
    - Minimálisan teljesítendőhöz nem szükséges admin belépés!
    - Figyelj rá, ha a tárolási módszered megköveteli, lehet, hogy a felhasználók file-t is módosítanod kell. Például a minta adatokban, ha hozzáadunk egy új sorozatot, minden felhasználóhoz hozzá kell adni egy [0,0] elemet.

### További elvárások
Továbbra is össze kell szedni 14 pontot, tehát a minimálisan teljesítendőkön felül 8 pontot össze kell szedni!
- Űrlapok (Ezt PHP-val kell kezelni szerveroldalon, nem a HTML+JavaScript kliensoldali validálásával!!):
    - 1 pont: A nézettség változtató űrlap rész/évad mezője nem fogad el túl nagy számot, negatív számot, szöveget.
    - 1 pont: Az új sorozat hozzáadása űrlap rész/évad mezője nem enged negatív számot, nulla részt/évadot, szöveget.
- A sorozatoknak nem csak részei, hanem évadai is vannak:
    - 2 pont: A listázásnál ez megjelenik.
    - 2 pont: Tudjuk változtatni azt is, melyik évadnál járunk.
- Autentikáció lehetősége:
    - 3 pont: Be- és ki lehet jelentkezni (akár csak egy gomb segítségével).
    - 3 pont: Felhasználónév/jelszó párral lehet bejelentkezni.
    - 2 pont: Van egy 'Admin' nevű felhasználó 'admin' jelszóval.
- Autentikáció funkciói:
    - 3 pont: Csak bejelentkezve jelenik meg, hogy hol tartunk a sorozatban.
    - 3 pont: Csak bejelentkezve változtathatjuk, hol tartunk a sorozatokban.
    - 3 pont: Csak az admin adhat hozzá új sorozatot.
    - 6 pont: A felhasználók függetlenek egymástól, mindenki más-más helyen járhat a sorozataiban.
- Késés:
    - -3 pont: 1 hét késés
    - -3 pont: +1 hét késés
    - -100 pont: 2 hétnél több késés

### Plusz pontok
- 1 pont: A jelszavak titkosítva kerülnek tárolásra.
- 2 pont: Az űrlapok a hibaüzeneteket jelzik a felhasználónak.
- 3 pont: Lehet regisztrálni név és jelszó megadásával.
- 4 pont: Amikor adinként új sorozatot veszünk fel a listába, meg lehet adni további adatokat is. Ha rákattintunk a listázott sorozatok közt valamelyikre, egy új oldalra visz, ahol a sorozat címe nagyban főcímként szerepel, a további adatai (például megjelenés éve, leírás, szereplők) pedig alatta látszódnak.

### Readme
- Az elkészült feladatot tömörítve, az összes szükséges állománnyal, illetve a program gyökérmappájában elhelyezett `README.md` fájllal együtt legkésőbb a határidőig kell feltölteni a Canvas rendszerbe.
- **A megvalósításához NEM használható semmilyen PHP keretrendszer vagy külső PHP függvénykönyvtár.** Csak CSS keretrendszerek használhatók.

```txt
<Hallgató neve> 
<Neptun kódja> 
Webprogramozás - számonkérés
Ezt a megoldást a fent írt hallgató küldte be és készítette a Webprogramozás kurzus számonkéréséhez.
Kijelentem, hogy ez a megoldás a saját munkám. Nem másoltam vagy használtam harmadik féltől 
származó megoldásokat. Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé. 
Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere 
(ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, hogy mindaddig, 
amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét - 
saját munkájaként mutatja be, az fegyelmi vétségnek számít. 
A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.

[ ] 2 A sorozatok listája megjelenik. Látszik, a sorozatnak hány része van.
[ ] 2 Változtathatjuk, hol tartunk a sorozattal.Minimálisan teljesítendőhöz nem szükséges bejelentkezés!
[ ] 2 Hozzá tudunk adni új sorozatot.
[ ] 1 Űrlapok: A nézettség változtató űrlap rész/évad mezője nem fogad el túl nagy számot, negatív számot, szöveget.
[ ] 1 Űrlapok: Az új sorozat hozzáadása űrlap rész/évad mezője nem enged negatív számot, nulla részt/évadot, szöveget.
[ ] 2 Évadok: A listázásnál ez megjelenik.
[ ] 2 Évadok: Tudjuk változtatni azt is, melyik évadnál járunk.
[ ] 3 Autentikáció: Be- és ki lehet jelentkezni (akár csak egy gomb segítségével).
[ ] 3 Autentikáció: Felhasználónév/jelszó párral lehet bejelentkezni.
[ ] 2 Autentikáció: Van egy 'Admin' nevű felhasználó 'admin' jelszóval.
[ ] 3 Autentikáció: Csak bejelentkezve jelenik meg, hogy hol tartunk a sorozatban.
[ ] 3 Autentikáció: Csak bejelentkezve változtathatjuk, hol tartunk a sorozatokban.
[ ] 3 Autentikáció: Csak az admin adhat hozzá új sorozatot.
[ ] 6 Autentikáció: A felhasználók függetlenek egymástól, mindenki más-más helyen járhat a sorozataiban.
[ ] -3 1 hét késés
[ ] -3 +1 hét késés
[ ] -100 2 hétnél több késés
[ ] 1 A jelszavak titkosítva kerülnek tárolásra.
[ ] 2 Az űrlapok a hibaüzeneteket jelzik a felhasználónak.
[ ] 3 Lehet regisztrálni név és jelszó megadásával.
[ ] 4 Sorozat információs oldala.
```
