// Step: 1 : Declare values to finances Variable's array and assign to const (finances)
const finances =[   
  {monthYear:'Jan-2010', profitLoss:867884},
  {monthYear:'Feb-2010', profitLoss:984655},
  {monthYear:'Mar-2010', profitLoss:322013},
  {monthYear:'Apr-2010', profitLoss:-69417},
  {monthYear:'May-2010', profitLoss:310503},
  {monthYear:'Jun-2010', profitLoss:522857},
  {monthYear:'Jul-2010', profitLoss:1033096},
  {monthYear:'Aug-2010', profitLoss:604885},
  {monthYear:'Sep-2010', profitLoss:-216386},
  {monthYear:'Oct-2010', profitLoss:477532},
  {monthYear:'Nov-2010', profitLoss:893810},
  {monthYear:'Dec-2010', profitLoss:-80353},
  {monthYear:'Jan-2011', profitLoss:779806},
  {monthYear:'Feb-2011', profitLoss:-335203},
  {monthYear:'Mar-2011', profitLoss:697845},
  {monthYear:'Apr-2011', profitLoss:793163},
  {monthYear:'May-2011', profitLoss:485070},
  {monthYear:'Jun-2011', profitLoss:584122},
  {monthYear:'Jul-2011', profitLoss:62729},
  {monthYear:'Aug-2011', profitLoss:668179},
  {monthYear:'Sep-2011', profitLoss:899906},
  {monthYear:'Oct-2011', profitLoss:834719},
  {monthYear:'Nov-2011', profitLoss:132003},
  {monthYear:'Dec-2011', profitLoss:309978},
  {monthYear:'Jan-2012', profitLoss:-755566},
  {monthYear:'Feb-2012', profitLoss:1170593},
  {monthYear:'Mar-2012', profitLoss:252788},
  {monthYear:'Apr-2012', profitLoss:1151518},
  {monthYear:'May-2012', profitLoss:817256},
  {monthYear:'Jun-2012', profitLoss:570757},
  {monthYear:'Jul-2012', profitLoss:506702},
  {monthYear:'Aug-2012', profitLoss:-1022534},
  {monthYear:'Sep-2012', profitLoss:475062},
  {monthYear:'Oct-2012', profitLoss:779976},
  {monthYear:'Nov-2012', profitLoss:144175},
  {monthYear:'Dec-2012', profitLoss:542494},
  {monthYear:'Jan-2013', profitLoss:359333},
  {monthYear:'Feb-2013', profitLoss:321469},
  {monthYear:'Mar-2013', profitLoss:67780},
  {monthYear:'Apr-2013', profitLoss:471435},
  {monthYear:'May-2013', profitLoss:565603},
  {monthYear:'Jun-2013', profitLoss:872480},
  {monthYear:'Jul-2013', profitLoss:789480},
  {monthYear:'Aug-2013', profitLoss:999942},
  {monthYear:'Sep-2013', profitLoss:-1196225},
  {monthYear:'Oct-2013', profitLoss:268997},
  {monthYear:'Nov-2013', profitLoss:-687986},
  {monthYear:'Dec-2013', profitLoss:1150461},
  {monthYear:'Jan-2014', profitLoss:682458},
  {monthYear:'Feb-2014', profitLoss:617856},
  {monthYear:'Mar-2014', profitLoss:824098},
  {monthYear:'Apr-2014', profitLoss:581943},
  {monthYear:'May-2014', profitLoss:132864},
  {monthYear:'Jun-2014', profitLoss:448062},
  {monthYear:'Jul-2014', profitLoss:689161},
  {monthYear:'Aug-2014', profitLoss:800701},
  {monthYear:'Sep-2014', profitLoss:1166643},
  {monthYear:'Oct-2014', profitLoss:947333},
  {monthYear:'Nov-2014', profitLoss:578668},
  {monthYear:'Dec-2014', profitLoss:988505},
  {monthYear:'Jan-2015', profitLoss:1139715},
  {monthYear:'Feb-2015', profitLoss:1029471},
  {monthYear:'Mar-2015', profitLoss:687533},
  {monthYear:'Apr-2015', profitLoss:-524626},
  {monthYear:'May-2015', profitLoss:158620},
  {monthYear:'Jun-2015', profitLoss:87795},
  {monthYear:'Jul-2015', profitLoss:423389},
  {monthYear:'Aug-2015', profitLoss:840723},
  {monthYear:'Sep-2015', profitLoss:568529},
  {monthYear:'Oct-2015', profitLoss:332067},
  {monthYear:'Nov-2015', profitLoss:989499},
  {monthYear:'Dec-2015', profitLoss:778237},
  {monthYear:'Jan-2016', profitLoss:650000},
  {monthYear:'Feb-2016', profitLoss:-1100387},
  {monthYear:'Mar-2016', profitLoss:-174946},
  {monthYear:'Apr-2016', profitLoss:757143},
  {monthYear:'May-2016', profitLoss:445709},
  {monthYear:'Jun-2016', profitLoss:712961},
  {monthYear:'Jul-2016', profitLoss:-1163797},
  {monthYear:'Aug-2016', profitLoss:569899},
  {monthYear:'Sep-2016', profitLoss:768450},
  {monthYear:'Oct-2016', profitLoss:102685},
  {monthYear:'Nov-2016', profitLoss:795914},
  {monthYear:'Dec-2016', profitLoss:60988},
  {monthYear:'Jan-2017', profitLoss:138230},
  {monthYear:'Feb-2017', profitLoss:671099},
];
      // Step 2 : Function to contain looping through each record of the finances array and 
      // assigning values after each loop step calculations
  function financialAnalysis(finances) 
  {
      // Step 3: Verify that array holds at least 2 records to perform calculations.
  if (finances.length < 2) 
      {
      alert("Less than two records found. Please add more records to your dataset")
      }
      // Step 4: Declare variables that will be used to display results in console
  let consoleHeader = "Financial Analysis";
  let consoleHeaderLine = "------------------";
  let totalMonths = finances.length;
  let totalProfitLoss = 0;
  let totalChange = 0;
  let greatestIncrease = { monthYear: '', profitLoss: 0 };
  let greatestDecrease = { monthYear: '', profitLoss: 0 };

      // Step 5: Intiate a for loop that will set i=0 , then if i < the length of the array
      // then increnment i values by one. 
      // Then add the finance i record (that is the value of profit or loss) and then assign it to var (totalProfitLoss)
      for (let i = 0; i < finances.length; i++) {totalProfitLoss += finances[i].profitLoss;
      // Step 6: for each i (finance record in the array), do assign the values of that finance record minus
      // the values of the finance record before it and assign the values to a variable monthlyChange
      // and add this new monthlyChange to the exsisting totalChange values
      if (i > 0) {
          let monthlyChange = finances[i].profitLoss - finances[i - 1].profitLoss;
          totalChange += monthlyChange;
      // Step 7: Check if monthlyChange is greater than the current values of the first record listed under ProfitLoss. If it is, then assign month & yesr as well as profiltLoss from the current monthlyChange values to the variable greateastIncrease
      if (monthlyChange > greatestIncrease.profitLoss) 
          {
              greatestIncrease = { monthYear: finances[i].monthYear, profitLoss: monthlyChange };
          }
      // Step 8: Check if monthlyChange is less than the current values of the first record listed under ProfitLoss. If it is, then assign month & yesr as well as profiltLoss from the current monthlyChange values to the variable greateastIncrease
      if (monthlyChange < greatestDecrease.profitLoss) 
          {
              greatestDecrease = { monthYear: finances[i].monthYear, profitLoss: monthlyChange };
          }
                  }
                                              }
      // Step 9: Log in the averageChange new values by dividing the toalChange values by the current number of the finances months array
  let averageChange = totalChange / (finances.length -1);
      // Step 10: assign the rounding up the number to the nearst 100th to a rounded variable
  let rounded = parseFloat(averageChange.toFixed(2));


  console.log(consoleHeader);
  console.log(consoleHeaderLine);
  console.log("Total Months: ", totalMonths);
  console.log("Total: " + "$"+ totalProfitLoss);
  console.log("Average Change: ",rounded);
  console.log("Greatest Increase in Profit/Losses: ",greatestIncrease);
  console.log("Greatest Decrease in Profit/Losses: ",greatestDecrease);

}

  const result = financialAnalysis(finances);
  // console.log(analysisResult);

