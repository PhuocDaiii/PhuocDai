import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import { Table } from 'antd'
import chamthang from '../../assets/2icon/Infor.png';
import line from '../../assets/2icon/Line 7.png';
import vongxoay from '../../assets/2icon/Solid.png';
import pin from '../../assets/2icon/Vectdor.png';
import pinvang from '../../assets/2icon/Vector.png';
import songdo from '../../assets/2icon/Vectord.png';
import chuong from '../../assets/2icon/Warrning.png';
import chuongdo from '../../assets/2icon/Warrningg.png';
import songxanh from '../../assets/2icon/Vector5.png';
import bacham11 from '../../assets/2icon/bacham11.png';
import { Link } from 'react-router-dom';

import './QLTBGSMContent.css'


export default function QLTBGSMContent() {
    




    const data = [
        {
            key: ' 1',
            Stt: '1',
            seriesNumber: '0000001',
            LDGS: 'ATM',
            TDGS: '',
            Address: '16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                    <Link to="/Install">
               
                    <div >
                        <img src={bacham11} alt="" />
                    </div>
                    </Link>
            </>
        },

        {
            key: ' 2',
            Stt: '2',
            seriesNumber: '0000002',
            LDGS: 'ATM',
            TDGS: '090 024 0256',
            Address: '16 Giang Văn Minh,Phường Kim Mã , Quận Ba Đình , Hà Nội',
            Status: <>
                <img src={pinvang} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 3',
            Stt: '3',
            seriesNumber: '0000003',
            LDGS: 'ATM',
            TDGS: '097 754 0254',
            Address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>

        },

        {
            key: ' 4',
            Stt: '4',
            seriesNumber: '0000009',
            LDGS: 'ATM',
            TDGS: '079 656 4541',
            Address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuongdo} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 5',
            Stt: '5',
            seriesNumber: '0000005',
            LDGS: 'ATM',
            TDGS: '097 754 0254',
            Address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />
            </>
        },

        {
            key: ' 6',
            Stt: '6',
            seriesNumber: '0000021',
            LDGS: 'Phòng giao dịch',
            TDGS: '030 054 0544',
            Address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Status: <>
                <img src={pin} alt="" />
                <img src={songdo} alt="" />
                <img src={chuong} alt="" />
                <img src={line} alt="" />

            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 7',
            Stt: '7',
            seriesNumber: '0000011',
            LDGS: 'Phòng giao dịch',
            TDGS: '093 025 0232',
            Address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội ',
            Status: <>
                <img src={pinvang} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 8',
            Stt: '8',
            seriesNumber: '0000064',
            LDGS: 'ATM',
            TDGS: '030 054 0544',
            Address: '16 Giang Văn Minh, Phường Kim Mã, Quận Ba Đình, Hà Nội',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,

            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 9',
            Stt: '9',
            seriesNumber: '0000010',
            LDGS: 'ATM',
            TDGS: '030 054 0544',
            Address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ ',
            Status: <>
                <img src={pin} alt="" />
                <img src={songdo} alt="" />
                <img src={chuongdo} alt="" />

            </>,

            anh2: <>
                <img src={bacham11} alt="" />

            </>
        },

        {
            key: ' 10',
            Stt: '10',
            seriesNumber: '0000035',
            LDGS: 'Phòng giao dịch',
            TDGS: '030 054 0544',
            Address: 'Sô 9 Lô 2B KDT Trung Yên, Phường yên Hòa, Quận Cầu Giấy, Hà Nội',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />
            </>


        },

        {
            key: ' 11',
            Stt: '11',
            seriesNumber: '0000035',
            LDGS: 'ATM',
            TDGS: '030 054 0544',
            Address: 'Số 3 Nguyễn Thanh Đằng, Phường Phước Hiệp, TP Bài Rịa, Tỉnh Bà Rịa - Vũng Tàu',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>


        },

        {
            key: ' 12',
            Stt: '12',
            seriesNumber: '0000035',
            LDGS: 'Phòng giao dịch',
            TDGS: '097 754 0254',
            Address: 'Số 13 Đường tỉnh 868, KP 01, Thị xã Cai Lậy, Tỉnh Tiền Giang',
            Status: <>
                <img src={pin} alt="" />
                <img src={songdo} alt="" />
                <img src={chuong} alt="" />
                <img src={line} alt="" />

            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>


        },


        {
            key: ' 13',
            Stt: '13',
            seriesNumber: '0000035',
            LDGS: 'Phòng giao dịch',
            TDGS: '030 054 0544',
            Address: 'Đường Tỉnh 919, Ấp Thới Thuận, Thị Trấn Cờ Đỏ, Huyện Cờ Đỏ ,TP Cần Thơ',
            Status: <>
                <img src={pin} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuong} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>


        },


        {
            key: ' 14',
            Stt: '14',
            seriesNumber: '0000035',
            LDGS: 'Phòng giao dịch',
            TDGS: '030 054 0544',
            Address: '1053 Nguyễn Ái Quốc, Khu Phố 5, Phường Tân Tiến, Thành phố Biên Hòa, Tỉnh Đồng Nai',
            Status: <>
                <img src={pinvang} alt="" />
                <img src={songxanh} alt="" />
                <img src={chuongdo} alt="" />


            </>,
            anh2: <>
                <img src={bacham11} alt="" />

            </>


        },


    ]
    const colums = [
        {
            title: <>
                <div className="TT1201">
                    STT
                </div>
            </>,
            dataIndex: 'Stt',

        },

        {
            title: <>
                <div className="TT1201">
                    GSM ID
                </div>
            </>,
            dataIndex: 'seriesNumber',
            width: 90
        },

        {
            title: <>
                <div className="TT1201">
                    Số điện thoại
                </div>
            </>,
            dataIndex: 'TDGS',
            width: 120
        },

        {
            title: <>
                <div className="TT1201">
                    Loại GSM
                </div>
            </>,
            dataIndex: 'LDGS',
            width: 140
        },



        {
            title: <>
                <div className="TT1201">
                    Địa chỉ
                </div>
            </>,
            dataIndex: 'Address',


        },

        {
            title: <>
                <div className="TT1201">
                    Trạng thái
                </div>
            </>,
            dataIndex: 'Status',
            width: 100,
        },

        {
            title: '',
            dataIndex: 'anh2',
            width: 100,
        },
    ]


    return (
        <div className="QLTBGSM11111">
            <Table dataSource={data} columns={colums} pagination={false}></Table>
        </div>
    )
}
