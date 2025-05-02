const getStoredData = () => {
  const getStoredDataStr = localStorage.getItem("readList");
  if (getStoredDataStr) {
    const storedBookData = JSON.parse(getStoredDataStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedBookData = getStoredData();
  if (storedBookData.includes(id)) {
    alert("This Book Already Read");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoreDB };
