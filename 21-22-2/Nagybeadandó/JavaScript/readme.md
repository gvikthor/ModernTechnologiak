# JavaScript beadandó algoritmus segítség

Adott egy mező "típus", amiben a `sor` és `oszlopindex` értelemszerű, a `negyed`  megadja, hogy hanyadik negyedben van az adott mező (0, 1, 2, 3), a `bábu` pedig megadja, milyen bábu van oda lehelyezve (Ü, A, B, C, D; ahol Ü az üres mező)

`mező : {sor_index : egész, oszlop_index : egész, negyed : egész, bábu : szöveg}`

`játéktábla : mátrix[[mező...]...]`

Tegyük fel, hogy a felhasználó a **2. sor 3. oszlopba** szeretné letenni a **C bábut**. Ellenőrizzük, hogy ez szabályos lépés-e!
```
helyes_lépés = IGAZ
CIKLUS játéktábla MINT sor ÉS helyes_lépés:
    CIKLUS sor MINT mező ÉS helyes_lépés:
        sor_egyezik    = (mező.sor_index == 2)
        oszlop_egyezik = (mező.oszlop_index == 3)
        negyed_egyezik = (mező.negyed == játéktábla[2][3].negyed)

        HA sor_egyezik ÉS oszlop_egyezik:
            helyes_lépés = (mező.bábu == "Ü")
        EGYÉBKÉNT HA sor_egyezik VAGY oszlop_egyezik VAGY negyed_egyezik:
            helyes_lépés = (mező.bábu != "C")
```

Tegyük fel, hogy a felhasználó letette a **C bábut** a **2. sor 3. oszlopba**. Nézzük meg, nyert-e! Ennél a megoldásnál feltételezem, hogy minden lépés helyes volt eddig, és ez is az!
```
bábuk_a_sorban = 0
bábuk_az_oszlopban = 0
bábuk_a_negyedben = 0
CIKLUS játéktábla MINT sor ÉS lehet:
    CIKLUS sor MINT mező ÉS lehet:
        sor_egyezik    = (mező.sor_index == 2)
        oszlop_egyezik = (mező.oszlop_index == 3)
        negyed_egyezik = (mező.negyed == játéktábla[2][3].negyed)

        HA sor_egyezik:
            bábuk_a_sorban++
        HA oszlop_egyezik:
            bábuk_az_oszlopban++
        HA negyed_egyezik:
            bábuk_a_negyedben++

győzelem = (bábuk_a_sorban == 4 VAGY bábuk_az_oszlopban == 4 VAGY bábuk_a_negyedben == 4)
```

**Ezek nem a leghatékonyabb megoldások, sőt, elég rosszak, de átláthatóak és könnyen megértheőek. Aki szeretné, nyugodtan javítsa őket, vagy írjon sajátot. Ez csak egy segítség azoknak, akik nem szeretnek programozáselmélettel foglalkozni. JavaScriptben nagyon szép funkcionális megoldást lehet rá írni.**