import React from 'react'
import { Box, Text } from '../atoms/index'
import { SafeAreaView } from 'react-native'

const Sidebar = () => {
	return <Box flex={1} bg='$sidebarBackground'>
		<SafeAreaView>
			<Text variant='sidebar' m='lg'>RNMail</Text>
		</SafeAreaView>
	</Box>
}

export default Sidebar
