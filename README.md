# BoredGame

![teamLogo](https://user-images.githubusercontent.com/92563217/152058492-73ba23ce-847c-48a7-aa98-03fcd1424eed.jpg)


## Project Overview

BoredGame is an online platform to play board games with friends. A user may sign in to select a board game to be hosted online and played locally. Our vision is to start with a single game, and build out the catalog over time. 


## Team Expectations:
https://docs.google.com/document/d/1jPYh7i8NpYU8OhFO3R_PLyrBID4du4Nm7BLD5SFoG8Y/edit
## Wireframes
#### Landing Screen
![Landing screen wireframe](./.github/img/Landing.png)

#### Home Screen
![Home screen wireframe](./.github/img/Home.png)

#### Log In Screen
![Log In screen wireframe](./.github/img/Login.png)

#### Sign Up Screen
![Sign Up screen wireframe](./.github/img/Signup.png)

#### Account Info Screen
![Account Info screen wireframe](./.github/img/AccountInfo.png)

#### Edit Account Info Screen
![Edit Account Info screen wireframe](./.github/img/EditAccountInfo.png)

#### Game View Screen
![Game View Screen wireframe](./.github/img/GameView.png)

#### Saved Screen
![Saved games screen wireframe](./.github/img/Saved.png)

#### 404 Error Screen
![404 Error scree wireframe](./.github/img/404Page.png)

###### [Wireframes created with Figma](https://www.figma.com/)

## Component Hierarchy
![BoredGame@2x (1)](https://user-images.githubusercontent.com/93221807/152036555-acfe1fd7-089b-44b7-b455-34cb297c6c6e.png)

## Schemas
This project uses the following schemas for data storage:
```
const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        password_digest: { type: String, required: true },
        games: [{gameSchema}]
    },
    { timestamps: true }      
);

const gameSchema = mongoose.Schema(
    {
        playerNames: [{playerSchema}],
	    territories: [{territorySchema}],
        turn: { type: String, required: true }
    },
    { timestamps: true }
);

const playerSchema = mongoose.Schema(
    {
        name: { type: String, required: true, trim: true }
    },
    { timestamps: true }
);

const territorySchema = mongoose.Schema(
    {
        value: { type: String, required: true }, //name of the terr
        cardOwner: { type: String, required: true }, //player
        troops: { type: Number, required: true },// amount of troops
        territoryOwner: { type: String, required: true }
    },
    { timestamps: true }
);
```

### MVP/PostMVP
We have setup our MVP and PMVP in our [Kanban](https://kanbanflow.com/board/WM5JWRc). 
(Please provide us with email in order for you to have access.)


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building Backend Routes| H | 3hrs| hrs | hrs |
| Building Backend Controllers| H | 3hrs| hrs | hrs |
| Backend Auth | H | 3hrs| hrs | hrs |
| Deploying Backend| H | 3hrs| hrs | hrs |
| Pseudo Coding | M | 3hrs| hrs | hrs |
| Building Frontend Components | H | 3hrs| hrs | hrs |
| Styling Components | M | 3hrs| hrs | hrs |
| Building Gameplay | H | 3hrs| hrs | hrs |
| Styling Game Display | M | 3hrs| hrs | hrs |
| Cleaning Code | M | 3hrs| hrs | hrs |
| Debugging | H | 3hrs| hrs | hrs |
| Deploying Frontend| H | 3hrs| hrs | hrs |
| Total | H | 36hrs| hrs | hrs |
