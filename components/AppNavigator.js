import {
    Icon,
    BottomNavigation,
    BottomNavigationTab,
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InspoScreen from "../screens/InspoScreen";
import AddPostScreen from "../screens/AddPostScreen";
import ScheduleEventScreen from "../screens/ScheduleEventScreen";

const InspoIcon = (props) => <Icon name="bulb" {...props} />;
const PostIcon = (props) => <Icon name="plus-square-outline" {...props} />;
const ScheduleIcon = (props) => <Icon name="calendar-outline" {...props} />;

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
        <BottomNavigationTab title="inpso" icon={InspoIcon} />
        <BottomNavigationTab title="post" icon={PostIcon} />
        <BottomNavigationTab title="schedule" icon={ScheduleIcon} />
    </BottomNavigation>
);

const TabNavigator = () => (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Screen
            name="Inspo"
            component={InspoScreen}
            options={{ headerShown: false }}
        />
        <Screen
            name="Post"
            component={AddPostScreen}
            options={{ headerShown: false }}
        />
        <Screen
            name="Schedule"
            component={ScheduleEventScreen}
            options={{ headerShown: false }}
        />
    </Navigator>
);

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
);

export default AppNavigator;
