import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

function App() {
  const [count,setCount]=useState(0);
  const menuIconEl = $('.menu-icon');
  const sidenavEl = $('.sidenav');
  const sidenavCloseEl = $('.sidenav__close-icon');
  menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
  });
  sidenavCloseEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
  });
  

  return (
    <div className="gird-container">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <header className="header">
        <div className="header__search">Search.....</div>
        <div className="header__avtar">Your header</div>
      </header>
      <aside className="sidenav">
        <div class="sidenav__close-icon">
          <i class="fas fa-times"></i>
        </div>
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Item One</li>
          <li className="sidenav__list-item">Item Two</li>
          <li className="sidenav__list-item">Item Three</li>
          <li className="sidenav__list-item">Item Four</li>
          <li className="sidenav__list-item">Item Five</li>
        </ul>
      </aside>
      <main className="main">
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__heading">Receng Items</div>          
        </div>
        <div class="main-overview">
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
          <div class="overviewcard">
            <div class="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
        </div>
        <div class="main-cards">
          <div class="card">Card</div>
          <div class="card">Card</div>
          <div class="card">Card</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__copyright">&copy; 2019 MTH</div>
        <div className="footer__signature">Made with love by pure genius</div>
      </footer>

    {/*       
        <p>Clicked count: {count} </p>
        <button  onClick={()=>{setCount(count + 1)}}>
        Clicked Here
        </button>
       
       */}
    </div>
  );
}

export default App;
