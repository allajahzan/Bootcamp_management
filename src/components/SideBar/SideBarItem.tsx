interface propTypes {
    image: string
    text: string,
    handleSideBarItems?: (event: React.MouseEvent<HTMLParagraphElement>) => void,
    color?: string
}

function SideBarItem({ image, text, handleSideBarItems, color }: propTypes) {
    return (
        <li>
            <div onClick={handleSideBarItems} className={`flex items-center ${color} hover:bg-gray-100 p-2 rounded-lg cursor-pointer`}>
                <img className='w-8' src={image} alt="" />
                <p style={{fontSize:'15.5px'}} className='ml-5 font-bold tracking-wide'>{text}</p>
            </div>
        </li>
    )
}

export default SideBarItem
