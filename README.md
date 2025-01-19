# Drawer Navigation with Tab and Stack Integration

 React Native application that features a drawer navigation menu integrated with a bottom tab navigator and stack navigators for individual screens.

## Project Structure

```plaintext
/src
├── navigation
│   ├── DrawerNavigator.tsx
│   ├── StackNavigator.tsx
│   ├── TabNavigator.tsx
├── screens
│   ├── ContactScreen.tsx
│   ├── DrawerContent.tsx
│   ├── HomeScreen.tsx      
│   ├── Screen1.tsx       
│   ├── Screen2.tsx
├── App.tsx               
```

## Installation

### Prerequisites
- Node.js (v16 or later)
- Expo CLI installed globally (`npm install -g expo-cli`)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run the application:
   - For iOS: Press `i` to open in the iOS simulator (Mac only).
   - For Android: Press `a` to open in an Android emulator or connected device.
   - For Web: Press `w` to open in the browser.

## Usage
- Open the app and click the hamburger icon to reveal the drawer.
- Navigate between the tabs (Home and Contact).
- Within the Home tab, navigate through the stack screens (Screen1, Screen2).

## Dependencies
- `@react-navigation/native`
- `@react-navigation/drawer`
- `@react-navigation/bottom-tabs`
- `@react-navigation/stack`
- `react-native-screens`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-safe-area-context`
- `react-native-vector-icons`

## Demo

https://github.com/user-attachments/assets/53e982cb-2d98-4a9e-8e29-74a43e828ead




