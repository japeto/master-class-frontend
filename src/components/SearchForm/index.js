import './styles.css';

function SearchForm(props){
    const letters = "ABCDEFGHIJKLMN".split('');
    console.log(letters);
    return(
        <div className="card">
            <input type="text"/>
            <div className ="col-12"  >
                <ul id="indexButtons" className="pagination pagination-split">
                    {
                        letters.map(letter => (
                            <li key={letter} onClick={(e)=>{props.getUser(`${letter}`)}} >{letter}</li>
                        ))
                    }                    
                </ul>
            </div>
        </div>
    )
};

export default SearchForm;