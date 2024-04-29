import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#403a26',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 26,
        paddingHorizontal: 5,       
      },
      companyContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36
    },  
    imageContainer:{
      width: 175,
      height:175,
      marginVertical: 30,
      backgroundColor: '#f1f7cd',
      borderRadius: 100

    },
    footer: {
      backgroundColor: '#403a26',
      marginTop: 30
    },
      headerContainer:{
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#f1f7cd'
      },
      subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#f1f7cd',
      },
      smallText: {
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#f1f7cd',
        marginLeft: 5,
        textAlign: 'center'
      },
 
      image: {
        width: 'auto', 
        height: 175,
        borderRadius: 100
      },
      buttonText: {
        height: 56,
        width: 125,
        backgroundColor: '#b5f7cd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12
      }
})