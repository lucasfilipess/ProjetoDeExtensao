// import React from 'react';
// import api from '../../../Services/api';

// const people = [
//   'Siri',
//   'Alexa',
//   'Google',
//   'Facebook',
//   'Twitter',
//   'Linkedin',
//   'Sinkedin',
// ];

// function Search() {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [searchResults, setSearchResults] = React.useState([]);
//   const [availability, setAvailability] = React.useState([]);
//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   React.useEffect(() => {
//     async function getAvailability() {
//       try {
//         await api
//           .get('/availability')
//           .then((response) => setAvailability(response.data));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getAvailability();
//     const results = people.filter((person) =>
//       person.toLowerCase().includes(searchTerm)
//     );
//     // const results = availability.filter((item) =>
//     //   item.name.toLowerCase().includes(searchTerm)
//     // );
//     setSearchResults(results);
//   }, [searchTerm]);

//   // const teste = availability.filter((item) =>
//   //   item.name.toLowerCase().includes('n')
//   // );
//   const teste = availability.map(
//     (item) => console.log(item)
//     // item.filter((area) => area.name.toLowerCase().includes('n'))
//   );
//   console.log(teste);
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//         {searchResults.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Search;
