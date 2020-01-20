import React from 'react';

import './styles.css';

function DevItem({ dev }){
    
    //Caso o usuário não tenha Nome cadastrado, é atribuído o username como nome
    if(!dev.name){
        dev.name = dev.github_username;
    }
    return(
    <li key={dev._id} className="dev-item">
        <header>
            <img src={dev.avatar_url} alt={dev.name}/>
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    </li> 
    );
}

export default DevItem;