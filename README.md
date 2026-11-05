# React Assigment 4: Gutendex

Due: **_5.11.26_** by 11.59 pm
Canvas Link (Source of assigmnet txt):
"https://jobloop.instructure.com/courses/557/assignments/11974"

<!-- Add hyperlink to assignment text! and translate. -->

## My thoughts and ideas:

Documentation on API link "https://gutendex.com/"

Pretty straightforward assignment, with a challenge of our freshly learned knowledge and a good way to put our knowledge to use!
It is however a bit of things to get done:

- CleanUp install template and prep folders and base files. [x]
- As far as I can gleam from the assignment text this need to be brokenm down into smaller components to have a more readable, easy to manuover and edit set up. I will need to split it into different parts and while it may be backwards I want to start with the one that fetches the data from the API after I've read the documentation which to my joy seems to be a well written and thorough one! []
- The different components and possibly context(by that i mean it will be available in the folder named context) files:
  - Header(searchbar) []
  - searchbar component -> Input field [], button to fetch maching result (function) []
  - dropdown (categories) component (that fetches maching category) []

- ! NOTE: study up on routing in react, as it will be needed to fetch the detail pages for each book. []
  - The book pages will need a reusable layout, I'm thinking breaking into a smaller component set could be smart, but I think it could also be fetched with jsx syntaxes in one file, with as much dynamic and flexible code as possible.

- **Proof of concept** - making the baseline that I can build on later:
  - ! Note that I will be leaving comments in a lot of the files, components and contexts to be able to continue building on this and expand the page beyond proof of concept, please excute this as it will probably look a little messy, but they are left there for a good reason.
  - Build the needed components for the baseline, make most things beyond the bookDetail page be dropdown or pop ups on the same page. []
  - Might need to make a seperate component to be able to fetch different sets of data in one place and then store those data sets in easier to use variables, so that I can call the fetch of specific obj from the api without having to write the code for each need in each file.

# Assigment text:

## Gutendex React-prosjekt: Lag en Bokapplikasjon

I dette prosjektet skal du bruke det du har lært i React for å lage en applikasjon som integrerer med Gutendex APILinks to an external site.. Formålet er å bygge en funksjonell og brukervennlig løsning som lar brukere søke etter og utforske bøker, samt administrere favoritter.

### **Krav til innhold og funksjonalitet**

1.  **Søke etter bøker**
    - Applikasjonen skal ha en header med et søkefelt hvor brukere kan søke etter spesifikke boktitler.
    - Søkeresultatene skal vises som en liste, og du skal implementere paginering ved hjelp av API-ets innebygde funksjonalitet for å bla gjennom resultatene.
2.  **Kategorimeny**
    - Applikasjonen skal ha en meny med lenker til følgende bokkategorier:
      - Fiction
      - Mystery
      - Thriller
      - Romance
      - Fantasy
      - Morality
      - Society
      - Power
      - Justice
      - Adventure
      - Tragedy
      - War
      - Philosophy

    - Når brukeren klikker på en kategori, skal applikasjonen gjøre et API-kall til /books?topic=kategori og vise bøkene som tilhører denne kategorien. Menyen kan gjerne plasseres i headeren for enkel tilgang.

3.  **Favorittbøker**
    - Applikasjonen skal ha en funksjon for å lagre favorittbøker. Dette må være tilgjengelig via en egen **lenke i menyen/headeren.**
    - Favorittbøker skal lagres i **localStorage** slik at de forblir tilgjengelige selv om siden oppdateres.
    - Når brukeren klikker på "Favoritter", skal en liste over favorittbøkene vises.
4.  **Bokdetaljer**
    - Ved å klikke på en bok fra søkeresultatene eller kategorioversikten, skal brukeren tas til en detaljside som viser informasjon om den valgte boken.
    - Informasjonen på detaljsiden skal inkludere:
      - Boktittel
      - Coverbilde
      - Forfatter
      - Antall nedlastninger
      - Kategori
      - Språk
      - Lenke til boka i digitalt format
      - En knapp for "Legg til i Favoritter"

### **Tekniske krav**

1.  Routing
    - Bruk createBrowserRouter fra react-router-dom for å sette opp routing i applikasjonen.
    - Kategorilinker og individuelle bøker skal bruke dynamiske lenker.
    - Header/meny skal alltid være synlig, uansett hvilken side brukeren er på.

2.  State-håndtering
    - Bruk Reacts state til å håndtere applikasjonsdata, som søkeresultater, kategoribøker og favoritter.
    - Implementer visning av loading-status og feilmeldinger dersom API-kall tar tid eller mislykkes.

3.  Styling
    - Du kan bruke hvilken som helst tilnærming til CSS (global CSS, CSS-moduler, eller tredjeparts stylingbiblioteker som Styled Components eller Material-UI).
    - Applikasjonen skal være responsiv, og tilpasse seg ulike skjermstørrelser.

4.  API-dokumentasjon
    - Bruk dokumentasjonen til Gutendex APILinks to an external site. for å forstå hvordan du henter data.

### Tips

- Begynn med å sette opp grunnstrukturen for prosjektet, inkludert routing og komponenter.
- Del opp oppgaven i mindre deler, som for eksempel søkefunksjonalitet, kategorilister og favoritter.
- Test underveis for å sikre at hver funksjonalitet fungerer før du går videre.
- Hvis du står fast, ta kontakt med en medelev eller veileder.

## Lykke til!

Dette prosjektet gir deg en god mulighet til å trene på React og lære hvordan du bygger dynamiske og interaktive applikasjoner. 🚀
