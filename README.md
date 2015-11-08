# Receptek - 1. beadandó - Alkalmazások fejlesztése
  Megvalósítás: Szerveroldali technológiák segítségével

## I. Követelményanalízis
  - Funkcionális elvárások:
      Felhasználóként szeretném elmenteni a receptjeimet, és később visszanézni őket. (Receptek felvitele és listázása)
  - Nem funkcionális követelmények:
      Felhasználóbarát kinézet, egyszerű és egyértelmű navigáció.
      Biztonságos működés - jelszóval védett tartalom.
  - Szerepkörök:
      
      Vendég: Csak a főoldal érhető el számára, lehetősége van regisztrálni.
      Felhasználó: Bejelentkezhet a felhasználónevével és jelszavával, ezután láthatóvá válnak a feltöltött receptjei.
  - Használati eset diagramok:
      ![haszn_eset](https://cloud.githubusercontent.com/assets/14230720/11021275/576fcb1e-863c-11e5-9733-21bfd4ca0aa6.png)

  - Folyamatok pontos menete:

      ![act_diagram](https://cloud.githubusercontent.com/assets/14230720/11021339/b27b0eb8-863e-11e5-95ff-02f2550565f1.png)


## II. Tervezés
  1. Architektúra terv:
    * Oldaltérkép:
        - Publikus: Főoldal, Bejelentkezés, Regisztráció
        - Felhasználói: Főoldal, Bejelentkezés, Kilépés, Receptlista, Új receptek felvitele

    * Végpontok:
        - GET /: főoldal
        - GET /login: bejelentkezés
        - GET /login/signup: regisztráció
        - GET /recipes/list: receptlista
        - GET /recipes/new: új recept felvitele
        - GET /logout: kilépés
        
  2. Felhasználóifelület-modell:
    * Oldalvázlatok:
        
      ![uj_recept](https://cloud.githubusercontent.com/assets/14230720/11021511/701e471a-8643-11e5-9e9b-2fb3175bfde9.jpg)
      
    * Designterv:
      
      ![designterv](https://cloud.githubusercontent.com/assets/14230720/11021527/f43e914e-8643-11e5-8009-264e80ebf2e0.png)

      ![designterv2](https://cloud.githubusercontent.com/assets/14230720/11021583/3a4a88a8-8646-11e5-84c6-4996a4db4fd9.png)

  3. Osztálymodell:
    * Adatmodell:
  
      ![adatmodell](https://cloud.githubusercontent.com/assets/14230720/11021549/dd661a90-8644-11e5-9e4b-d94047578bae.png)

    * Adatbázisterv:
    
      ![adatbterv](https://cloud.githubusercontent.com/assets/14230720/11021559/343a4328-8645-11e5-9ea8-bf73eb9a36fd.png)
    
## III. Implementáció
  - Fejlesztői környezet bemutatása:
      - Fejlesztői környezet gyanánt a Cloud9 webes IDE-t használjuk. Ez a c9.io weboldalról érhető el, rendelkeznünk kell           hozzá egy github felhasználói fiókkal. Belépés után egy demo projekt rendelkezésünkre is áll, amin keresztül                 megismerkedhetünk a felülettel.
        
  - Könyvtárstruktúrában lévő mappák funkiójának bemutatása:
      - config: waterline tároló-és keresőmotor konfigurációja.
      - controllers: főoldalon, bejelentkező oldalon és a receptlista oldalon történő navigációk; interakciók definiálása.
      - models: felhasználó és recept modellek definiálása.
      - node_modules: telepített modulok helye
      - public: stíluskönyvtárak helye
      - test: felhasználói és "zombi" tesztek definiálása. Teszteljük, hogy lehet-e létrehozni, keresni, módosítani egy adott         felhasználót, és hibát dob-e, ha rossz attribútumokat adunk meg, és igazzal vagy hamissal tér-e vissza a jó/rossz            jelszó megadása esetén. A zombi tesztnél egy felhasználói folyamaton megyünk végig: rálépünk a főoldalra,                    bejelentkezünk, rálépünk az 'új recept felvitelé'-re, ellenőrizzük, hogy jók-e a megadott űrlap adatok, és hogy              látjuk-e a receptlista oldalon az új receptünket.
      - views: a főoldal kinézetét és elrendezését állítjuk be.
          - login: bejelentkezési és regisztrációs felület kinézete és elrendezése.
          - recipes: receptlista és új recept felviteléhez szükséges űrlap oldal kinézete és elrendezése.
      - server.js: szerverfunkciók, kérések, válaszok implementálása.
  
## IV. Tesztelés
  - Tesztelési környezet bemutatása:
  - Egységtesztek:
  - Funkcionális felületi tesztek:
  - Tesztesetek felsorolása:
  
## V. Felhasználói dokumentáció
  - A futtatáshoz ajánlott hardver-, szoftver konfiguráció:
  - Telepítés lépései:
  - A program használata:
  
