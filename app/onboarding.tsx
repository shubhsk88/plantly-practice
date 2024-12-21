import { Text, View, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { Button } from 'react-native';
import { useUserStore } from '@/store/userStore';

export default function OnboardingScreen() {
  const toggleHasOnBoardded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <Button title="Let me in" onPress={toggleHasOnBoardded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
