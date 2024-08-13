// import React, { useState } from 'react';

// const Filter = ({ snippets, setFilteredSnippets }) => {
//   const [selectedLanguage, setSelectedLanguage] = useState([]);
//   const [selectedFeature, setSelectedFeature] = useState([]);
//   const [selectedComplexity, setSelectedComplexity] = useState([]);

//   const handleFilterChange = (filterType, value) => {
//     let selectedFilter;

//     switch (filterType) {
//       case 'language':
//         selectedFilter = setSelectedLanguage;
//         break;
//       case 'feature':
//         selectedFilter = setSelectedFeature;
//         break;
//       case 'complexity':
//         selectedFilter = setSelectedComplexity;
//         break;
//     }

//     selectedFilter((prevState) => {
//       if (prevState.includes(value)) {
//         return prevState.filter((item) => item !== value);
//       } else {
//         return [...prevState, value];
//       }
//     });
//   };

//   const applyFilters = () => {
//     let results = snippets;

//     if (selectedLanguage.length > 0) {
//       results = results.filter((snippet) =>
//         selectedLanguage.includes(snippet.language)
//       );
//     }

//     if (selectedFeature.length > 0) {
//       results = results.filter((snippet) =>
//         selectedFeature.includes(snippet.feature)
//       );
//     }

//     if (selectedComplexity.length > 0) {
//       results = results.filter((snippet) =>
//         selectedComplexity.includes(snippet.complexity)
//       );
//     }

//     setFilteredSnippets(results);
//   };

//   return (
//     <div className="filter-container">
//       <h2>Filter Code Snippets</h2>

//       <div className="filter-options">
//         <div className="filter-group">
//           <h3>Languages</h3>
//           <label>
//             <input
//               type="checkbox"
//               value="JavaScript"
//               onChange={() => handleFilterChange('language', 'JavaScript')}
//             />
//             JavaScript
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="HTML"
//               onChange={() => handleFilterChange('language', 'HTML')}
//             />
//             HTML
//           </label>
//         </div>

//         <div className="filter-group">
//           <h3>Features</h3>
//           <label>
//             <input
//               type="checkbox"
//               value="Navbar"
//               onChange={() => handleFilterChange('feature', 'Navbar')}
//             />
//             Navbar
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="Form Validation"
//               onChange={() => handleFilterChange('feature', 'Form Validation')}
//             />
//             Form Validation
//           </label>
//         </div>

//         {/* Add more filter groups for complexity, framework, and use cases */}

//         <button onClick={applyFilters}>Apply Filters</button>
//       </div>
//     </div>
//   );
// };

// export default Filter;
