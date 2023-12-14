const Errors = ({msg}) => {
return(<>
    <h1 className="loading">Agghhh!!!</h1>
    <h2 className="loading">{msg?msg:`This page isn't reaaal! Go back and try agin...`}</h2>
</>)
}

export default Errors