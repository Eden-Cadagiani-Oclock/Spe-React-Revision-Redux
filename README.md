# Revision-Redux

## Etapes
0. Installer avec `yarn`. Lancer avec `yarn start`

1. Créer un reducer ultra simpe avec ce initialState: (dans le fichier `reducers/formUserReducer.js`)
```js
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: ''
};
```

2. Creer le store avec redux-dev-tools (dans le fichier `store/index.js`)

3. Ajouter le Provider dans `src/index.js`
> Testez si vous voyez le store avec le redux-dev-tools

4. Ouvrez le container `src/containers/FormUser.js` et connecter les constantes `firstName, lastName, etc` au store (avec useSelector)
> Testez si la connection est bien faites en modifiant le initialState

5. Créer une action (et son actionCreator) dans le fichier `src/actions/formUserActions.js`) qui permet de modifier la valeur des inputs (firstName, lastName, etc), en passant le nom de l'input et sa valeur.

6. Ajouter cette action dans le reducer `reducers/formUserReducer.js`

7. Dans le container `FormUser.js` ajouter le dispatch de cette action dans la fonction `handleValueChange`
> Testez en modifiant les inputs

8. Créer un nouveau reducer `reducers/loggedUserReducer.js` et ajouter le dans le store (avec `combineReducers`)
```js
const initialState = {
    pseudo: ''
};
```

9. Dans le container `src/containers/LoggedUser.js` connectez la constante `pseudo` au store
> Testez si la connection est bien faites en modifiant le initialState

10. Créer une action `SET_PSEUDO` et son action creator dans `src/actions/loggedUserActions` qui modifie le pseudo dans le reducer
> Testez en envoyant cette action avec redux-dev-tools

11. Dans le container `src/containers/FormUser.js` ajouter le dispatch de cette action dans la fonction `handleSubmit` (pas besoin de faire de `preventDefault()` le composant s'en occuoe déjà). Le pseudo est généré grace à la 1er lettre du firstName, suivi de l'ensemble du lastName, le tout en minuscule.

## BONUS
1. Faites en sorte que la modification du pseudo ce fasse dans un middleware redux
2. Ajouter une gestion des erreurs sur le `password` et `repeatPassword` https://mui.com/components/text-fields/#validation