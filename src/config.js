import {config} from "dotenv";
config();

export default {
    port: process.env.PORT || 3000,
}; // This is the default configuration
