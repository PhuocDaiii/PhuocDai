import React from 'react'
import './DashBroadHeader.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

export default function DashBroadHeader() {
    return (
        <div className="DashBroadHeader">
            <div className="Tittle">
                Dashboard
            </div>
            <div className="DateMonth">
                Thứ 2 , ngày 05/06/2021
            </div>
            <ul >
                <li><a href="" >Ngày</a></li>
                <li><a href="">Tuần</a></li>
                <li><a href="">Tháng</a></li>
                <li><a href="">Năm</a></li>
            </ul>
            <div className="DBHeader">
                <div className="DBTittle">
                    Thời Gian :
                </div>
                <div className="DBCallendar">
                    <DatePickerComponent
                        format="dd/MM/yy"
                        placeholder="Choose Date Month Week"></DatePickerComponent>
                </div>
            </div>
        </div>
    )
}
