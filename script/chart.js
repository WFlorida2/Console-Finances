// declaring array values of months and years
const monthYear = 
    [
        'Jan-2010','Feb-2010','Mar-2010','Apr-2010','May-2010','Jun-2010','Jul-2010','Aug-2010','Sep-2010','Oct-2010','Nov-2010','Dec-2010','Jan-2011','Feb-2011','Mar-2011','Apr-2011','May-2011','Jun-2011','Jul-2011','Aug-2011','Sep-2011','Oct-2011','Nov-2011','Dec-2011','Jan-2012','Feb-2012','Mar-2012','Apr-2012','May-2012','Jun-2012','Jul-2012','Aug-2012','Sep-2012','Oct-2012','Nov-2012','Dec-2012','Jan-2013','Feb-2013','Mar-2013','Apr-2013','May-2013','Jun-2013','Jul-2013','Aug-2013','Sep-2013','Oct-2013','Nov-2013','Dec-2013','Jan-2014','Feb-2014','Mar-2014','Apr-2014','May-2014','Jun-2014','Jul-2014','Aug-2014','Sep-2014','Oct-2014','Nov-2014','Dec-2014','Jan-2015','Feb-2015','Mar-2015','Apr-2015','May-2015','Jun-2015','Jul-2015','Aug-2015','Sep-2015','Oct-2015','Nov-2015','Dec-2015','Jan-2016','Feb-2016','Mar-2016','Apr-2016','May-2016','Jun-2016','Jul-2016','Aug-2016','Sep-2016','Oct-2016','Nov-2016','Dec-2016','Jan-2017','Feb-2017'
    ];
    // Data belongs to the profilLoss values for each month
const data = 
    [
        867884,984655,322013,-69417,310503,522857,1033096,604885,-216386,477532,893810,-80353,779806,-335203,697845,793163,485070,584122,62729,668179,899906,834719,132003,309978,-755566,1170593,252788,1151518,817256,570757,506702,-1022534,475062,779976,144175,542494,359333,321469,67780,471435,565603,872480,789480,999942,-1196225,268997,-687986,1150461,682458,617856,824098,581943,132864,448062,689161,800701,1166643,947333,578668,988505,1139715,1029471,687533,-524626,158620,87795,423389,840723,568529,332067,989499,778237,650000,-1100387,-174946,757143,445709,712961,-1163797,569899,768450,102685,795914,60988,138230,671099
    ];

    // setting background color with value green and value red color
    // if value equal to or greater than zero then displaye it in green
    // else, displaye it in red
const backgroundColors = data.map(value => value >= 0 ? 'green' : 'red');

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
        type: 'line', // setting the type of the chart
        data: {
            labels: monthYear,
            datasets: [{
            label: 'Financial Analysis',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors,
            borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });