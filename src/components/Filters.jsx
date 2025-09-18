import React from 'react';

const Filters = ({ filters, setFilters }) => (
  <div className="filters">
    <h3>What are you looking for</h3>
    <div>
      <label>
        <input type="radio" name="action" value="buy" checked={filters.action === "buy"} onChange={() => setFilters(f => ({...f, action: "buy"}))}/>
        Buy
      </label>
      <label>
        <input type="radio" name="action" value="rent" checked={filters.action === "rent"} onChange={() => setFilters(f => ({...f, action: "rent"}))}/>
        Rent
      </label>
      <label>
        <input type="radio" name="action" value="sell" checked={filters.action === "sell"} onChange={() => setFilters(f => ({...f, action: "sell"}))}/>
        Sell
      </label>
    </div>
    <div>
      <h4>Type</h4>
      <label>
        <input type="radio" name="type" value="flat" checked={filters.type === "flat"} onChange={() => setFilters(f => ({...f, type: "flat"}))}/>
        Flat
      </label>
      <label>
        <input type="radio" name="type" value="rowhouse" checked={filters.type === "rowhouse"} onChange={() => setFilters(f => ({...f, type: "rowhouse"}))}/>
        Row House
      </label>
      <label>
        <input type="radio" name="type" value="independent" checked={filters.type === "independent"} onChange={() => setFilters(f => ({...f, type: "independent"}))}/>
        Independent Home
      </label>
    </div>
  </div>
);

export default Filters;