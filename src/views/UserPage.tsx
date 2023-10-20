import Styles from './UserPage.module.scss'
import avatar from '../assets/avataruser.jpg'
type Props = {}

const UserPage = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div>
                <div>

                </div>
                <img src={avatar} />
            </div>
            <div>
                <div>
                    Let's eat
                </div>
                <div>
                    Nutrious food
                </div>
            </div>
            <div>
                <input />
            </div>
            <div>
                <div>
                    Foods
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default UserPage;