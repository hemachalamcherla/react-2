function Ex2(){
    const now=new Date();
    const currentDate=now.toDateString();
    const currentTime=now.toLocaleTimeString();
    return(
        <>
        <h1>Current Date:{currentDate}</h1>
        <h1>Current Time:{currentTime}</h1>
        <h2>Current Date & Time:{currentDate}{currentTime}</h2>
        </>
    )
}
export default Ex2;