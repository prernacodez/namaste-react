// {} is where you will give attributes to your tags 

const heading = React.createElement("h1",{id:heading},"Hello world from react");


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);