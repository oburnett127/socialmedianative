import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native'; // Import AppRegistry from react-native
import App from './App'; // Import the main App component. Ensure App.js exists in your project.
import { name as appName } from './app.json'; // Import the app name from app.json

AppRegistry.registerComponent(appName, () => App); // Register the main app component
