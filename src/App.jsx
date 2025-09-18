import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';
import Filters from './components/Filters';
import TrendsChart from './components/TrendsChart';
import propertiesData from './data/properties';

function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    action: '', // buy, rent, sell
    type: '',   // flat, row house, etc.
  });

  const filtered = propertiesData.filter((p) => {
    return (
      (!search || p.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filters.action || p.action === filters.action) &&
      (!filters.type || p.type === filters.type)
    );
  });

  return (
    <div className="container">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="main-content">
        <div className="left-side">
          <Filters filters={filters} setFilters={setFilters} />
          <PropertyList properties={filtered} />
        </div>
        <div className="right-side">
          <TrendsChart />
        </div>
      </div>
    </div>
  );
}

export default App;
