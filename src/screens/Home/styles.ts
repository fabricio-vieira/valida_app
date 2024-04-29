import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // # Containers
    container: {
      flex: 1,
      backgroundColor: '#403a26',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 26,
      paddingHorizontal: 5,
      
     
    },
    headerContainer:{
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    companyContainer : {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 36
    },  
    form:{
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginVertical: 10
    },
    footerContainer: {
      backgroundColor: '#403a26',
      marginTop: 30
    },
    contentContainer: {
      paddingHorizontal: 5,
      marginHorizontal: 0
      
    },

    // Titles
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
      marginLeft: 15
    },
    smallText: {
      fontSize: 10,
      fontWeight: 'bold',
      fontFamily: 'sans-serif',
      color: '#f1f7cd',
      marginLeft: 5,
      textAlign: 'center'
    },

    // Componets
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#5b5847',
      borderRadius: 5,
      padding: 16,
      fontSize: 16, 
     
    },
    buttonText: {
      height: 56,
      width: 75,
      backgroundColor: '#b5f7cd',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12
    }
    
  });
  