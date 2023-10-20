import Styles from './HomePage.module.scss'
import eatMe from '../assets/02.png'
import img1 from '../assets/Illustration@2x.png'
import img2 from '../assets/Illustration.png'
import img3 from '../assets/Illustration3.png'
import bg1 from '../assets/Vector3.png'
import bg2 from '../assets/Vector.png'
import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
type Props = {}

const HomePage = (props: Props) => {
    let [indexCount, setindexCount] = useState(0)
    const handleClickNext = () => {
        if (indexCount < 2)
            setindexCount((x) => x + 1)
    }
    let data = [
        {
            id: 1, bg: bg1, img: img1, order: 'Choose a Favourite Food',
            text: 'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards'
        },
        {
            id: 2, bg: bg2, img: img2, order: 'Hot Delivery to Home',
            text: 'We make food ordering fasr, simple and free-no matter if you order online or cash'
        },
        {
            id: 3, bg: bg1, img: img3, order: 'Receive the Great Food',
            text: 'You’ll receive the great food within a hour. And get free delivery credits for every order.'
        }
    ]
    return (
        <>
            {data.map((item, index) => {
                if (indexCount === index) {
                    return (
                        <div className={Styles.container}>
                            <div className={Styles.top} style={{ background: item.bg }}>
                                <div className={Styles.eatMe}>
                                    <img src={eatMe} />
                                    <img src={item.img} />
                                </div>
                            </div>
                            <div className={Styles.middle}>
                                <div className={Styles.order}>
                                    {item.order}
                                </div>
                                <div className={Styles.text}>
                                    {item.text}
                                </div>
                                <div className={Styles.bar}>
                                    <div className={classNames(Styles.barChild, indexCount === 0 && Styles.active)}>

                                    </div>
                                    <div className={classNames(Styles.barChild, indexCount === 1 && Styles.active)}>

                                    </div>
                                    <div className={classNames(Styles.barChild, indexCount === 2 && Styles.active)}>

                                    </div>
                                </div>
                            </div>
                            <div className={Styles.bottom}>
                                <div className={Styles.skip}>
                                    Skip
                                </div>
                                <button className={Styles.nextBtn} onClick={() => handleClickNext()}>
                                    Next
                                </button>
                            </div>
                            <Link to='/login' className={Styles.bottomLast}>
                                <button className={classNames(Styles.lastBtn, indexCount === 2 && Styles.active)} onClick={() => handleClickNext()}>
                                    Let's Get Started
                                </button>
                            </Link>
                        </div>
                    )
                }

            })}
        </>
    )
}

export default HomePage;