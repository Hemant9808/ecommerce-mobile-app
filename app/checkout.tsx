import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Stack, router } from 'expo-router';
import { ChevronLeft, CreditCard, MapPin, Truck, Check } from 'lucide-react-native';
import { useAppContext } from '@/context/AppContext';

type PaymentMethod = 'credit_card' | 'paypal' | 'apple_pay';
type DeliveryMethod = 'standard' | 'express' | 'same_day';

export default function CheckoutScreen() {
  const { cartItems, cartTotal } = useAppContext();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('standard');
  const [address, setAddress] = useState({
    fullName: 'John Doe',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  });
  
  const deliveryFee = deliveryMethod === 'standard' ? 5 : deliveryMethod === 'express' ? 15 : 25;
  const totalAmount = cartTotal + deliveryFee;
  
  const handlePlaceOrder = () => {
    Alert.alert(
      'Order Placed',
      'Your order has been placed successfully!',
      [
        {
          text: 'OK',
          onPress: () => router.replace('/(tabs)'),
        },
      ]
    );
  };
  
  return (
    <>
      <Stack.Screen options={{ 
        headerTitle: 'Checkout',
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#333" />
          </TouchableOpacity>
        ),
      }} />
      
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Shipping Address */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MapPin size={20} color="#4B7BF5" />
              <Text style={styles.sectionTitle}>Shipping Address</Text>
            </View>
            
            <View style={styles.addressForm}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  value={address.fullName}
                  onChangeText={(text) => setAddress({ ...address, fullName: text })}
                />
              </View>
              
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Street Address</Text>
                <TextInput
                  style={styles.input}
                  value={address.street}
                  onChangeText={(text) => setAddress({ ...address, street: text })}
                />
              </View>
              
              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
                  <Text style={styles.inputLabel}>City</Text>
                  <TextInput
                    style={styles.input}
                    value={address.city}
                    onChangeText={(text) => setAddress({ ...address, city: text })}
                  />
                </View>
                
                <View style={[styles.inputGroup, { width: 80 }]}>
                  <Text style={styles.inputLabel}>State</Text>
                  <TextInput
                    style={styles.input}
                    value={address.state}
                    onChangeText={(text) => setAddress({ ...address, state: text })}
                  />
                </View>
              </View>
              
              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { width: 120 }]}>
                  <Text style={styles.inputLabel}>Zip Code</Text>
                  <TextInput
                    style={styles.input}
                    value={address.zipCode}
                    onChangeText={(text) => setAddress({ ...address, zipCode: text })}
                    keyboardType="numeric"
                  />
                </View>
                
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                  <Text style={styles.inputLabel}>Country</Text>
                  <TextInput
                    style={styles.input}
                    value={address.country}
                    onChangeText={(text) => setAddress({ ...address, country: text })}
                  />
                </View>
              </View>
            </View>
          </View>
          
          {/* Payment Method */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <CreditCard size={20} color="#4B7BF5" />
              <Text style={styles.sectionTitle}>Payment Method</Text>
            </View>
            
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  paymentMethod === 'credit_card' && styles.selectedOption,
                ]}
                onPress={() => setPaymentMethod('credit_card')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Credit Card</Text>
                  <Text style={styles.optionSubtitle}>Visa, Mastercard, Amex</Text>
                </View>
                {paymentMethod === 'credit_card' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  paymentMethod === 'paypal' && styles.selectedOption,
                ]}
                onPress={() => setPaymentMethod('paypal')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>PayPal</Text>
                  <Text style={styles.optionSubtitle}>Pay with your PayPal account</Text>
                </View>
                {paymentMethod === 'paypal' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  paymentMethod === 'apple_pay' && styles.selectedOption,
                ]}
                onPress={() => setPaymentMethod('apple_pay')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Apple Pay</Text>
                  <Text style={styles.optionSubtitle}>Pay with Apple Pay</Text>
                </View>
                {paymentMethod === 'apple_pay' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Delivery Method */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Truck size={20} color="#4B7BF5" />
              <Text style={styles.sectionTitle}>Delivery Method</Text>
            </View>
            
            <View style={styles.optionsContainer}>
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  deliveryMethod === 'standard' && styles.selectedOption,
                ]}
                onPress={() => setDeliveryMethod('standard')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Standard Delivery</Text>
                  <Text style={styles.optionSubtitle}>3-5 business days</Text>
                </View>
                <Text style={styles.optionPrice}>$5.00</Text>
                {deliveryMethod === 'standard' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  deliveryMethod === 'express' && styles.selectedOption,
                ]}
                onPress={() => setDeliveryMethod('express')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Express Delivery</Text>
                  <Text style={styles.optionSubtitle}>1-2 business days</Text>
                </View>
                <Text style={styles.optionPrice}>$15.00</Text>
                {deliveryMethod === 'express' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.optionCard,
                  deliveryMethod === 'same_day' && styles.selectedOption,
                ]}
                onPress={() => setDeliveryMethod('same_day')}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionTitle}>Same Day Delivery</Text>
                  <Text style={styles.optionSubtitle}>Available in select areas</Text>
                </View>
                <Text style={styles.optionPrice}>$25.00</Text>
                {deliveryMethod === 'same_day' && (
                  <View style={styles.checkmark}>
                    <Check size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Order Summary */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Summary</Text>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${cartTotal.toFixed(2)}</Text>
            </View>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
            </View>
            
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${totalAmount.toFixed(2)}</Text>
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
            <Text style={styles.placeOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
    marginLeft: 8,
  },
  addressForm: {
    marginTop: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F5F7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#4B7BF5',
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  optionPrice: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#333',
    marginRight: 16,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4B7BF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#333',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  totalLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#333',
  },
  totalValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#333',
  },
  footer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
  },
  placeOrderButton: {
    backgroundColor: '#4B7BF5',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  placeOrderButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#FFF',
  },
});
