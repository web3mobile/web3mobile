import { useTheme } from '@/components/ThemeProvider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Image, Platform } from 'react-native'

import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from '@/components/ui/button'

function SwitchTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onPress={toggleTheme}>
      <ButtonText>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </ButtonText>
      <ButtonIcon>
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      </ButtonIcon>
    </Button>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
export default SwitchTheme
