import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UserProvider } from './components/UserContext';
import HomePage from './pages/HomePage';
import FriendsPage from './pages/FriendsPage';
import RequestsPage from './pages/RequestsPage';
import NotificationsPage from './pages/NotificationsPage';
import CurrentUserPage from './pages/CurrentUserPage';
import AuthenticationPage from './pages/AuthenticationPage';
import LogoutPage from './pages/LogoutPage';
import { MaterialIcons } from '@expo/vector-icons';

export type RootDrawerParamList = {
    Home: undefined;
    CurrentUser: undefined;
    Auth: undefined;
    Logout: undefined;
    FriendsList: undefined;
    RequestsList: undefined;
    Notifications: undefined;
    MainTabs: undefined;
    SearchUser: undefined;
};

export type RootStackParamList = {
    Home: undefined;
    CurrentUser: undefined;
    Auth: undefined;
    Logout: undefined;
    FriendsList: undefined;
    RequestsList: undefined;
    Notifications: undefined;
    OtherUserPage: { id: number };
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator initialRouteName="HomePage">
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Current User" component={CurrentUserPage} />
            <Tab.Screen name="Login" component={AuthenticationPage} />
            <Tab.Screen name="Logout" component={LogoutPage} />
        </Tab.Navigator>
    );
}

function AppDrawer() {
    return (
        <Drawer.Navigator initialRouteName="MainTabs">
            <Drawer.Screen
                name="MainTabs"
                component={MainTabs}
                options={{ title: 'Home Tabs',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),
                }}
            />
            <Drawer.Screen
                name="CurrentUser"
                component={CurrentUserPage}
                options={{ title: 'Profile' ,
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),

                }}
            />
            <Drawer.Screen
                name="Auth"
                component={AuthenticationPage}
                options={{ title: 'Login',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),

                 }}
            />
            <Drawer.Screen
                name="Logout"
                component={LogoutPage}
                options={{ title: 'Logout',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),
                }}
            />
            <Drawer.Screen
                name="FriendsList"
                component={FriendsPage}
                options={{ title: 'Friends',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),
                }}
            />
            <Drawer.Screen
                name="RequestsList"
                component={RequestsPage}
                options={{ title: 'Friend Requests',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),
                }}
            />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsPage}
                options={{ title: 'Notifications',
                            drawerIcon: ({ color, size }) => (
                                <MaterialIcons name="home" size={size} color={color} />
                            ),
                }}
            />
        </Drawer.Navigator>
    );
}

function App() {
    const [user, setUser] = useState(null);

    return (
        <UserProvider>
            <NavigationContainer>
                <AppDrawer />
            </NavigationContainer>
        </UserProvider>
    );
}

export default App;
