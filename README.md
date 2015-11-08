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
    * Komponensdiagram:
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

  3. Osztálymodell:
    * Adatmodell:
  
      ![adatmodell](https://cloud.githubusercontent.com/assets/14230720/11021549/dd661a90-8644-11e5-9e4b-d94047578bae.png)

    * Adatbázisterv:
    
      ![adatbterv](https://cloud.githubusercontent.com/assets/14230720/11021559/343a4328-8645-11e5-9ea8-bf73eb9a36fd.png)
      
    * Állapotdiagram:
  4. Dinamikus működés:
    * Szekvenciadiagram:

## III. Implementáció
  - Fejlesztői környezet bemutatása:
  - Könyvtárstruktúrában lévő mappák funkiójának bemutatása:
  
## IV. Tesztelés
  - Tesztelési környezet bemutatása:
  - Egységtesztek:
  - Funkcionális felületi tesztek:
  - Tesztesetek felsorolása:
  
## V. Felhasználói dokumentáció
  - A futtatáshoz ajánlott hardver-, szoftver konfiguráció:
  - Telepítés lépései:
  - A program használata:
  
