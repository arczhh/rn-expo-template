import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  Keyboard,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SvgAssets from '@assets/svg';
import { Colors } from '@constants/Colors';
import { ThemedText } from './ThemedText';

interface AppHeaderProps {
  children?: ReactNode;
  showBackBtn?: boolean;
  backBtnColor?: string;
  customCenterHeader?: React.ReactNode;
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  rightBtnText?: string;
  rightBtnTexStyle?: TextStyle;
  onPressRightBtn?: () => void;
  backgroundImage?: ImageSourcePropType;
  backgroundColor?: string;
  onPressBack?: () => void;
  showFilterIcon?: boolean;
  showSearchIcon?: boolean;
  overlay?: boolean;
  CustomBackIcon?: (() => ReactNode);
  CustomRightComponent?: (() => ReactNode);
  showBottomBorder?: boolean;
}

const NavigationHeader = ({
  title,
  children,
  showBackBtn,
  customCenterHeader,
  backgroundImage,
  backgroundColor,
  titleStyle,
  backBtnColor,
  rightBtnTexStyle,
  onPressBack,
  showFilterIcon,
  showSearchIcon,
  overlay,
  CustomBackIcon,
  CustomRightComponent,
  showBottomBorder,
  ...props
}: AppHeaderProps) => {

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={[
        styles.outerView,
        {
          paddingTop: insets.top,
          // backgroundColor: backgroundColor ? backgroundColor : Colors.white,
        },
        showBottomBorder && {
          borderBottomWidth: 1,
          borderColor: Colors.beerus
        }
      ]}
      source={backgroundImage}
    >
      <View
        style={[
          overlay && styles.darkOverlay,
          { height: insets.top, position: 'absolute' },
        ]}
      />
      <View style={[overlay && styles.darkOverlay]}>
        <View style={[styles.mainView]}>
          {showBackBtn ? (
            <TouchableOpacity
              style={styles.textContainer}
              onPress={onPressBack ? onPressBack : navigation.goBack}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                  marginLeft: (15),
                }}
              >
                {CustomBackIcon ?
                  <CustomBackIcon />
                  : <SvgAssets.ArrowBack
                    width={(24)}
                    height={(24)}
                    color={backBtnColor ? backBtnColor : Colors.popo}
                  />}
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.textContainer} />
          )}
          <View style={styles.centerTextContainer}>
            {customCenterHeader ? (
              customCenterHeader
            ) : (
              <ThemedText bold fontSize='md' style={titleStyle}>
                {title}
              </ThemedText>
            )}
          </View>
          {props.rightBtnText || CustomRightComponent ? (
            CustomRightComponent ? (
              <View style={[styles.textContainer]}>
                <CustomRightComponent />
              </View>
            ) :
              <TouchableOpacity
                style={[styles.textContainer, { alignItems: props.rightBtnText ? undefined : 'center', right: 0 }]}
                onPress={() => {
                  props.onPressRightBtn && props.onPressRightBtn();
                  Keyboard.dismiss();
                }}
              >
                <ThemedText
                  bold
                  fontSize='sm'
                  color={Colors.piccolo}
                  style={[rightBtnTexStyle]}
                >
                  {props.rightBtnText}
                </ThemedText>
              </TouchableOpacity>
          ) : showFilterIcon || showSearchIcon ? (
            <View style={[styles.textContainer]}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginRight: (20),
                }}
              >
                {showFilterIcon && (
                  <TouchableOpacity style={{ paddingLeft: (10) }}>
                    <SvgAssets.Filter width={(20)} height={(20)} />
                  </TouchableOpacity>
                )}
                {showSearchIcon && (
                  <TouchableOpacity style={{ paddingLeft: (10) }}>
                    <SvgAssets.SearchMatch
                      width={(20)}
                      height={(20)}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ) : (
            <View style={styles.textContainer} />
          )}
        </View>
        {children}
        <View style={{ height: (5) }} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  outerView: {
    zIndex: 1,
    // backgroundColor: Colors.white,
  },
  mainView: {
    flexDirection: 'row',
    height: (36),
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.2,
    height: '100%',
    justifyContent: 'center',
  },
  centerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  darkOverlay: {
    // backgroundColor: Colors.overlayBackground,
    width: '100%',
  },
});

export default NavigationHeader;
