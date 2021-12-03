
import './styles.css'
import ListItem from './ListItem';

function List (props){
    return(
        <div class="col-12">{
            props.list.map(item =>(
                <ListItem key={item._id} item={item} />
                )
            )
        }
        </div>
    )
}

export default List;