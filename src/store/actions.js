export const onSetData = (type, payload) => ({ type, payload });

export const onReady = () => ({ type: "DATA READY" });

export const onSetMessage = (message) => ({ type: "SET MESSAGE", payload: { message } });
