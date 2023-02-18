const Button = ({ value }) => {
    const getStyleName = btn => {
        const className = {
            '=': 'bg-[#4bd086]',
            'x': 'bg-[#f79505]',
            '-': 'bg-[#f79505]',
            '+': 'bg-[#f79505]',
            '/': 'bg-[#f79505]',
        }
        return className[btn]
    }

    return (
        <button className={`border bg-[#e9f0f4] h-14 p-3 rounded-lg  justify-center items-center cursor-pointer text-[#242424] text-2xl hover:border-black ${getStyleName(value)}`}>{value}</button>
    )
}

export default Button
