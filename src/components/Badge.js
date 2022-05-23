const Badge = ( {cantidad} ) => {
return (
    <div className="absolute top-0 right-0 px-3 py-1 -mt-3 -mr-3 bg-red-500 rounded-full">
        <span>{cantidad} </span>
    </div>
)
}

export default Badge