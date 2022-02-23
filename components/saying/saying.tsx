import {Button, Card, Container,Divider,Header, Icon, Item, Segment} from 'semantic-ui-react';

function Saying(){
    return(
        <div className='mx-auto'>
            <div>
                <Icon size='big' name='circle thin'></Icon>
                <Header as='h2'>First Saying</Header>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                </p>
            </div>
            <Icon className='float-right pr-10 pt-2' name='share'></Icon>
            <Icon className='float-right pr-10 pt-2' name='heart'></Icon>
        </div>
    );
}

export default Saying