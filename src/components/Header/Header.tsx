import { View, Text, StyleProp, TextStyle } from 'react-native'
import HeaderStyles from './styles'

interface HeaderProps {
  title: string;
  newStyles?: StyleProp<TextStyle>;
}

const Header = ({ title, newStyles }: HeaderProps) => {
  const { container, text } = HeaderStyles;

  return (
    <View style={container}>
      <Text style={[text, newStyles]}>{title}</Text>
    </View>
  );
};

export default Header