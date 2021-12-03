import React from 'react'
import GSMContent from '../GSMContent/GSMContent'
import GSMFooter from '../GSMFooter/GSMFooter'
import GSMHeader from '../GSMHeader/GSMHeader'
import './GSMMain.css'


export default function GSMMain() {
    return (
        <div >
            <GSMHeader />
            <GSMContent />
            <GSMFooter />
        </div>
    )
}
