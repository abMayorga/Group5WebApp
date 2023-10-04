import { createVendiaClient } from "@vendia/client";

const client = createVendiaClient({
    apiUrl: `https://svg9ucjp9a.execute-api.us-west-2.amazonaws.com/graphql/`,
    apiKey: '8mhdFMDbST2xsVeZu1PZ1W1TiEmNj58VziqzHLo7oybQ', // <---- API key
 })

 export const VendiaClient = () => {
    return {client};
 };