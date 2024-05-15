

export default function LoginButton() {
    const router = useRouter()
    const [data, setData] = useState({});
    const handleClick = (e) => {
        e.preventDefault()
        
    }

    return (
        <button className='rounded-full bg-cyan-400 text-white py-2 px-5 w-fit' onClick={handleClick}>SUBMIT</button>
    )
}