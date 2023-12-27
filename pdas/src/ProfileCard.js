function ProfileCard({title, handle, image, content}) {
    //const {title, handle} = props;

    return (
        <section className = "card">
            <article className = "card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"/>
                </figure>
            </article>
            <article className="card-content">
                <article className="media-content">
                    <h2 className="title is-4">{title}</h2>
                    <p className="subtitle is-6">{handle}</p>
                </article>
                <article className="content">{content}</article>
            </article>            
        </section>
    );
}

export default ProfileCard;