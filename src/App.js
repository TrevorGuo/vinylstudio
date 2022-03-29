import logo from './logo.svg';
import './App.css';
import CheckoutButton from './components/CheckoutButton';
import Design from './components/Design'

function App() {
  return (
    <div className='app-container'>
      <Design />
      <div className='checkout-container'>
        <CheckoutButton />
      </div>
    </div>
  );
}

export default App;
