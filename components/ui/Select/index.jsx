const Select = ({ ...props }) => (
    <select
        {...props}
        className={`${props.className || ""} w-full px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg duration-150`}
    />
)

export default Select