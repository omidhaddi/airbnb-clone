//we can add booking here 
const flat = props => {
    const flat = props.flat
    return (
        <h1>{flat.name}</h1>
    )
}

export default getServerSideProps(req,res){
    const id = req.query.id
    return {
        props:{id}
    }
}