import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { usePlantStore } from '@/store/plantStore';
import { useRouter } from 'expo-router';

import { FlatList, StyleSheet } from 'react-native';

export default function App() {
  const plants = usePlantStore((store) => store.plants);
  const router = useRouter();

  return (
    <FlatList
      data={plants}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate('/new')}
        />
      }
      renderItem={({ item }) => <PlantCard plant={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 12,
  },
});
