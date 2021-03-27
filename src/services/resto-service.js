export default class RestoService{
    _apiBase = 'http://localhost:3000';

    getResouce = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`)
        if (!response.ok){
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        const result = await response.json();
        return result;
    }

    async getMenuItems(){
        return await this.getResouce('/menu/')
    }
}
