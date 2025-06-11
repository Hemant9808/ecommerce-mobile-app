import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useAppContext } from '@/context/AppContext';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export default function SectionHeader({ title, actionLabel, onActionPress }: SectionHeaderProps) {
  const { isSmallDevice, isMediumDevice, isLargeDevice } = useAppContext();

  // Responsive sizing
  const getTitleFontSize = () => {
    if (isSmallDevice) return 16;
    if (isMediumDevice) return 18;
    return 20; // Large device
  };

  const getActionFontSize = () => {
    if (isSmallDevice) return 12;
    if (isMediumDevice) return 14;
    return 15; // Large device
  };

  const getChevronSize = () => {
    if (isSmallDevice) return 14;
    if (isMediumDevice) return 16;
    return 18; // Large device
  };

  const getMarginBottom = () => {
    if (isSmallDevice) return 12;
    if (isMediumDevice) return 16;
    return 20; // Large device
  };

  return (
    <View style={[
      styles.container,
      { marginBottom: getMarginBottom() }
    ]}>
      <Text style={[
        styles.title,
        { 
          fontSize: getTitleFontSize(),
          flex: 1,
          marginRight: 8,
        }
      ]} 
      numberOfLines={1}
      >
        {title}
      </Text>
      {actionLabel && (
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={onActionPress}
          activeOpacity={0.7}
        >
          <Text style={[
            styles.actionLabel,
            { fontSize: getActionFontSize() }
          ]}>
            {actionLabel}
          </Text>
          {onActionPress && (
            <ChevronRight 
              size={getChevronSize()} 
              color="#4B7BF5" 
              style={styles.chevron}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    color: '#333',
    lineHeight: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    minHeight: 32, // Accessibility minimum touch target
  },
  actionLabel: {
    fontFamily: 'Inter-Medium',
    color: '#4B7BF5',
  },
  chevron: {
    marginLeft: 2,
  },
});
