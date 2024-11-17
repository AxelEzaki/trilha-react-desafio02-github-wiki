import React from "react";
import { ItemRepoContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }){
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return (
        <ItemRepoContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{ repo.full_name }</p>
            <a href={ repo.html_url } target="blank" rel="noreferer"> Ver Repositório </a>
            <br /><br />
            <a href="#" className="remover" rel="noreferer"> Remover </a>
            <hr />
        </ItemRepoContainer>
    )
}

export default ItemRepo;