// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    // Utilisation d'Axios pour obtenir des données de l'API jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
      
        setListOfUsers(response.data);
   
      })
      
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []); // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécute une seule fois après le rendu initial

  const handleSearch = () => {
    // Filtrer la liste des utilisateurs en fonction du terme de recherche
    const filteredUsers = listOfUsers.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListOfUsers(filteredUsers);
  };

  return (
    <>
    <div className="user-list">
      <h2>Liste des Utilisateurs</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
     <div className="search-bar">
     <input
       type="text"
       placeholder="Rechercher par nom"
       value={searchTerm}
       onChange={e => setSearchTerm(e.target.value)}
     />
     <button onClick={handleSearch}>Rechercher</button>
   </div>
   </>
  );
};

export default UserList;
