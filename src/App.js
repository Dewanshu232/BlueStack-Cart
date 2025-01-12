import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaSearch, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import SearchBar from './components/SearchBar';
import Breadcrumbs from './components/Breadcrumbs';
import Eyes from './components/Eyes';
import Pagination from './components/Pagination';
import ThemeToggle from './components/ThemeToggle';
import mockData from './data/mockData.json';
import './App.css';

const ItemGrid = lazy(() => import('./components/ItemGrid'));
const ItemDetail = lazy(() => import('./components/ItemDetail'));
const Cart = lazy(() => import('./components/Cart'));

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredItems = mockData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <div className="glassy-background"></div>
            <header className="app-header">
              <h1>Small Basket</h1>
              <Eyes />
              <nav className="nav-icons">
                <Link to="/"><FaHome /></Link>
                <Link to="/search"><FaSearch /></Link>
                <Link to="/about"><FaInfoCircle /></Link>
                <Link to="/cart"><FaShoppingCart /></Link>
                <ThemeToggle />
              </nav>
            </header>
            <main>
              <Breadcrumbs />
              <Routes>
                <Route path="/" element={
                  <>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <Suspense fallback={<div>Loading...</div>}>
                      <ItemGrid items={currentItems} />
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                      />
                    </Suspense>
                  </>
                } />
                <Route path="/item/:id" element={<Suspense fallback={<div>Loading...</div>}><ItemDetail /></Suspense>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/search" element={<div>Search Page</div>} />
                <Route path="/cart" element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
              </Routes>
            </main>
            <footer className="app-footer">
              <p>&copy; 2025 Explore Page. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;