import { Text, type TextProps } from 'react-native';

import { Colors } from '@constants/Colors';
import Fonts, { fontNames } from '@constants/Fonts';
import { useThemeColor } from '@/hooks/useThemeColor';


export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  fontSize?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  bold?: boolean;
  white?: boolean;
  color?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  fontSize = 'md',
  bold,
  white,
  color,
  ...rest
}: ThemedTextProps) {
  const colorTheme = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const font = Fonts[fontSize]

  return (
    <Text
      style={[
        { color: colorTheme },
        bold ? { fontFamily: fontNames['bold'] } : { fontFamily: fontNames['regular'] },
        white && { color: Colors.gohan },
        color && { color },
        font,
        style,
      ]}
      {...rest}
    />
  );
}
