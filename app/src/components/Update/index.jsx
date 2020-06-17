import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom'
import Side from '../../template/Side'
import api from '../../api/api.js'
import './index.css'


function Form({title,url,techs}) {

    const[form,setForm]=useState({
        title:'',
        url:''
    })
    const[techs,setTechs]=useState('')

    const history = useHistory()

    function handleValues(event){
        const {name,value}=event.target
        setForm({ ...form,[name]:value })

    }

    function handleTech(event){
        const techsValue = event.target.value
        
        const altered = techsValue.trim().split(",")

        setTechs(altered)
    }


    async function handleSubmit(event){
        event.preventDefault()

        const{ title, url} = form
        const tecnology= techs
        const data = {
            title,
            url,
            techs:tecnology
        }
        
        await api.post('repositories',data)
        history.push('/')
        
    }

    return(
        
        <div className="main">
            <Side title="Voltar" link="/"/>
            <div className="form">
                <div className="ask">
                    <form onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="form-group">
                                <label htmlFor="title">Nome do repositório:</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    id="title"
                                    placeholder={title}
                                    onChange={handleValues} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="url">Link do repositório:</label>
                                <input 
                                    type="text" 
                                    name="url"
                                    id="url"
                                    placeholder={url}
                                    onChange={handleValues} 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="techs">Tecnologias usadas:</label>
                                <input 
                                    type="text" 
                                    name="techs" 
                                    id="techs"
                                    placeholder={techs}
                                    onChange={handleTech}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit">
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>    
    );
}

export default Form;