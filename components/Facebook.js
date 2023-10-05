
function Facebook(props) {
    const { title , username ,profilePic } = props
   
    return (
        <div style={{marginRight:400}}>
            <h4><img width={100} src={profilePic} style={{borderRadius:50}}/> {username}</h4>

            <h4 style={{marginRight:50}}>{title}</h4>

           
        </div>
    )
}


export default Facebook