export default class RestoService{
 getMenuItems() {
    fetch('http://localhost:3000/menu').then(res => res.json()).then(data =>console.log(data, 'data')).catch(() => [])
    }
}
