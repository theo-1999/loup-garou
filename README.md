# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
  L'intérêt de Material UI est que l'on peut utiliser directement des éléments déjà stylisé 
- Comment importer `material-ui` dans un fichier ?
 import <le nom de l'élément> from "@material-ui/core/<l'élément>"
- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
- A quoi sert `createMuiTheme` ?
  A personnaliser les éléments material-ui
- A quoi correspond `palette` ?
  Aux couleurs des éléments material-ui
- Comment re-définir des propriétés ?
  Grace a la propriété overrides
- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
  il fait penser au withAutorization . A l'aide de props (asseez similaire au withAutorization)
- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.
  

  import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
  import blue from '@material-ui/core/colors/blue' ;
  class App extends React.Component {
      render() {
          return(
          <MuiThemeProvider theme={theme}>
                <div>
                    <Button className ={this.props.classes.myLeftButton}> btn 1 </Button>
                    <Button> btn 2</Button>
                </div>
          </MuiThemeProvider>
          )
      }
      
  }
  const theme = createMuiTheme ({
    palette :{
        primary : blue 
    },
    
    typography :{
        fontSize : 15, 
        fontFamily : "Arial"
    },
    
    overrides :{
        MuiButton :{
            root: {
                backgroundColor : "red",
                "&:hover": {backgroundColor : "yellow"}
            }
        }
    }
  })

  const styles = {
    myLeftButton : {
        backgroundColor :"blue"
    }
  }
  
  export default  withStyles(styles)(App);

## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
  La fusion entre CSS et Javascript pour que le design soit plus lisible et plus simple (dans le code ) 
- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
  Un tableau de propriétés CSS 
- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
  Sans :
    import styled from 'styled-components';
    
    <Bouton> btn 1 </Bouton> //le bouton est dans le return d'une class App 
    
    export const Bouton = styled.button([color : blue;"])

  Avec :
    import styled from 'styled-components';
    
    <Bouton> btn 1 </Bouton> //le bouton est dans le return d'une class App
    
    export const Bouton = styled.button `color : blue;`
    
    
- Comment utilise-t-on les props dans cette librarie ?
  ${props => props.monprops ? "1" : "2"};
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
    
    import styled from 'styled-components';
    
    <Bouton> btn 1 </Bouton> //le bouton est dans le return d'une class App
    <Bouton> btn 2 </Bouton> //le bouton est dans le return d'une class App   

    export const Bouton = styled.button `
    background-color : blue; 
    
    &+& {background-color : red}
    
    &:hover {background-color : yellow}
    
   
    `
- Quelles sont les fonctions du contexte de styled-components ?


## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?
- Comment récupérer les props dans une fonction ?
  const blablabla= (props) => {
- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
  UserProvider, GameProvider, MasterGameProvider défini dans les fichiers Game.js MasterGame.js et User.js Master et Game partage game tandis que User partage user 
- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
    AlivePage : Défini notre role 
    CastPage : Permet de voter 
    CodePage : Permet de rejoindre une partie 
    CreatePage : Permet de créer une partie 
    DeadPage : C'est quand on est mort 
    EndPage : Ecran de fin qui affiche les résultats 
    NightPage : C'est la nuit 
    ResultsPage : C'est la page qui compile est affiche le résultats des votes pendant la partie 
    SpellPage : C'est les pouvoirs de la sorcière 
    StartPAge : C'est la page d'acceuil 
- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
  Parce qu'il y a plusieurs choses qui charges 
- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
  C'est la fonction gameContext
- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.
  Grace a la fonction onChange qui permet de récuperer ce qui est écrit à chaque modifications de l'input 

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
- A votre avis, à quoi sert useEffect ?
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
- Décrire les trois valeurs de retour de `UseUser`.
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

