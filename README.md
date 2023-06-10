# FinanceFusion
This is a website where the user can fill in the values for financial statements and the user gets the total in an instance.

## 
The links to the deplyed app is: https://finance-fusion.vercel.app/

## How to Deploy The App
to deply the app from the terminal just reun
npm run

## WHAT THE APP HAS:
There are two folders:
 ## 1. Finance_statement
 This contains the balance sheet, cash flow statement and Income statement in the pages folder that creates and deploys them on one page.
 There is an error, the user , to input a -ve number they have to scroll down to the negative numbers and then input the values:
 for instance:
 to input -20000, the user has to scroll down to -2 then add the 0000

## 2. finance-fusion
This has the Landing page for the app. It has a container, components and assets folder.
It uses a simple landing page that links to the balance sheet, cashflow and income statement page using the Get Started button, and Start Now button.

# The Balance Sheet
This statement is in balancesheet.jsx file has the assets, liabilities and shares.
It calculates the current assets first using this code:
  handleValueChange that adds all the values the user inputs automatically.
It then calculates the non-current assets using:
  handleNonChange 
Then it add all the total current assests and non current assets:
 and puts the total in the total assets column:
 const totalAssets = totalcurrentAssets + totalnoncurrentassets;
The liabilities section uses the same thing:
current liabilities: handleLiabChange 
noncurrent liabilities: handleNonLiabChange
total liabilites: const totalLiabilities = totalcurrentLiabilities + totalnoncurrentliabilities + totalShares 

# Cash Flow Statement
This statement is in the cashflow.jsx it has the same concept as the balance sheet
It adds the operating activities, financial activities, and the investing activities.
They add the values separately then gives the total as change in cash ..

# Income Statement
This statement is the same as before but it has an added functionality:
It has ratio analysis and calculates the ratios according to the values inputed in the table.
Soon will add more useful values that will help the user do a pyramid analysis
This one does a vertical analysis but not a horizontal one yet:
This will be added a soon .

### This is a simple Financial Statements app weh can make improvements on it:
 make it so that the user can do financial analysis on the app
 add a database and a user dashboard where the user can save and come and analyze the app in an instance

 *********************************
 Looking Into creating an AI that can serve as a finacial analyst for the user. 
