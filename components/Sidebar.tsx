const Sidebar = () => {
    return (<>

        <h1 className="bg-red-700 h-20 w-20 clip-your-needful-style">
            <clipPath id="myClip" clipPathUnits="objectBoundingBox">
                {/* <path d="M0,0 1,0 1,0.9 C 1,0.9, 0.77,1, 0.5,1 0.23,1, 0,0.9,0,0.9z" /> */}

                <path d='M0,0.8v9c0,0.4,0.3,1,0.8,1.3l6.5,4.4c0.4,0.3,1.1,0.3,1.5,0l6.5-4.4c0.4-0.3,0.8-0.9,0.8-1.3v-9C16,0.3,15.5,0,14.9,0H1.1 C0.5,0,0,0.3,0,0.8L0,0.8z' />
            </clipPath>
        </h1>
    </>);
}

export default Sidebar;