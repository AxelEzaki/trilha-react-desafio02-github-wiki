import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [ currentRepo, setCurrentRepo ] = useState('');
  const [ repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {
    if(currentRepo !== ''){
      const { data } = await api.get(`repos/${ currentRepo }`);

      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);

        if(!isExist){
          setRepos(prev => [...prev, data]);

          setCurrentRepo('');
          return;
        } else {
          alert('Repositório já inserido');
          return;
        }
      }

      alert('Repositório não encontrado');
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      { repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
