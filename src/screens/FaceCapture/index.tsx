import { useState } from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'   
import { styles } from './styles'


export function FaceCapture(){
    const [ fileUri, setFileUri ] = useState('https://github.com/fabricio-vieira.png')
    const [ fileData, setFileData ] = useState<string | null>()

    const baseUrl = 'http://192.168.15.215:8085/cgi-bin'

    const handleCheckFaceData = async () => {
        await axios({
            
            method: 'get',
            url: `${baseUrl}/AccessUser.cgi?action=list&UserIDList[0]=1`
        }).then((response: any) => {
            console.log(response.data)
        })
    }

    const handelImagePicker = async () => {
       const result =  await ImagePicker.launchCameraAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
            cameraType: ImagePicker.CameraType.front
        })

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uriString = result.assets[0].uri
            const base64String = result.assets[0].base64
            console.log(uriString)
            setFileUri(uriString)
            setFileData(base64String)
        }
    }

return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Meu App</Text>
      </View>
      
      <View style={styles.companyContainer}>
        <Text style={styles.subTitle}>Insira a Imagem</Text>
        <View style={styles.imageContainer}>
            <Image
            //    source={require('../../assets/personal.png')}
               source={{ uri:fileUri}}
               style={styles.image} 
                />
        </View>
          <TouchableOpacity style={styles.buttonText} onPress={handelImagePicker}>
            <Text>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.smallText}>Todos os direitos reservados</Text>
      </View>
    </View>
    )
}