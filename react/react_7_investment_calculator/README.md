**Investment Calculator**

A React-based investment calculator that allows users to estimate the future growth of an investment portfolio based on an initial investment, annual contributions, expected return rate, and investment duration.

The application calculates year-by-year investment projections, displays the results in a detailed table, and allows users to generate a downloadable PDF investment report.

**Features**
- Enter investment parameters:
  - Initial investment amount
  - Annual investment contribution
  - Expected annual return percentage
  - Investment duration in years
- Calculate projected investment growth using compound interest
- Display yearly investment breakdown:
  - Year
  - Investment value
  - Interest earned during the year
  - Total accumulated interest
  - Total invested capital
- Validate user input:
  - Prevent negative investment values
  - Require a duration greater than zero
- Generate a downloadable PDF investment report containing:
  - Investment details
  - Year-by-year investment projections

**Technologies Used**
- React 19
- JavaScript (ES Modules)
- Vite
- CSS
- jsPDF

**React Concepts Demonstrated**

This project demonstrates several core React concepts and patterns.

1. Functional Components

The application is built using reusable functional components:

- App
- Header
- UserInput
- OutputData

Each component has a clear responsibility, making the application easier to maintain and extend.

2. State Management with useState

The main application state is managed in App.jsx using the useState hook:

const [userInput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
});

This stores all user-controlled investment parameters.

3. Props

Data is passed between components using props:

App passes investment values to UserInput
App passes investment data to OutputData

Example:

<UserInput 
  userInput={userInput} 
  onInputChange={handleChange}
/>

4. Lifting State Up

The investment input state is managed by the parent App component rather than individual form fields.

UserInput communicates changes back to App using a callback function:

onInputChange('initialInvestment', e.target.value)

This keeps state management centralised.

5. Controlled Components

The input fields are controlled React components.

Their values are determined by React state:

value={userInput.initialInvestment}

Changes are handled through event callbacks:

onChange={(e) => onInputChange(...)}

6. Conditional Rendering

The application displays validation messages when invalid data is entered:

Examples:
- "Please enter a duration greater than zero."
- "Please enter a non-negative Initial Investment."

The results table is only displayed when the input values are valid.

7. Rendering Lists

Investment results are generated dynamically using .map():

resultData.map((yearData) => (
  <tr key={yearData.year}>
    ...
  </tr>
))

Each generated table row has a unique React key.

8. useCallback Hook

The PDF generation handler uses useCallback:

const handleGeneratePDF = useCallback(() => {
  ...
}, [inputValue]);

This memoises the callback function and avoids unnecessary recreation between renders.

**How It Works**

Investment Calculation

The calculation logic is separated from the React components and stored in:

src/util/investments.js

The calculateInvestmentResults() function:

  1. Starts with the initial investment amount.
  2. Calculates yearly interest:
    investmentValue * (expectedReturn / 100)
  3. Adds annual contributions.
  4. Updates the total investment value.
  5. Stores the results for each year.

The function returns an array containing:

{
  year,
  interest,
  investmentValue,
  totalInterest,
  investedCapital
}

This data is then displayed in the results table.

PDF Report Generation

The application uses the jspdf library to generate downloadable PDF reports.

The report includes:

- Beginning investment
- Annual investment
- Expected return
- Investment duration
- Annual investment results

The PDF generation functionality is implemented in:

src/util/generatereport.js

Styling

The application uses custom CSS rather than a UI framework.

Styling includes:

- Centred application layout
- Investment input card
- Styled results table
- Error messages
- Button hover and active effects

Main styles are located in:

src/App.css

**Running the Application Locally**
Prerequisites

Ensure you have:
- Node.js installed
- npm installed

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd react_7_investment_calculator

Install dependencies:

npm install

**Start Development Server**
Run:

npm run dev

The application will be available at the local Vite development URL shown in the terminal.
Separating business logic from presentation
Integrating third-party libraries
Generating documents from application data
