import { useRouter } from "next/router";
import { useState } from "react";
import { Button, Dropdown, Icon, Menu } from "semantic-ui-react";

function SideMenu(){
    const [activeItem, setActiveItem] = useState('world-says');
    const router = useRouter();
    return (
        <div>
          <Icon className='-m-5' size='huge' name='circle thin'></Icon>
          <h5>Ismaeil Ghouneim</h5>
          <Button onClick={()=> router.push('say')}>Have a Say</Button>
          <Menu secondary vertical>
            <Menu.Item
            name='Sayings'
            active={activeItem === 'world-says'}
            onClick={()=> router.push('sayings')}

          />
          <Menu.Item
            name='My Sayings'
            active={activeItem === 'my-sayings'}
            onClick={()=> router.push('my-sayings')}
          />
          <Menu.Item
            name='Favorite Sayers'
            active={activeItem === 'fav-sayers'}
            onClick={()=> router.push('fav-sayers')}

          />

          <Menu.Item
            name='Notebook'
            active={activeItem === 'notebook'}
            onClick={()=> router.push('notebook')}
          />
        </Menu>
        </div>
    );
}
export default SideMenu;