import { render, screen } from '@testing-library/react';
import List from '.';

import './styles.css'

test('List', () => {
    const dummy_item_list=[{
        _id:{
            value:12
        },
        name:{
            first:"Jefferson",
            last:"Peña",
        },
        address:"Cali",
        email:"jefferson.amado.pena",
        picture:{
            thumbnail:"image_dummy.png"
        },
        location:{
            country:"Colombia"
        }
    }]
    const {container} = render(<List list={dummy_item_list}/>);
});
