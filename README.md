# Stock Checker

**Description:**
Stock Checker is a stock market app developed in August 2023, leveraging the Finnhub API to provide users with real-time stock data. The app features two main pages: StockOverviewPage and StockDetailPage. 

**Features:**
- **StockOverviewPage:**
  - Auto-complete search bar to dynamically search for stocks or shares.
  - Users can select search results, which are then displayed in a table.
  - Ability to delete entries from the table.
  - Detailed information includes high, low, closing, and opening prices of the stock.
  
- **StockDetailPage:**
  - Provides comprehensive market analysis through detailed stock charts.
  - Users can view day, month, and year-wise graphs of the selected stock.
  - Displays additional details such as:
    - Name: Microsoft Corp
    - Country: US
    - Ticker: MSFT
    - Exchange: NASDAQ NMS - GLOBAL MARKET
    - Industry: Technology
    - IPO: 1986-03-13
    - MarketCap: 2508685.9316054876
    - Shares Outstanding: 7429.76
    - URL: [Microsoft Corp](https://www.microsoft.com/en-us)

**Technologies Used:**
- Finnhub API for real-time stock data.
- ApexCharts library for interactive stock charts.
- Axios for implementing REST API methods.

**How to Use:**
1. **StockOverviewPage:**
   - Enter the stock or share in the auto-complete search bar.
   - Select from the search results to add to the table.
   - Manage entries in the table, including deletion.

2. **StockDetailPage:**
   - Click on the desired stock entry in the table from the StockOverviewPage.
   - Explore day, month, and year-wise stock charts for comprehensive analysis.
   - Access detailed information about the stock.

**Installation:**
1. Clone the repository:
   ```
   git clone https://github.com/Ritik-Bhasarkar/Stock-Checker.git
   ```
2. Navigate to the project directory:
   ```
   cd Stock-Checker
   ```
3. Open `index.html` in your preferred web browser.

**Contributing:**
- Fork the repository.
- Create a new branch: `git checkout -b new-feature`.
- Make your changes and commit them: `git commit -m 'Add new feature'`.
- Push to the branch: `git push origin new-feature`.
- Submit a pull request.

**License:**
This project is licensed under the [MIT License](LICENSE).

**Acknowledgements:**
- Finnhub API for real-time stock data.
- ApexCharts library for interactive charts.
- Axios for making API requests.

Feel free to contribute and use Stock Checker for your stock market analysis!
