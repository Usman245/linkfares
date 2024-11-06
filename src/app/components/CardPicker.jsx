import React, { useState } from 'react';

const CardPicker = ({ onCardDataChange }) => {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
  });

  // Update card data locally and pass it to parent
  const handleInputChange = (field, value) => {
    const updatedCardData = { ...cardData, [field]: value };
    setCardData(updatedCardData);

    // Pass the updated card data back to the parent component
    onCardDataChange(updatedCardData);
  };

  return (
    <div>
      <input
        type="text"
        name="number"
        placeholder="Card Number"
        value={cardData.number}
        onChange={(e) => handleInputChange('number', e.target.value)}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={cardData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
      />
      <input
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={cardData.expiry}
        onChange={(e) => handleInputChange('expiry', e.target.value)}
      />
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={cardData.cvc}
        onChange={(e) => handleInputChange('cvc', e.target.value)}
      />
    </div>
  );
};

export default CardPicker;
