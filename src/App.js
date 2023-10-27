import logo from './logo.svg';
import './App.css';
import MainContent from './MainContent';

function App() {
  return (
    <div className="body">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );  
}

function Header() {
  return (
    <header>
        <nav className='nav'>
        <img src={logo} alt="reactLogo" className='nav-logo'/>
        <h3 className='nav-logo_text'>ReactFacts</h3>
        <h4 className='nav-title'>React Course - Project 1</h4>
        </nav>
      </header>
  )
}
function Footer() {
  return (
    <footer className='footer-text'>
     <small >© 2023 Okoli development. All rights reserved.</small> 
      </footer>
  )
}
export default App;