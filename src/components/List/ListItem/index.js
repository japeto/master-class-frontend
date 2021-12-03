import './styles.css'

function ListItem(props){
    return(
        <div className="card card-default p-4">
            <span className="media text-secondary">
                <img className="mr-3 img-fluid rounded" alt="avatar" src={props.item.picture.large} />

                <div className="media-body">
                    <h5 className="mt-0 mb-2 text-dark">{props.item.name.last} {props.item.name.first}</h5>
                    <ul className="list-unstyled text-smoke">
                        <li className="d-flex">
                            <i className="mdi mdi-map mr-1"></i>
                            <span>phone: {props.item.phone} | cell: {props.item.cell}</span>
                        </li>
                        <li className="d-flex">
                            <i className="mdi mdi-email mr-1"></i>
                            <span>{props.item.email}</span>
                        </li>
                        <li className="d-flex">
                            <i className="mdi mdi-phone mr-1"></i>
                            <span>{props.item.location.country}</span>
                        </li>
                    </ul>
                </div>
            </span>
        </div>
    )
}
 
export default ListItem;