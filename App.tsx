import Home from './src/screens/Home'
import { FaceCapture } from './src/screens/FaceCapture';
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <>
      <Home/>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  )
}
