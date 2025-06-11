import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import { ArrowLeft, Camera, Eye, EyeOff, User, Mail, Phone, MapPin, Calendar } from 'lucide-react-native';
import { router } from 'expo-router';
import { useAppContext } from '@/context/AppContext';

export default function EditProfileScreen() {
  const { isSmallDevice, isMediumDevice } = useAppContext();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    address: '123 Main Street',
    city: 'New York',
    zipCode: '10001',
    country: 'United States',
  });

  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const getIconSize = () => {
    if (isSmallDevice) return 20;
    if (isMediumDevice) return 22;
    return 24;
  };

  const iconSize = getIconSize();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      Alert.alert('Error', 'Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    Alert.alert(
      'Profile Updated',
      'Your profile information has been successfully updated.',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  const handleChangePassword = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all password fields.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      Alert.alert('Error', 'New password and confirmation do not match.');
      return;
    }

    if (passwordData.newPassword.length < 8) {
      Alert.alert('Error', 'New password must be at least 8 characters long.');
      return;
    }

    Alert.alert(
      'Password Changed',
      'Your password has been successfully updated.',
      [{ text: 'OK', onPress: () => {
        setShowPasswordSection(false);
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }}]
    );
  };

  const handleChangePhoto = () => {
    Alert.alert(
      'Change Profile Photo',
      'Choose how you want to update your profile photo',
      [
        { text: 'Take Photo', onPress: () => Alert.alert('Demo', 'Camera functionality would open here') },
        { text: 'Choose from Gallery', onPress: () => Alert.alert('Demo', 'Photo gallery would open here') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { paddingHorizontal: isSmallDevice ? 16 : 20 }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={iconSize} color="#333" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { fontSize: isSmallDevice ? 16 : 18 }]}>
          Edit Profile
        </Text>
        <TouchableOpacity onPress={handleSaveProfile} style={styles.saveButton}>
          <Text style={[styles.saveButtonText, { fontSize: isSmallDevice ? 14 : 16 }]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Profile Photo Section */}
        <View style={[styles.photoSection, { paddingHorizontal: isSmallDevice ? 16 : 20 }]}>
          <View style={styles.photoContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} 
              style={[styles.profilePhoto, {
                width: isSmallDevice ? 80 : 100,
                height: isSmallDevice ? 80 : 100,
                borderRadius: isSmallDevice ? 40 : 50,
              }]} 
            />
            <TouchableOpacity 
              style={[styles.cameraButton, {
                width: isSmallDevice ? 28 : 32,
                height: isSmallDevice ? 28 : 32,
                borderRadius: isSmallDevice ? 14 : 16,
              }]}
              onPress={handleChangePhoto}
            >
              <Camera size={isSmallDevice ? 14 : 16} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.changePhotoText, { fontSize: isSmallDevice ? 14 : 16 }]}>
            Tap to change photo
          </Text>
        </View>

        {/* Personal Information */}
        <View style={[styles.section, { marginHorizontal: isSmallDevice ? 16 : 20 }]}>
          <Text style={[styles.sectionTitle, { fontSize: isSmallDevice ? 16 : 18 }]}>
            Personal Information
          </Text>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              First Name *
            </Text>
            <View style={styles.inputContainer}>
              <User size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.firstName}
                onChangeText={(value) => handleInputChange('firstName', value)}
                placeholder="Enter first name"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Last Name *
            </Text>
            <View style={styles.inputContainer}>
              <User size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.lastName}
                onChangeText={(value) => handleInputChange('lastName', value)}
                placeholder="Enter last name"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Email Address *
            </Text>
            <View style={styles.inputContainer}>
              <Mail size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                placeholder="Enter email address"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Phone Number
            </Text>
            <View style={styles.inputContainer}>
              <Phone size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                placeholder="Enter phone number"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Date of Birth
            </Text>
            <View style={styles.inputContainer}>
              <Calendar size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.dateOfBirth}
                onChangeText={(value) => handleInputChange('dateOfBirth', value)}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* Address Information */}
        <View style={[styles.section, { marginHorizontal: isSmallDevice ? 16 : 20 }]}>
          <Text style={[styles.sectionTitle, { fontSize: isSmallDevice ? 16 : 18 }]}>
            Address Information
          </Text>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Street Address
            </Text>
            <View style={styles.inputContainer}>
              <MapPin size={iconSize - 4} color="#666" style={styles.inputIcon} />
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.address}
                onChangeText={(value) => handleInputChange('address', value)}
                placeholder="Enter street address"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 2, marginRight: 8 }]}>
              <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
                City
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                  value={formData.city}
                  onChangeText={(value) => handleInputChange('city', value)}
                  placeholder="Enter city"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
                ZIP Code
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                  value={formData.zipCode}
                  onChangeText={(value) => handleInputChange('zipCode', value)}
                  placeholder="ZIP"
                  placeholderTextColor="#999"
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
              Country
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16 }]}
                value={formData.country}
                onChangeText={(value) => handleInputChange('country', value)}
                placeholder="Enter country"
                placeholderTextColor="#999"
              />
            </View>
          </View>
        </View>

        {/* Password Section */}
        <View style={[styles.section, { marginHorizontal: isSmallDevice ? 16 : 20 }]}>
          <TouchableOpacity 
            style={styles.passwordToggle}
            onPress={() => setShowPasswordSection(!showPasswordSection)}
          >
            <Text style={[styles.sectionTitle, { fontSize: isSmallDevice ? 16 : 18 }]}>
              Change Password
            </Text>
            <Text style={[styles.toggleText, { fontSize: isSmallDevice ? 14 : 16 }]}>
              {showPasswordSection ? 'Cancel' : 'Change'}
            </Text>
          </TouchableOpacity>

          {showPasswordSection && (
            <>
              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
                  Current Password
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16, flex: 1 }]}
                    value={passwordData.currentPassword}
                    onChangeText={(value) => handlePasswordChange('currentPassword', value)}
                    placeholder="Enter current password"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPasswords.current}
                  />
                  <TouchableOpacity onPress={() => togglePasswordVisibility('current')}>
                    {showPasswords.current ? 
                      <EyeOff size={iconSize - 4} color="#666" /> : 
                      <Eye size={iconSize - 4} color="#666" />
                    }
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
                  New Password
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16, flex: 1 }]}
                    value={passwordData.newPassword}
                    onChangeText={(value) => handlePasswordChange('newPassword', value)}
                    placeholder="Enter new password"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPasswords.new}
                  />
                  <TouchableOpacity onPress={() => togglePasswordVisibility('new')}>
                    {showPasswords.new ? 
                      <EyeOff size={iconSize - 4} color="#666" /> : 
                      <Eye size={iconSize - 4} color="#666" />
                    }
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={[styles.inputLabel, { fontSize: isSmallDevice ? 14 : 16 }]}>
                  Confirm New Password
                </Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={[styles.textInput, { fontSize: isSmallDevice ? 14 : 16, flex: 1 }]}
                    value={passwordData.confirmPassword}
                    onChangeText={(value) => handlePasswordChange('confirmPassword', value)}
                    placeholder="Confirm new password"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPasswords.confirm}
                  />
                  <TouchableOpacity onPress={() => togglePasswordVisibility('confirm')}>
                    {showPasswords.confirm ? 
                      <EyeOff size={iconSize - 4} color="#666" /> : 
                      <Eye size={iconSize - 4} color="#666" />
                    }
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity 
                style={[styles.changePasswordButton, { marginTop: isSmallDevice ? 16 : 20 }]}
                onPress={handleChangePassword}
              >
                <Text style={[styles.changePasswordButtonText, { fontSize: isSmallDevice ? 14 : 16 }]}>
                  Update Password
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E7',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  saveButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#4B7BF5',
  },
  content: {
    flex: 1,
  },
  photoSection: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  profilePhoto: {
    resizeMode: 'cover',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#4B7BF5',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  changePhotoText: {
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  section: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    marginBottom: 16,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#FAFAFA',
  },
  inputIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  passwordToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  toggleText: {
    fontFamily: 'Inter-Medium',
    color: '#4B7BF5',
  },
  changePasswordButton: {
    backgroundColor: '#4B7BF5',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  changePasswordButtonText: {
    fontFamily: 'Inter-SemiBold',
    color: '#FFF',
  },
});
