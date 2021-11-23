import React from 'react'
import { ResumeTitles } from './ResumeTitles'
import { HorizontalDel } from './Del/HorizontalDel'
import { MyJob } from './jobs/MyJob'

export const LeftSide = () => {
    return (
        <div className="info__left">
            <div className="profile">
                <ResumeTitles titleValue={'профиль'}/>
                <p className="profile__content">
                    В начале 2021 года решил полностью освоить профессию front-end разработчика, 
                    устроиться на полноценную работу. Считаю, что моих начальных навыков достаточно для 
                    работы на более крупных проектах. Не против начать со стажировки, с последующим 
                    трудоустройством.
                </p>
            </div>
            <HorizontalDel />
            <div>
                <ResumeTitles titleValue={'Опыт работы'}/>
                <MyJob 
                    title={'Ведущий технолог'} 
                    subtitle={'ЛокоТех | Москва'} 
                    date={'Апрель 19 - Октябрь 21'}
                >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam blanditiis aliquid esse voluptate? Vitae, facilis nulla. Cum tenetur accusamus provident quidem. Accusantium ad maxime soluta nulla impedit ducimus, rem atque!</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores atque laboriosam nobis dolore illum? Illum reiciendis rem porro. Alias!</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo repudiandae atque voluptatem incidunt? Consequuntur quia eum distinctio consequatur earum sapiente!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium nesciunt officiis non quisquam at error molestias consequuntur, porro velit!</li>
                    </ul>
                </MyJob>
                <MyJob
                    title={'Инженер 1 категории'}
                    subtitle={'ОАО "РЖД" | Москва'}
                    date={'Июль 18 - Апрель 19'}
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit est beatae id doloribus possimus voluptatem similique consequatur vitae rerum! Quo illum amet, voluptatum dolorum quam asperiores esse totam, aperiam debitis id maiores, beatae eaque pariatur aspernatur ducimus dolore saepe earum at hic! Voluptatibus repellendus tenetur, fugit officia, quidem autem sint aspernatur molestias, fugiat consequuntur quod nam in excepturi placeat et cumque error ullam pariatur libero nobis ratione! Rerum, rem delectus atque ratione nemo quis optio illo perspiciatis quas magni similique?</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, eius!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                    </ul>
                </MyJob>
            </div>
        </div>
    )
}
