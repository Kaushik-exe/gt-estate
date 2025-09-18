import React, { useState } from "react";
import Filters from "./components/Filters";
import TrendsChart from "./components/TrendsChart";
import properties from "./data/properties";
import "./App.css";

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <h4>{property.name}</h4>
    <p>{property.description}</p>
    <span style={{ marginRight: 8, fontWeight: "bold" }}>{property.action.toUpperCase()}</span>
    <span>{property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span>
  </div>
);

const defaultFilters = {
  action: "buy",
  type: "flat",
  search: ""
};

function App() {
  const [filters, setFilters] = useState(defaultFilters);

  const filteredProperties = properties.filter(
    (p) =>
      p.action === filters.action &&
      p.type === filters.type &&
      (!filters.search ||
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.search.toLowerCase()))
  );

  return (
    <div className="container">
      <header>
        <h1>GT ESTATE</h1>
        <p>Your real estate dashboard</p>
      </header>
      <div className="main-content">
        <div className="left-side">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search properties..."
              value={filters.search}
              onChange={(e) =>
                setFilters((f) => ({ ...f, search: e.target.value }))
              }
            />
          </div>
          <Filters filters={filters} setFilters={setFilters} />
          <div>
            <h3>Properties</h3>
            {filteredProperties.length ? (
              filteredProperties.map((property, idx) => (
                <PropertyCard property={property} key={idx} />
              ))
            ) : (
              <div>No properties found.</div>
            )}
          </div>
        </div>
        <div className="right-side">
          <TrendsChart />
        </div>
      </div>
    </div>
  );
}

export default App;