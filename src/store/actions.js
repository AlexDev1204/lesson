export const onSetData = (type, payload) => ({ type, payload });

export const onReady = () => ({ type: "DATA READY" });

export const onSetMessage = (message) => ({ type: "SET MESSAGE", payload: { message } });

export const onFavorite = (favorites) => ({ type: "ADD TO FAVORITE", payload: { favorites } });

export const onBuy = (basket) => ({ type: "ADD TO BASKET", payload: { basket } });
