import "./App.css";
import data from "./data.json";
import Section from "./Section";
import Logo from "./logo.png";

const App = () => {
    // console.log(data[0].category);
    // console.log(data[0].images);

    return (
        <div className="page">
            <img className="logo" src={Logo} alt="logo de Netflix" />
            {data.map((data, index) => {
                return (
                    <Section
                        key={index}
                        image={data.images}
                        title={data.category}
                    />
                );
            })}
        </div>
    );
};

export default App;
