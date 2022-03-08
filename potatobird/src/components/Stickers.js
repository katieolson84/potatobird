import lion from '../images/lion.png'
import snail from '../images/snail.png'
import rhino from '../images/rhino.png'
import bear from '../images/bear.png'
import flamingo from '../images/flamingo.png'
import pbird from '../images/pbird.png'

function stickers() {
    return [
        {
            id: 1,
            title: 'Mushroom Snail',
            price: 3.50,
            image: {snail}
        },
        {
            id: 2,
            title: 'Mossy Lion',
            price: 3.50,
            image: {lion}
        },
        {
            id: 3,
            title: 'Rocky Rhino',
            price: 3.50,
            image: {rhino}
        },
        {
            id: 4,
            title: 'Grassy Bear',
            price: 3.50,
            image: {bear}
        },
        {
            id: 5,
            title: 'Fancy Flamingo',
            price: 3.50,
            image: {flamingo}
        },
        {
            id: 6,
            title: 'Potato Bird',
            price: 3.50,
            image: {pbird}
        },
    ]
}
 
export default stickers;