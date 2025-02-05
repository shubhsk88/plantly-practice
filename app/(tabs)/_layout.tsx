import { Entypo, Feather } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';

export default function Layout() {
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding,
  );
  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => <Entypo name="leaf" size={24} color={'black'} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
