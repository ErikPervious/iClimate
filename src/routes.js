import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/home';
import Search from './pages/search';

const Drawer = createDrawerNavigator();

function Routes() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Minha Cidade'
                }}
            />
            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar'
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;