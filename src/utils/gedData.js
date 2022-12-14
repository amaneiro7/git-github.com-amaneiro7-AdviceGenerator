const API = process.env.API;

const getData = async () => {
    try {
        const response = await fetch(API)
        const data = await response.json();
        return data
    } catch (error) {
        console,error('Fetch Error ', error)
    }
}

export default getData;