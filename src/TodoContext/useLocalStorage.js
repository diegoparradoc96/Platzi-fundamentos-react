import React, { useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const getItem = JSON.parse(localStorage.getItem(itemName));
        let defaultItem;

        if (!getItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          defaultItem = initialValue;
        } else {
          defaultItem = getItem;
        }

        setItem(defaultItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const itemToSave = JSON.stringify(newItem);
      localStorage.setItem(itemName, itemToSave);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

export {useLocalStorage}