"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const native_1 = require("@react-navigation/native");
const drawer_1 = require("@react-navigation/drawer");
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const UserContext_1 = require("./src/components/UserContext");
const HomePage_1 = __importDefault(require("./src/pages/HomePage"));
const FriendsPage_1 = __importDefault(require("./src/pages/FriendsPage"));
const RequestsPage_1 = __importDefault(require("./src/pages/RequestsPage"));
const NotificationsPage_1 = __importDefault(require("./src/pages/NotificationsPage"));
const CurrentUserPage_1 = __importDefault(require("./src/pages/CurrentUserPage"));
const OtherUserPage_1 = __importDefault(require("./src/pages/OtherUserPage"));
const AuthenticationPage_1 = __importDefault(require("./src/pages/AuthenticationPage"));
const LogoutPage_1 = __importDefault(require("./src/pages/LogoutPage"));
const Drawer = (0, drawer_1.createDrawerNavigator)();
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
function MainTabs() {
    return (react_1.default.createElement(Tab.Navigator, null,
        react_1.default.createElement(Tab.Screen, { name: "Home", component: HomePage_1.default }),
        react_1.default.createElement(Tab.Screen, { name: "Friends", component: FriendsPage_1.default }),
        react_1.default.createElement(Tab.Screen, { name: "Requests", component: RequestsPage_1.default }),
        react_1.default.createElement(Tab.Screen, { name: "Notifications", component: NotificationsPage_1.default })));
}
function AppDrawer() {
    return (react_1.default.createElement(Drawer.Navigator, { initialRouteName: "Home" },
        react_1.default.createElement(Drawer.Screen, { name: "HomeTabs", component: MainTabs, options: { title: 'Home' } }),
        react_1.default.createElement(Drawer.Screen, { name: "CurrentUser", component: CurrentUserPage_1.default }),
        react_1.default.createElement(Drawer.Screen, { name: "OtherUserPage", component: OtherUserPage_1.default }),
        react_1.default.createElement(Drawer.Screen, { name: "Auth", component: AuthenticationPage_1.default }),
        react_1.default.createElement(Drawer.Screen, { name: "Logout", component: LogoutPage_1.default })));
}
function App() {
    const [user, setUser] = (0, react_1.useState)(null);
    return (react_1.default.createElement(UserContext_1.UserProvider, null,
        react_1.default.createElement(native_1.NavigationContainer, null,
            react_1.default.createElement(AppDrawer, null))));
}
exports.default = App;
