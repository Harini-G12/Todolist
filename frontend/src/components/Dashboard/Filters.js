import React, { useState } from 'react';

const Filters = ({ setFilter }) => {
  const [status, setStatus] = useState('');
  const [assignee, setAssignee] = useState('');
  const [dueDate, setDueDate] = useState('');

  const applyFilters = () => {
    setFilter({ status, assignee, dueDate });
  };

  return (
    <div>
      <h3>Filters</h3>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
};

export default Filters;
