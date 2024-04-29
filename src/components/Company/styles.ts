import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form:{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
      },
    companyData: {
        flex: 1,
        height: 46,
        backgroundColor: '#5b5847',
        borderRadius: 5,
        padding: 6,
        justifyContent: 'center',
        borderColor: '#ffc870',
        borderWidth: 1
       
      },
    name:{
        fontSize: 16, 
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#f1f7cd',
        
      },
    button: {
        height: 46,
        width: 75,
        backgroundColor: '#ffc870',
        borderRadius: 5,      
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontSize: 26, 
      }
})