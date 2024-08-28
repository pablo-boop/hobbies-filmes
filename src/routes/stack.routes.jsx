import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Minions from "../screens/Minions";
import Senhor from "../screens/Senhor";
import Peripecias from "../screens/Peripecias";
import SuperBad from "../screens/SuperBad";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Minions" component={Minions} />
            <Stack.Screen name="Senhor" component={Senhor} />
            <Stack.Screen name="Peripecias" component={Peripecias} />
            <Stack.Screen name="SuperBad" component={SuperBad} />
        </Stack.Navigator>
    )
}

export default StackRoutes;