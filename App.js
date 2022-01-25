import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";
const App = () => {
  return (
    <div className = "app">

         {/* currency converter component */}
        <CurrencyConverter/>

        {/* news feed component */}
        <NewsFeed/>
      
        
     
    </div>
  );
}

export default App;
