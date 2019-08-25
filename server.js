const express = require('express');

const app = express();

// Do not use 3000 because it is reserved for React apps
const port = 5000;

// Pass a port and a callback which will be run when server is running
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Setting the route. Test: http://localhost:5000/api/customers
app.get('/api/customers', (req, res) => {
  // In real life it would be a data from database
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Steve', lastName: 'Smith' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' }
  ];
  console.log(res.json(customers), res.json());
  res.json(customers);
});
