var GlueData = 

[{"drinkName": "Whiskey Sour", 
  "recipe": "Shake with ice. Strain into chilled glass, garnish and serve.", 
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Whiskey_Sour.jpg/220px-Whiskey_Sour.jpg", 
  "alcohol": ["Whiskey",], 
  "ingredients": ["1½ oz (3 parts) Bourbon whiskey","1 oz (2 parts) fresh lemon juice","½ oz (1 part) Gomme syrup","dash egg white (optional)",], 
  "drinkRating": {
    "weatherValue": {"wCold": 2, "wMod": 6, "wWarm": 6, "wHot": 5}, 
    "precipValue": {"pNone": 6, "pSome": 4}, 
    "seasonValue": {"sSpr": 6, "sSum": 9, "sFal": 5, "sWin": 3}, 
    "dayValue": {"dMTRS": 2, "dW": 4, "dFS": 6}, 
    "timeValue": {"tMrn": 1, "tAft": 6, "tNt": 7, "wSleep": 2}
  }
},

{"drinkName": "Zombie", 
  "recipe": "Mix ingredients other than the 151 in a shaker with ice. Pour into glass and top with the high-proof rum.", 
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Zombiecocktail.jpg/220px-Zombiecocktail.jpg", 
  "alcohol": ["Brandy","Rum",], 
  "ingredients": ["1 part white rum","1 part golden rum","1 part dark rum","1 part apricot brandy","1 part pineapple juice","½ part 151-proof rum","1 part lime juice",], 
  "drinkRating": {
    "weatherValue": {"wCold": 1, "wMod": 2, "wWarm": 7, "wHot": 10}, 
    "precipValue": {"pNone": 8, "pSome": 1}, 
    "seasonValue": {"sSpr": 6, "sSum": 9, "sFal": 2, "sWin": 1}, 
    "dayValue": {"dMTRS": 1, "dW": 4, "dFS": 9}, 
    "timeValue": {"tMrn": 3, "tAft": 10, "tNt": 6, "wSleep": 1}
  }
}]

module.exports = GlueData;