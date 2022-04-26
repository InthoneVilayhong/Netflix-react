const Section = (props) => {
    console.log(props.title);
    return (
        <div className="bloc-section">
            <h1>{props.title}</h1>
            <div className="movies-list">
                {props.image.map((picture, index) => {
                    return <img key={index} src={picture} alt="" />;
                })}
            </div>
        </div>
    );
};

export default Section;
