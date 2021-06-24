import './App.css';
import { useState } from 'react';

import { useLazyQuery, gql } from '@apollo/client';

const QUERY = gql`
  query($login: String!) { 
    organization(login: $login) { 
      name
      avatarUrl
      description
      location
      repositories(first: 5) {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  }
`;

function CompanyProfile({
  name,
  avatarUrl,
  description,
  location,
  repositories: { edges: repositories },
}) {
  return (
    <div>
      <img src={avatarUrl} alt="company logo" />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{location}</p>
      <ul>
        {repositories.map(({ node: repo }) => {
          const { id, name, description } = repo;
          
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function App() {
  const [companyGithub, setCompanyGithub] = useState('');
  const [getCompanyGithubInfo, { loading, error, data }] = useLazyQuery(QUERY);
  
  const handleInput = e => {
    setCompanyGithub(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    getCompanyGithubInfo({ variables: { login: companyGithub }})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && data.organization && <CompanyProfile {...data.organization} />}
    </div>
  );
}

export default App;
