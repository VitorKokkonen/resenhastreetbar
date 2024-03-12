// HeaderHome.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderHomeProps {
  headerProps: any; // Adapte conforme necessário
}

const HeaderHome: React.FC<HeaderHomeProps> = ({ headerProps }) => (
  <View style={styles.containerHeader}>
    <Text style={{ fontSize: 20, color: 'white' }}>Meu Cabeçalho Personalizado</Text>
  </View>
);

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderHome;
