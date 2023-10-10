const games = [{
    gameName: "Counter-Strike 2",
    gameType: "Shooter",
    goodGame: true,
    ratings: [4.5, 5, 3, 4],
},
{   
    gameName: "Genshin Impact",
    gameType: "RPG",
    goodGame: false,
    ratings: [2, 3, 0.5, 1],
},
{
    gameName: "Team Fortress 2",
    gameType: "Shooter",
    goodGame: true,
    ratings: [5, 4.5, 4.5, 4],
},
{
    gameName: "Rivals of Aether",
    gameType: "Platform Fighter",
    goodGame: true,
    ratings: [4.5, 4.5, 2, 3.5],
},
];

games.forEach((games)=> console.log(games.gameName));
games.forEach((games)=> {
    const ratinglist = [games.ratings];
    console.log(ratinglist);
});
const quality = games.filter((games)=> games.goodGame === true);
console.log(quality);