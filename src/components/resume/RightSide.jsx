import React from 'react'
import { ResumeTitles } from './ResumeTitles'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Skills } from './skills/Skills';

export const RightSide = () => {
    return (
        <div className="info__right">
            <div className="contacts">
                <ResumeTitles titleValue={'Контакты'}/>
                <div className="contacts__item">
                    <PhoneIphoneIcon />
                    <a href="tel: +7-999-715-00-53">+7-999-715-00-53</a>
                </div>
                <div className="contacts__item">
                    <AlternateEmailIcon />
                    <a href="mailto: cnyh923@gmail.com">cnyh923@gmail.com</a>
                </div>
                <div className="contacts__item">
                    <TelegramIcon />
                    <a href="tg://resolve?domain=@Yugay_S" target="_blank">@Yugay_S</a>
                </div>
                <div className="contacts__item">
                    <InstagramIcon />
                    <a href="https://www.instagram.com/yss_jr/" target="_blank">@Yss_jr</a>
                </div>
            </div>
            <div className="education">
                <ResumeTitles titleValue={'Образование'}/>
                <h3 className="education__title">Инженер путей сообщения</h3>      
                <h3 className="education__subtitle">ОмГУПС</h3>      
                <h3 className="education__date">[ 2009 - 2015 ]</h3>      
            </div>
            <div className="skills">
                <ResumeTitles titleValue={'Навыки'}/>
                <Skills />
            </div>
        </div>
    )
}
