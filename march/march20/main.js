function deathStar(week) {
   let attackDay =week[week.length-1]
   let materialsForWeek=week.slice(0,attackDay)
   let steelMin =75;
   let chromiumMin = 50;
   let ironMin= 100;
   for (let i=0;i<materialsForWeek.length;i++){
     ironMin=ironMin-materialsForWeek[i][0]
     steelMin=steelMin-materialsForWeek[i][1]
     chromiumMin=chromiumMin=chromiumMin-materialsForWeek[i][2]
     if (ironMin<=0&&steelMin<=0&&chromiumMin<=0)
       return 'The station is completed!'
   }
//    if ironMin <=0, return 0, ELSE: return ironMin
   return `The station is destroyed! It needed ${ironMin<=0?0:ironMin} iron, ${steelMin<=0?0:steelMin} steel and ${chromiumMin<=0?0:chromiumMin} chromium for completion.`
}

// needs 100gt Iron
// needs 75Gt Steel
// needs 50Gt Chromium
