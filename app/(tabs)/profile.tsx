import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useUserStore } from '@/store/userStore';
import { theme } from '@/theme';
import { PlantlyButton } from '@/components/PlantlyButton';

export default function Profile() {
  const toggleHasOnBoardded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to Onboarding" onPress={toggleHasOnBoardded} />
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
});
