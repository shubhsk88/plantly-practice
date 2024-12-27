import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'expo-router';
import { PlantlyButton } from '@/components/PlantlyButton';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { PlantlyImage } from '@/components/PlantlyImage';

export default function OnboardingScreen() {
  const toggleHasOnBoardded = useUserStore((state) => state.toggleHasOnboarded);
  const router = useRouter();
  const handlePress = () => {
    router.replace('/');
    toggleHasOnBoardded();
  };
  return (
    <LinearGradient
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>+{' '}
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 24,
  },

  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: 'center',
  },
});
