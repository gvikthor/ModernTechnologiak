# Csoportos beadandó
## Közös előkészítés
- Egy nagy program készítése során fontos, hogy először közösen beszéljétek át a követelményeket és elvárásokat.
- Ezt követően a közös erőforrásokat meg kell alapozni (például kiinduló HTML kód, JavaScript változók és elemek), valamint a függvények bemeneti és kimeneti paramétereiben meg kell állapodnotok.
- Ha ez megvan, osszátok fel azokat a feladatokat, amik egymástól függetlenül is tudnak működni, és készítsétek el őket. Ezeket a konzolból futtatva külön-külön is tudjátok tesztelni, amíg nincs összeépítve. Ha egy függvénynek olyan információra van szüksége, amit egy másiktól kapna, de azt nem te készíted, helyettesítsd olyan adattal, ami hasonlít az adott függvény eredményére - ezt meg tudod tenni, hiszen korábban egyeztettétek, az egyes függvényeknek mi lesz a kimenete.
- Az egyes függvények írása közben lehetőleg ne lássátok egymás kódját, csak a közösen specifikált kimeneti és bemeneti változókra hagyatkozzatok.
- A végén építsétek egybe a kis építőelemeiteket egy nagy programmá.
- A felosztható feladatok bekezdés mindenhol követelmény, legalább ezeknek a függvényeknek létezni kell. A függvények mellett kommentelve szerepeljen, hogy ki készítette.
- Az összeépítés fejezet mindenhol csak egy iránymutatás/mankó, nem elég csak az abban leírtakat teljesíteni, hiszen nem lesz teljes a program.

## Hasznos kódrészletek
### Véletlen generálás
```JS
Math.random() //ez generál egy véletlen számot a [0,1) intervallumban

Math.random()*18 //ez generál egy véletlen számot a [0,18) intervallumban

Math.floor(Math.random()*18) //ez generál egy véletlen egész számot a [0,18) intervallumban

Math.floor(Math.random()*t.length) //ez generál egy véletlen egész számot a [0,tömbhossza) intervallumban
```
### Objektumreferencák
JavaScriptben az objektumok (kapcsos zárójel, pythonban dictionary) mindig úgynevezett referenciaként kerülnek átadásra. Ez azt jelenti, hogy az objektumok nem másolódnak, csak egyre több helyről lehet elérni őket.
```JS
let a = {
  nev: 'László',
  kor: 25
}
let b = a
b.nev = 'Péter'
console.log(a.nev) // Péter
```
Ezt tömbökben is ki lehet használni, például ha egy bizonyos elemet módosítani szeretnénk.
```JS
let elemek = [{nev: 'Erik'}, {nev: 'Eszter'}, {nev: 'Tomi'}]
let c = elemek[2]
c.nev = 'Misi'
console.log(elemek[2].nev) //Misi
```

És ezt összeköthetjük például egy függvényes kereséssel.
```JS
let elemekIDvel = [{id: 135, nev: 'Erik'}, {id: 136, nev: 'Eszter'}, {id: 137, nev: 'Tomi'}]
function modify(elemek, id, ujnev){
    let elem = elemek.find(e => e.id == id)
    if(elem != undefined) elem.nev = ujnev
}
modify(elemekIDvel, 137, 'Misi')

console.log(elemekIDvel.find(e => e.id == 137)) //Object { id: 137, nev: "Misi" }
```

### Komplex tömbelem eltávolítása egyedi azonosítóval
```JS
let tomb = [
    {nev: 'Nándor', kor: 21},
    {nev: 'István', kor: 22},
    {nev: 'Áron',   kor: 22},
    {nev: 'Dalma',  kor: 23}
]
let elem = {}

// szedjük ki a tömbből Áront (tfh. a nevek egyediek), de úgy, hogy utána használhassuk
function kiszed(emberek){
    let aron = {}
    let nemaronok = []
    for(const ember of emberek){
        if(ember.nev == 'Áron'){
            aron = ember
        }else{
            nemaronok.push(ember)
        }
    }
    return [aron, nemaronok]
}

[elem, tomb] = kiszed(tomb)
```

## Akasztófa
A feladat egy (konzolból futtatható) akasztófa játék elkészítése.

### Felosztható feladatok
Készíts egy olyan függvényt, ami...
- paraméterként megkapja, hányadik lépést kell kirajzolni, és egy ahhoz tartozó képet rak az oldal megfelelő elemébe.
- vesz egy véletlen szót egy listából.
- egy adott szóhoz a megfelelő mennyiségű táblázatcellát (aláhúzást) üresen kigenerálja az oldal megfelelő elemébe.
- egy betűről megmondja, hogy az benne van-e egy megadott szóban, és ha igen, pontosan mely helyeken.
- kiír egy betűt egy számokat tartalmazó tömb alapján egy táblázatba (a megfelelő indexű helyekre), de mást nem módosít a táblázatban.
- növeli egy lépésszámláló értékét, és ha az egy megadott számhoz ért, kiír egy üzenetet, hogy vége a játéknak (vereség).
- ellenőrzi, hogy egy adott tömbben minden elem "igaz" értékű, és ha igen, kiír egy üzenetet, hogy vége a játéknak (győzelem).

