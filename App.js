import { StyleSheet } from 'react-native';
import Registration from './screens/authentication/registration';

export default function App() {
  return (
    <Registration/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
