import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
   <>
   <Header></Header>
 
   <main className="py-3">
    <Container>
      <Routes>
      <Route path='/'  element={<HomeScreen> </HomeScreen>} />
      <Route path='/product/:id'  element={<ProductScreen></ProductScreen>} />
      </Routes>
    </Container>
   </main>
 
   <Footer></Footer>
   </>
  
  );
}

export default App;
