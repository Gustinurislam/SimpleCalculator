const Wrapper = ({ children }) => {
    return (
        <div className='md:bg-[#f6f8f9] mt-[250px] md:mt-60 lg:mt-32 mx-auto max-w-lg p-6 md:rounded-2xl md:shadow-2xl'>
            {children}
        </div>
    )
}

export default Wrapper
