import React from "react";
import banner from '../../img/banner.png'
import "./banner.css"



const Banner = () =>{
    return(
        <div className="Banner container">
            <div className="block">
                <h2>PORTEN</h2>
                <br />
                <h3>САНКТ-ПЕТЕРБУРГ</h3>
                
            </div>
            <br />
            <br />
            <p className="bannerText">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. PURUS INTERDUM PURUS, EST TORTOR PULVINAR UT IN. FRINGILLA A DIAM ENIM SED JUSTO, SED IACULIS SAGITTIS. TORTOR ID EU INTERDUM NEC UT IACULIS. PENATIBUS ULLAMCORPER ULTRICIES MORBI IPSUM SEM METUS PHARETRA, MI. TORTOR NIBH MAGNA FEUGIAT ID NUNC, DUI NISL VIVERRA.</p>
        </div>
    )

}
export default Banner;