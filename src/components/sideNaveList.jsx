const SideNaveList = (Props) => {
    return <div className="flex text-white gap-4 pl-16 pt-10 text-4xl font-semibold">
        <i className={`fa-solid ${Props.icon}`}></i>
        <h1>{Props.title}</h1>
    </div>
}
export default SideNaveList