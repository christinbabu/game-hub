import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: '46dacbb4b46c4f8c8e808bf9e200b9c1'
    }
})
