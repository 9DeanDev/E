import Styles from './UserPage.module.scss'
import avatar from '../assets/avataruser.png'
import food1 from '../assets/the-ultimate-hamburger.jpg'
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiArrowToTop } from 'react-icons/bi';
import { TbHeartSearch, TbShoppingCartSearch } from 'react-icons/tb';
import { FcLike } from 'react-icons/fc';
import { BsFillBellFill } from 'react-icons/bs';
type Props = {}

const UserPage = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.avatarContainer}>
                <div className={Styles.btn}>
                    <FaBars />
                </div>
                <div className={Styles.avatar}>
                    <img src={avatar} />
                </div>
            </div>
            <div className={Styles.titleContainer}>
                <div className={Styles.title}>
                    Let's eat
                </div>
                <div className={Styles.subTitle}>
                    Nutrious food
                </div>
            </div>
            <div className={Styles.searchBar}>
                <BsSearch />
                <input className={Styles.search} placeholder='Find your food here...' />
            </div>
            <div className={Styles.navFood}>
                <div className={Styles.navFoodChild}>
                    Foods
                </div>
                <div className={Styles.navFoodChild}>
                    Fruits
                </div>
                <div className={Styles.navFoodChild}>
                    Juices
                </div>
                <div className={Styles.navFoodChild}>
                    Vegetables
                </div>
            </div>
            <div className={Styles.rpContainer}>
                <div className={Styles.title}>
                    Recommended Products
                </div>
                <div className={Styles.seeAll}>
                    See all
                </div>
            </div>
            <div className={Styles.foodContainer}>
                <div className={Styles.foodChildContainer}>
                    <div className={Styles.foodImg}>
                        <img src={food1} />
                    </div>
                    <div className={Styles.foodDetails}>
                        <div className={Styles.foodNote}>
                            Drinks/Beverages

                        </div>
                        <div className={Styles.foodPrice}>
                            $7.38
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.footer}>
                <div>
                    <BiArrowToTop />
                </div>
                <div>
                    <TbHeartSearch />
                </div>
                <div>
                    <TbShoppingCartSearch />
                </div>
                <div>
                    <FcLike />
                </div>
                <div>
                    <BsFillBellFill />
                </div>
            </div>
        </div>
    )
}

export default UserPage;