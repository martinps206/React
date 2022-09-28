function ListView({elements, funcFilterItems}){
    return(
        <div>
            <input type="text" onChange={ ev => funcFilterItems(ev.target.value) } />
            <ul>
                {
                    elements.map((nombre, index) => nombre && <li key={index}>{ nombre }</li>)
                }
            </ul>
        </div>
    );
}

export default ListView;e