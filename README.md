# Console-Finances

This challenge covering the creation of a code for analysing the financial records of a company.

## Languages used:

•	HTML
•	JavaScript
•	CSS

## Wireframe tool used:
•	drawio

## Resources:
•	W3School
•	ChatGPT
•	Xpert Learning Assistant
•	Google search engines
•	Classes recordings, activities and notes

## Installation:
•	To access the webpage, the following URL should be used:    https://wflorida2.github.io/Console-Finances/. Once accessed, navigate to Inspect to see the result in the console tab.   
•	To find out how to do access the console tab, please type in the following ‘How to see a console for a page in a browser’ in a google search engine or any other search engines available to you.   
•	As a developer who wishes to access the back-end files for this page, you will need to access GitHub to be able to open the repo via the following link: "https://github.com/WFlorida2/Console-Finances "    

## CREDITS:
•	Credit to Ana, Sebastian, and other students on the Discord group of helping each other’s out with couple of issues.
•	https://chat.openai.com/  
•	Xpert Learning Assistant  
•	W3School  


## Pseudocode:

### 1- Understanding the requirements:

•	Console Finances - Create a code for analysing the financial records of a company.

### 2- Breaking down the requirements into smaller requirements:

•	Find the total number of months included in the provided dataset.
-	Find the net total amount of Profit/Losses over the entire period.
-	Find the average of the changes in Profit/Losses over the entire period.
•	(I will need to track what the total change in profits is from month to month and then find the average. 
•	(Total/ (Number of months - 1))
-	Find the greatest increase in profits (date and difference in the amounts) over the entire period.
-	Find the greatest decrease in losses (date and difference in the amounts) over the entire period.

### Outcome:

When code opens in the browser console, the resulting analysis should look like the following:

Final code should print the analysis to the console.
![Console-Finances outcome](./images/Console%20-%20Finances.png)


### Note to remember:
•	To combine strings and variables in the console, I will need to use concatenation.
•	To find out 'How do I only print to the nearest 100th in JavaScript?'


### 3- Writing the pseudocode:

•	Step: 1: Declare values to finances Variable's array and assign to const (finances)  
•	Step 2: Create a main Function to contain looping through each record of the finances array and assign values after each loop step calculations.  
•	Step 3: Verify that array holds at least 2 records to perform calculations.  
•	Step 4: Declare variables that will be used to display results in console.  
•	Step 5: Initiate a ‘for’ loop that will set i=0, then if i < the length of the array  
o	// then increment i values by one.  
o	// Then add the finance i record (that is the value of profit or loss) and then assign it to var (totalProfitLoss)  
•	Step 6: for each i (finance record in the array), do assign the values of that finance record minus  
o	// the values of the finance record before it and assign the values to a variable monthlyChange  
o	// and add this new monthlyChange to the existing totalChange values  
•	Step 7: Check if monthlyChange is greater than the current values of the first record listed under ProfitLoss. If it is, then assign month & year as well as ‘profiltLoss’ from the current monthlyChange values to the variable ‘greateastIncrease’  
•	Step 8: Check if monthlyChange is less than the current values of the first record listed under ProfitLoss. If it is, then assign month & year as well as ‘profiltLoss’ from the current monthlyChange values to the variable ‘greateastIncrease’  
•	Step 9: Log in the averageChange new values by dividing the ‘toalChange ‘values by the current number of the finance’s months array.  
•	Step 10: assign the rounding up the number to the nearest 100th to a rounded variable.  

-- CREDIT to ChatGPT that directed me to the way of starting a new line in README file


### 4- Translating the pseudocode into an actual JS code:

•	Work completed as demonstrated in the repo


# Flowchart:

![Flowchart](./images/Flowchart.png)

# End result:
![End result](./images/End%20result.png)

￼

    


