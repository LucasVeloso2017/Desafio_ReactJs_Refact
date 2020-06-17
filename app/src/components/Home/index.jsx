import React, { useState, useEffect } from 'react';
import { FaHeart,FaTrash,FaPen } from 'react-icons/fa'


import Side from '../../template/Side'
import api from '../../api/api'

import './index.css'

function Home() {
    const[repositories,setRepositories]=useState([])


    useEffect(()=>{
        api.get('repositories')
        .then((response)=>{
            setRepositories(response.data)
        })

    },[repositories])
    
    async function handleLikeRepo(id){
        return await api.post(`repositories/${id}/like`)
    }

    async function handleRemoveRepository(id) {
        await api.delete(`repositories/${id}`);
        const filteredRepositories = repositories.filter((repository) => { return repository.id !== id } );
        setRepositories(filteredRepositories);
      }

    return (
        <div className="main">
            <Side title="Cadastrar repositório" link="/register"/>
            <div className="repos">
                
                    {repositories.map((repo)=>{
                        return(
                            <div className="unique-repo">
                                <div className="container" key={repo.id}>
                                    <p className="title">
                                        {repo.title}
                                    </p>
                                    <p className="url">
                                        <a href={repo.url}>{repo.url}</a>
                                    </p>
                                    <p className="techs">
                                        Techs:
                                        <ul>
                                        {   
                                            repo.techs
                                            .map(tech =><li key={tech}>{tech}</li>)
                                        }
                                        </ul>
                                    </p>
                                    <p className="likes">
                                        <FaHeart className="heart" onClick={()=>{handleLikeRepo(repo.id)}}/>
                                        {repo.likes}
                                        <FaTrash className="trash" onClick={()=>{handleRemoveRepository(repo.id)}}/> 
                                        
                                    </p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}

export default Home;