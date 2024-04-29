import React, { useState } from 'react'

import {  Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'

import { Company } from '../../components/Company';

export default function Home() {

  const [ companies, setCompanies ] = useState<string[]>([])
  const [ companyName, setCompanyName ] = useState('')

  function handleAddCompany() {
    if (companies.includes(companyName)) {
       return Alert.alert('Empresa já existe', 'Já existe uma empreasa cadastrada com esse nome')
    }
    setCompanies(prevState => [...prevState, companyName])
    setCompanyName('')
    // setCompany(prevState => [...prevState, 'PCG Tecnologia'])
  }

  function handleRemoveCompany(name: String){
    
    Alert.alert('Remover', `Remover ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setCompanies(prevState => prevState.filter(company => company !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
}

// const companies = []

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Meu App</Text>
      </View>
      
      <View style={styles.companyContainer}>
        <Text style={styles.subTitle}>Insira a Empresa</Text>
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              placeholder='Digite aqui...'
              placeholderTextColor={'#c8e3c5'}
              onChangeText={e => setCompanyName(e)}
              value={companyName}
              />
          <TouchableOpacity style={styles.buttonText} onPress={handleAddCompany}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList 
        data={companies}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Company 
          key={item}
          name= {item} 
          onRemove={() => handleRemoveCompany(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%'
        }}
        ListEmptyComponent={() => (
          <Text style={styles.smallText}>
            Não há empresas cadastradas!
          </Text>
        )}
      />    

 
      <View style={styles.footerContainer}>
        <Text style={styles.smallText}>Todos os direitos reservados</Text>
      </View>
    </View>
  );
}