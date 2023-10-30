import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as api from "../../../../services/api";

const Statement = () => {
  const [data, setData] = useState([])

  const { jwt, account } = api.useAuth();

  useEffect(() => {
    const fetchStatementData = async (acc, jwt) => {
      try {
        const statements = await api.getStatement(acc, jwt)
        setData(statements)
      }catch(err) {
        console.log("FUNCTION ERROR")
      }
    }
    fetchStatementData(account, jwt)
  }, [])
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Amount</Text>
        <Text style={styles.headerText}>Balance</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: 'lightgray' }]}>
            <Text style={[styles.itemText, styles.marginL]}>{item.created_at.slice(5,10)}</Text>
            <Text style={[styles.blackText, item.transaction_type === '+' ? styles.greenText : styles.redText]}>{item.transaction_type}</Text>
            <Text style={[styles.blackText, item.transaction_type === '+' ? styles.greenText : styles.redText]}>{item.amount}</Text>
            <Text style={[styles.blackText, styles.marginR]}>{item.balance}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  blackText: {
    color: 'black',
  },
  greenText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  marginL: {
    marginLeft: 10
  },
  marginR: {
    marginRight: 10
  }
});

export default Statement;
