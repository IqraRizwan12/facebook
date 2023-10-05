
function Facebook(props) {
    const { title , username ,profilePic,date } = props
   
    return (
        <div style={{marginRight:400}}>
            <h4><img width={100} src={profilePic}/>{username}<br/>{date}</h4>

            <h4>{title}</h4>

           
        </div>
    )
}


export default Facebook