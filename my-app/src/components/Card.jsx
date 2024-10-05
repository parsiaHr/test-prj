
 function Card({title , des , src , link}) {
  return (
    <>
        <div className="card">
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{des}</p>
                <a href={link} className="btn btn-primary">Read more</a>
            </div>
        </div>
    </>
  )
}

export default Card;
