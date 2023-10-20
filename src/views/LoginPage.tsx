import Styles from './LoginPage.module.scss'
import classNames from 'classnames'
import eatMe from '../assets/02.png'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
type Props = {}

const LoginPage = (props: Props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.eatMe}>
                <img src={eatMe} />
            </div>
            <div className={Styles.text}>
                <div>
                    Getting Started
                </div>
                <p>
                    Create an account to continue!
                </p>
            </div>
            <form>
                <div className={Styles.formLogin}>
                    <label>
                        Email
                    </label>
                    <input type="email" />
                    <label>
                        Username
                    </label>
                    <input type="text" />
                    <label>
                        Password
                    </label>
                    <input type="password" />
                    <div className={Styles.btn}>
                        <Link to='/user' className={Styles.subtn}>
                            Sign up
                        </Link>
                        <div>
                            Already have an account?<span> Sign In</span>
                        </div>
                        <button className={Styles.fbbtn}>
                            <FaFacebookSquare /> Continue With Facebook
                        </button>
                        <button className={Styles.ggbtn}>
                            <FcGoogle /> Continue With Google
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginPage