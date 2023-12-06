// MainScreen.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import InputField from '../components/InputField';
import Icon from 'react-native-vector-icons/Feather'; 

const MainScreen = ({ navigation }) => {
  const [size, setSize] = useState('');
  const [flooringPrice, setFlooringPrice] = useState('');
  const [installationCost, setInstallationCost] = useState('');
  const [isSquareMeter, setIsSquareMeter] = useState(false);

  const calculateCost = () => {
    const sizeFloat = parseFloat(size);
    const flooringPriceFloat = parseFloat(flooringPrice);
    const installationCostFloat = parseFloat(installationCost);

    if (!isNaN(sizeFloat) && !isNaN(flooringPriceFloat) && !isNaN(installationCostFloat)) {
      const unit = isSquareMeter ? 'Square Meters' : 'Square Feet';
      const flooring = sizeFloat * flooringPriceFloat;
      const installation = sizeFloat * installationCostFloat;
      const totalCost = flooring + installation;
      const tax = totalCost * 0.13;

      alert(
        `Installation Cost Before Tax: $${installation.toFixed(2)} ${unit}\n` +
        `Flooring Cost Before Tax: $${flooring.toFixed(2)} ${unit}\n` +
        `Total Cost Before Tax: $${totalCost.toFixed(2)} ${unit}\n` +
        `Tax: $${tax.toFixed(2)}`
      );
    } else {
      alert('Please enter valid numeric values');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <InputField
        label="Size"
        value={size}
        onChangeText={(text) => setSize(text)}
        isSwitchOn={isSquareMeter}
        onSwitchChange={() => setIsSquareMeter((prev) => !prev)}
      />
      <InputField
        label="Price per unit of flooring"
        value={flooringPrice}
        onChangeText={(text) => setFlooringPrice(text)}
        isSwitchOn={isSquareMeter}
        onSwitchChange={() => setIsSquareMeter((prev) => !prev)}
      />
      <InputField
        label="Price per unit of flooring installation"
        value={installationCost}
        onChangeText={(text) => setInstallationCost(text)}
        isSwitchOn={isSquareMeter}
        onSwitchChange={() => setIsSquareMeter((prev) => !prev)}
      />
      <Button title="Calculate" onPress={calculateCost} />

      {/* Navigate to AboutScreen using an icon */}
      <Icon
        name="info"
        size={30}
        color="blue"
        onPress={() => navigation.navigate('About')}
        style={{ marginTop: 20, alignSelf: 'center' }}
      />
    </View>
  );
};

export default MainScreen;
