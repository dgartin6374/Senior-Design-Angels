import * as React from 'react';
import { View, Button, Text, Animated, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';


function Start({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
                fontSize: 64,
                textAlign: 'center',
                margin: 10,
                marginBottom: 0,
                color: 'black',
            }}> Gaurdian Angel Saftey Alerting System </Text>
            <View style={{
                backgroundColor: '#CB826A',
                padding: 0,
                width: "50%",
                marginBottom: 0,
                marginTop: 40,
                borderRadius: 50,
            }}><Text style={{
                fontSize: 18,
                textAlign: 'center',
                margin: 15,
                color: 'CB826A',
            }} onPress={() => navigation.navigate('Setup1')} > Start </Text></View>
        </LinearGradient >
    );
}

//Sets up parent info
function Setup1({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>Parent's Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Email Address" />
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Phone Number" />
            <Text>Add an image input here with text under that says "This will help emergancy care ensure you are really the parent/guardian"</Text>
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup2')} /></View>
        </LinearGradient >
    );
}

//Sets up child Info
function Setup2({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>Parent's Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="First Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Last Name" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Date of Birth" />
            <TextInput style={styles.input}
                maxLength={10}
                keyboardType='numeric'
                placeholder="Allergies" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Additional info to tell emergancy services about this child" />
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Setup3')} /></View>
        </LinearGradient >
    );
}

//Sets up Car info
function Setup3({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.text}>Parent's Info</Text>
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Model" />
            <TextInput style={styles.input}
                maxLength={4}
                keyboardType='numeric'
                placeholder="Year" />
            <TextInput style={styles.input}
                maxLength={25}
                placeholder="Color" />
            <TextInput style={styles.input}
                maxLength={6}
                keyboardType='numeric'
                placeholder="Plate Number" />
            <View style={styles.arrow}><Icon name="arrowright" size={24} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} /></View>
        </LinearGradient >
    );
}


function Home({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Child info, parent info, car info </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Account')} />
                <Icon name="arrowright" size={20} color="black" type="antdesign"/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </LinearGradient >
    );
}

function Account({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> GPS, Button, Camera, input end location </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="black" type="antdesign" />
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Home')}/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Info')} />
            </View>
        </LinearGradient >
    );
}

function Info({ navigation }) {
    return (
        <LinearGradient colors={['#fffffa', '#F2F5DD']} style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ position: 'absolute' }}><Text style={styles.text}> Charity info and Statistics </Text></View>
            <View style={styles.navBar}>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Account')}m/>
                <Icon name="arrowright" size={20} color="white" type="antdesign" onPress={() => navigation.navigate('Home')} />
                <Icon name="arrowright" size={20} color="black" type="antdesign" />
            </View>
        </LinearGradient >
    );
}


const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Start"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
            <Stack.Screen
                name="Start"
                component={Start}
            />
            <Stack.Screen
                name="Setup1"
                component={Setup1}
            />
            <Stack.Screen
                name="Setup2"
                component={Setup2}
            />
            <Stack.Screen
                name="Setup3"
                component={Setup3}
            />
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Account"
                component={Account}
            />
            <Stack.Screen
                name="Info"
                component={Info}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}

const styles = {
    arrow: {
        backgroundColor: '#CB826A',
        padding: 15,
        width: "12%",
        marginBottom: 0,
        marginTop: 0,
        borderRadius: 90,
        position: 'absolute',
        margin: 0,
        right: 20,
        bottom: 20,
    },
    text: {
        fontSize: 32,
        color: "black",
        textAlign: 'center',
        margin: 0,
        marginBottom: 400,
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        borderRadius: 10,
        marginBottom: 0,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'green',
        padding: 10,
        width: "100%",
        position: 'absolute',
        margin: 0,
        bottom: 0,
    },
};