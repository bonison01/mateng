// /app/delivery-rates/DeliveryRates.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { distanceMap } from './distanceMap';
import styles from './delivery-rates.module.css'; // Ensure this path is correct

const predefinedAddresses = Object.keys(distanceMap).map((address) => ({
  value: address,
  label: address,
}));

export default function DeliveryRates() {
  const [fromAddress, setFromAddress] = useState<{ value: string, label: string } | null>(null);
  const [toAddress, setToAddress] = useState<{ value: string, label: string } | null>(null);
  const [rate, setRate] = useState<number | null>(null);

  useEffect(() => {
    if (fromAddress && toAddress && distanceMap[fromAddress.value] && distanceMap[fromAddress.value][toAddress.value] !== undefined) {
      const distance = distanceMap[fromAddress.value][toAddress.value];
      const calculatedRate = distance * 20; // Calculate rate based on distance
      setRate(calculatedRate);
    } else {
      setRate(null);
    }
  }, [fromAddress, toAddress]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Delivery Rates</h1>

      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor="from">From Address</label>
        <Select
          id="from"
          name="from"
          className={styles.selectField}
          options={predefinedAddresses}
          value={fromAddress}
          onChange={(selected) => setFromAddress(selected ? selected as { value: string, label: string } : null)}
          placeholder="Select from address..."
        />
      </div>

      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor="to">To Address</label>
        <Select
          id="to"
          name="to"
          className={styles.selectField}
          options={predefinedAddresses}
          value={toAddress}
          onChange={(selected) => setToAddress(selected ? selected as { value: string, label: string } : null)}
          placeholder="Select to address..."
        />
      </div>

      {rate !== null && (
        <div className={styles.rateDisplay}>
          <p>Delivery Rate from {fromAddress?.label} to {toAddress?.label} is: ₹{rate}</p>
        </div>
      )}
    </div>
  );
}
