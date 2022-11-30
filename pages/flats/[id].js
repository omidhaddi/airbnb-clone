//we can add booking here 
const flat = props => {
    const flat = props.flat
    return (
        <h1>{flat.name}</h1>
    )
}

export async function getServerSideProps(req, res) {
    console.log(res);
    const id = req.query.id
    return {
        props: { id }
    }
}