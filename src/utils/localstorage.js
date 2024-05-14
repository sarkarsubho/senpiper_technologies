import { REVIEWS } from "../constants/localStorageKeys";

const setLocalStorage = (data) => {
  let allData = JSON.parse(localStorage.getItem(REVIEWS)) || [];
  allData = [...allData, data];

  localStorage.setItem(REVIEWS, JSON.stringify(allData));
};

const getLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem(REVIEWS));
  return data;
};

export {
    setLocalStorage,
    getLocalStorage
}