### Összeépítés
- Legyen egy olyan függvényetek, ami elindítja/újraindítja a játékot. Ehhez ki kell üríteni minden eddigi változót, nehogy az előző játékból adatok maradjanak bent. Az indító függvény hívja meg a generáló függvényeket, vagyis válasszon egy szót, és rajzolja ki a játékteret.
- Legyen egy léptető függvény, ami paraméterül kap egy betűt. Ha ez a betű benne van az aktuális szóban, a megfelelő helyekre írjátok be a beíró függvénnyel, és egy tömbben a megfelelő indexű elemeket állítsátok igazra. Ha nincs benne, növeljétek a lépésszámlálót.
- A játéknak legyen vége, ha minden betűt kitaláltak, vagy a lépésszámláló eléri az általatok megadott maximumot.

## Torpedó
A feladat egy egyszemélyes (konzolból futtatható) tirpedó játék elkészítése. A gép kigenerál egy táblát, és a játékos azon hajókat próbál meg eltalálni.

### Felosztható feladatok
Készíts egy olyan függvényt, ami...
- generál egy hajólistát (hossz 2-5)
- generál egy paraméterként megkapott méretű véletlenszerű mátrixot (tömbök tömbje), amit feltölt hajókkal egy lista alapján.
- megmondja, hogy egy mátrix adott helyén található-e hajó.
- kirajzol egy megadott méretű táblázatot az oldalra, aminek a cellái üresek (vagy például a kékek, mint a víz)
- berajzol egy szimbólumot egy megadott helyre a táblázatba, annak függvényében, hogy paraméterként igaz (talált) vagy hamis (nem talált) értéket kap.
- kiír egy megadott számot az oldal lépésszámláló elemébe.
- kiír egy megadott számot az oldal találatszámláló elemébe.
- eltárol egy kapott indexpárt egy listába.
- megmondja, hogy egy kapott indexpár benne van-e egy listában.
- növel egy lépésszámlálót, és ha az egy megadott értékhez ér, kiír egy üzenetet, hogy vége a játéknak (vereség)
- növel egy találatszámlálót, és ha az elért egy megadott értéket, kiír egy üzenetet, hogy vége a játéknak (győzelem)

### Összeépítés
- Legyen egy olyan függvényetek, ami elindítja/újraindítja a játékot. Ehhez ki kell üríteni minden eddigi változót, nehogy az előző játékból adatok maradjanak bent. Az indító függvény hívja meg a generáló függvényeket, vagyis generáljon hajókat, és rajzolja ki a játékteret.
- Legyen egy léptető függvény, ami paraméterül kap egy indexpárt. Ha erre a helyre még nem lőttek korábban, odalő. Ha itt hajót talál, növeli a találatszámlálót. Ha itt nincs hajó, növeli a lépésszámlálót (tehát a lépésszámláló csak a mellélövéseket számolja). Mindkét értéket frissítsétek a felhasználói felületen is a megfelelő lépésekben.
- A játéknak legyen vége, ha minden hajó elsüllyedt (a találatok száma megegyezik a hajók összhosszával), vagy ha a lépésszámláló elér egy előre megadott értéket.

## Taskmenedzser
A feladat egy konzolból futtatható feladat-nyomonkövető alkalmazás készítése.

### Felosztható feladatok
Készíts egy olyan függvényt, ami...
- létrehoz egy feladatot (objektum), aminek van id-ja, neve, leírása, állapota ( `nincs elkezdve` , `elkezdve` , `kész` ) és felelőse.
- hozzáad egy feladatot egy tömbhöz.
- kifűz egy adott id-jű feladatot egy tömbből.
- átállítja egy megadott id-jű feladat nevét.
- átállítja egy megadott id-jű feladat leírását.
- átállítja egy megadott id-jű feladat állapotát.
- átállítja egy megadott id-jű feladat felelősét.
- kiválogatja egy tömbből a megadott állapotú elemeket egy másik tömbbe.
- kiválogatja egy tömbből a megadott felelősű elemeket egy másik tömbbe.
- kilistázza feladatok egy tömbjét az oldalra.

### Összeépítés
- Lehessen feladatokat létrehozni, úgy, hogy megadjuk a felelőst és a feladat nevét, és opcionálisan a leírását (ezt üresen lehet hagyni). Az ID automatikusan kerüljön kitöltésre. Ez kerüljön bele egy összesített feladatlistába, az állapota pedig legyen `nincs elkezdve` alapértelmezetten. A feladatlistában található elemeket lehessen törölni.
- Vonjátok össze a kiválogatásokat a listázással, hogy minden szűrőkombináció máködjön. Lehessen például csak elkezdett feladatokat listázni; csak Dénes feladatait listázni; csak Máté kész feladatait listázni.
- Lehessen bármely feladat bármely tulajdonságát szerkeszteni (kivéve természetesen az ID-t).