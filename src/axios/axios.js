import AxiosFactory from "./axios.factory";

const commonInstance = AxiosFactory(import.meta.env.VITE_BACKEND_URL);

export default commonInstance;
