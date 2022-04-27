import "./App.css";
import datas from "./data.json";
import Section from "./Section";
import Logo from "./logo.png";

const App = () => {
    // console.log(data[0].category);
    // console.log(data[0].images);

    return (
        <div className="page">
            <img className="logo" src={Logo} alt="logo de Netflix" />
            {datas.map((data, index) => {
                return <Section key={index} data={data} />;
            })}
        </div>
    );
};

export default App;
