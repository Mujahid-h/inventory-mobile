import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

export function SignupScreen({ navigation }: Props) {
  const onContinue = () => {
    navigation.replace('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>
        Sign up to start managing your inventory.
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#9ea3b0"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#9ea3b0"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#9ea3b0"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={onContinue}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 96,
    backgroundColor: '#0b1412',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#9ea3b0',
  },
  form: {
    marginTop: 40,
    gap: 16,
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#283238',
    paddingHorizontal: 14,
    color: '#ffffff',
    backgroundColor: '#111b19',
  },
  primaryButton: {
    marginTop: 32,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#0b1412',
    fontSize: 16,
    fontWeight: '600',
  },
});

