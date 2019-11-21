const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004,
    empNumber: 55
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
    empNumber: 63
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007,
    empNumber: 103
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010,
    empNumber: 400
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
    empNumber: 18
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010,
    empNumber: 12
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996,
    empNumber: 95
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
    empNumber: 115
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989,
    empNumber: 250
  }
];

// Map through company Name and Company category
const companyNames = companies.map(
  company => `
     <h2> Company Name: ${company.name} </h2>
     <h3> Company Category:${company.category}</h3>
     `
);
document.body.innerHTML = companyNames;
