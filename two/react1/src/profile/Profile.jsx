import React from 'react';
import Prelouder from '../Prelouder.jsx/1';
import MyPostcontener from './my post/mypostcontener';
import s from './profile.module.css';
let Profily = (props)=>{
    if(!props.profile){return <Prelouder/>}
    return ( 
        <div className={s.content}>
                   <div className={s.img1}>  
                       <img src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100"/>
                    </div>
                    <div className={s.ava_descript}>
                        ava+descript
                        <div className={s.img2}>  
                    <img src={props.profile.photos.large}/>
                    </div>
                    </div>
                    <MyPostcontener/>
                </div>
    )
}

export default Profily;
// "https://dinozoopasaule.lv/ru/getimage/uploads/news/ikkXHS-2AesJFyftXGg2mEg82YscHLdd.png?w=600&h=400&fit=crop"