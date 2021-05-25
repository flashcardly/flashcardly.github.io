import React from "react";
import Storage from "../../services/storage/storage.web";

const StorageProvider = React.createContext<typeof Storage>(Storage);
export default StorageProvider;
