import { useState } from 'react';
import frameworksList from './items';
import ListView from './ListView'

// Componentes de presentacion y componentes de contenedores

function List(){
    let [items, setItems] = useState(frameworksList);

    function filterItems(searchPattern){
        if(searchPattern === ""){
            setItems(frameworksList);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList
                            .map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null );
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems} />
    )
}

export default List;