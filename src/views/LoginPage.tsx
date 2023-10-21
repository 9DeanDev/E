import Styles from './LoginPage.module.scss'
import classNames from 'classnames'
import eatMe from '../assets/02.png'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
type Props = {}

const schema = yup
    .object()
    .shape({
        email: yup.string().email().required(),
        username: yup.string().required(),
        password: yup.string().required()
    })
    .required();
interface IFormInput {
    email: string;
    username: string;
    password: string;
}
const LoginPage = (props: Props) => {

    // let [status, setStatus] = useState('off')
    // const handleClickLogin = () => {

    // setStatus('on')
    // setTimeout(() => {
    //     if (errors.email) {
    //         setStatus('off')
    //         alert('Sign up success')
    //     }
    //     else {
    //         setStatus('off')
    //         alert('email is required')
    //     }
    // }, 3000);
    // }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IFormInput>({ resolver: yupResolver(schema) });
    console.log('errors:', errors)
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
            <form onSubmit={handleSubmit((data) => console.log(data))} action='/user'>
                <div className={Styles.formLogin}>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input id='email' type="email" {...register('email')} />
                    <span>{errors.email?.message}</span>
                    <label>
                        UserName
                    </label>
                    <input type="text" {...register('username')} />
                    {errors.username && <p>UserName is required</p>}
                    <label>
                        Password
                    </label>
                    <input type="password" {...register('password')} />
                    {errors.password && <p>Password is required</p>}
                    <button type='submit'
                    // onClick={() => handleClickLogin()}
                    >Sign up
                        {/* <span style={{ display: status === 'on' ? 'block' : 'none' }}> (Loading...)</span> */}
                        {/* <Link to='/user' className={Styles.subtn}>
                            Sign up
                        </Link> */}
                    </button>
                    <div className={Styles.btn}>
                        {/* <button type='submit' /> */}
                        <Link to='/user' className={Styles.subtn} type='submit'>
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