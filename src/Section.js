const Section = (props) => {
    const { category, images } = props.data;
    return (
        <div className="bloc-section">
            <h1>{category}</h1>
            <div className="movies-list">
                {images.map((picture, index) => {
                    return <img key={index} src={picture} alt="movie" />;
                })}
            </div>
        </div>
    );
};

export default Section;
