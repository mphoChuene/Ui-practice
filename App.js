import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import FlatList from "./screens/FlatList";
import ElivatedCards from "./screens/ElivatedCards";
import Flatlist2 from "./screens/Flatlist2";
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView >
        <FlatList />
        <ElivatedCards/>
        <Flatlist2 />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
