import { catconfig } from '@/config/Catconfig'
import Script from 'next/script'

const Oneko = () => {

    if (!catconfig.enabled) {
        return null
    }

    return <Script src='./Oneko/oneko.js' data-cat="./Oneko/oneko.gif" />
}

export default Oneko