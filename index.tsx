import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Home from "./src/pages/home";
import Wallet from "./src/pages/wallet";

export { createBottomTabNavigator, NavigationContainer, FontAwesomeIcon, faMartiniGlass, Home, faWallet, Wallet}