import React, {useEffect, useState} from 'react';
import '../App.css';
import "../css/campusdetail.css"
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from 'react-router';
import gateNames from "../data/campusConfig";
import Hlogo from "../img/handshake.png";
import Ds from "../img/Ds.png";
import Sa from "../img/Sa.png";
import Sh from "../img/Sh.png";
import Ug from "../img/Ug.png";
import Ig from "../img/Ig.png";
import Jd from "../img/Jd.png";
import Jb from "../img/Jb.png";
import Js from "../img/Js.png";
import Tg from "../img/Tg.png";
import Hl from "../img/Hl.png";
import Hg from "../img/Hg.png";

export default function CampusDetail(){
    const [details, setDetails] = useState([]);
    const location = useLocation();
    const gateName = location.state;
    const name = gateNames.get(gateName);

    console.log("location : ", location);
    console.log("gateName : ", gateName);
    console.log("name : ", name);

    const getGateDetails = async () => {
        try {
            const response = await fetch(`/api/campus/gates/details/${name}`, {method: 'post'});
            const body = await response.json();
            console.log('campusDetail.js getGateDetails response : ', response);
            console.log('campusDetail.js getGateDetails body : ', body);
            setDetails(body);
            console.log('campusDetail.js getGateDetails body : ', details);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        AOS.init();
        getGateDetails();
    }, []);

    return (
        <>
        <div className='top'>
            <div className='cd-title'>
                {gateName}
            </div>
            <div className='cd-logo'>
                <img src={Hlogo} alt="handshake 로고" className='h-logo'/>
            </div>
        </div>
        
        <div className='cd-contents'>
            <div className='cd-left-contents'>
                {details.map(detail => {
                    return(
                        <>       
                        <div className='cd-desc' >
                            {detail.fb1 === undefined  ? <></> : <h2 className={'dc-fb1'}>{detail.fb1}</h2>}
                            {detail.f1 === undefined  ? <></> : <h2 className={'dc-f1'}>{detail.f1}</h2>}
                            {detail.f2 === undefined  ? <></> : <h2 className={'dc-f2'}>{detail.f2}</h2>}
                            {detail.f3 === undefined  ? <></> : <h2 className={'dc-f3'}>{detail.f3}</h2>}
                            {detail.f4 === undefined  ? <></> : <h2 className={'dc-f4'}>{detail.f4}</h2>}
                            {detail.f5 === undefined  ? <></> : <h2 className={'dc-f5'}>{detail.f5}</h2>}
                            {detail.f6 === undefined ? <></> : <h2 className={'dc-f6'}>{detail.f6}</h2>}
                            {detail.f7 === undefined ? <></> : <h2 className={'dc-f7'}>{detail.f7}</h2>}

                            {detail.name !== "다산관" ? <></> : <h2 className={'campus-img'}><img src={Ds} alt="다산관"/></h2>}
                            {detail.name !== "수암관" ? <></> : <h2 className={'campus-img'}><img src={Sa} alt="수암관"/></h2>}
                            {detail.name !== "생활관" ? <></> : <h2 className={'campus-img'}><img src={Sh} alt="생활관"/></h2>}
                            {detail.name !== "율곡관" ? <></> : <h2 className={'campus-img'}><img src={Ug} alt="율곡관"/></h2>}
                            {detail.name !== "임곡관" ? <></> : <h2 className={'campus-img'}><img src={Ig} alt="임곡관"/></h2>}
                            {detail.name !== "자동차관" ? <></> : <h2 className={'campus-img'}><img src={Jd} alt="자동차관"/></h2>}
                            {detail.name !== "전산관" ? <></> : <h2 className={'campus-img'}><img src={Js} alt="전산관"/></h2>}
                            {detail.name !== "정보통신관" ? <></> : <h2 className={'campus-img'}><img src={Jb} alt="정보통신관"/></h2>}
                            {detail.name !== "퇴계관" ? <></> : <h2 className={'campus-img'}><img src={Tg} alt="퇴계관"/></h2>}
                            {detail.name !== "한림관" ? <></> : <h2 className={'campus-img'}><img src={Hl} alt="한림관"/></h2>}
                            {detail.name !== "홍지관" ? <></> : <h2 className={'campus-img'}><img src={Hg} alt="홍지관"/></h2>}
                        </div>  
                        </>
                    )})
                }
                </div>
                <div className='cd-right-contents'>
                    <div className="cd-cam">
                </div>
                </div>  
            </div>
        </>
    );
}