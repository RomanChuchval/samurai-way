import React from "react";
import avatar from '../../../assets/2022-12-18 16.jpg'
import main_background from '../../../assets/back.jpeg'
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
            <div className={s.profile_section}>
                <div className={s.profile_background}>
                    <img className={s.profile_image}
                         src={main_background} alt="##"/>
                </div>
                <div className={s.profile_avatar}>
                    <img className={s.avatar} src={avatar} alt='qq'/>
                </div>
                <div className={s.profile_description}>
                    <div className={s.profile_info_name}>
                        Roman Chuchval
                    </div>
                    <div className={s.profile_info}>
                        Date of Birth: 9 February
                    </div>
                    <div className={s.profile_info}>
                        Age: 28
                    </div>
                    <div className={s.profile_info}>
                        City: Minsk, Belarus
                    </div>
                    <div className={s.profile_info}>
                        Education: IT-Incubator'23
                    </div>

                </div>
            </div>
    )
}
export default ProfileInfo