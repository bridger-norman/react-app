// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

// function App() {

//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />

//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>Alert message</Alert>
//       )}
//       <Button color="danger" onClick={() => setAlertVisibility(true)}>
//         Click Me
//       </Button>
//     </div>
//   );
// }

// export default App;

import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars = {10}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eveniet
        illo, sunt libero qui voluptas magnam cumque itaque recusandae cum
        blanditiis consequatur amet eligendi est quidem minus voluptate aut in
        sint. Illum, facilis. Harum commodi quod delectus nostrum saepe eaque,
        cum obcaecati unde doloremque vero. Veritatis vero perspiciatis est
        architecto officia reprehenderit eum, vitae ex expedita adipisci,
        voluptatibus rerum sit alias quidem facere repudiandae voluptas nulla
        libero quo nesciunt sapiente consectetur! Temporibus aut dolores
        reiciendis repellat molestiae nemo ipsam odit ipsa! Eveniet tempore vero
        voluptas vitae inventore porro unde dolore totam, vel neque doloremque
        tempora accusantium exercitationem placeat! Minima, temporibus.
      </ExpandableText>
    </div>
  );
}
export default App;
