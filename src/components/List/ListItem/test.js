import { render, fireEvent,screen } from '@testing-library/react';
import ListItem from '.';

test('ListItem', () => {
    const dummy_item ={
        id:100,
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
    }
    const {container} = render(<ListItem key={dummy_item.id.value} item={dummy_item}/>);
});
