import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type Props = {
    name: string
    onRemove: () => void
}

export function Company(props: Props){
  
    return (
        <View style={styles.form}>
          <View style={styles.companyData}>
             <Text style={styles.name}>{props.name}</Text>
          </View>  
                        
          <TouchableOpacity style={styles.button} onPress={props.onRemove} >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
    )
}