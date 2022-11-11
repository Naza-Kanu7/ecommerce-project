// import logo from './logo.svg';
import { Provider } from 'react-redux';
// import store from './Redux/store';
import store from './Redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import About from './components/About/About.component';
import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import ProductsContainer from './components/ProductsContainer/ProductsContainer.component';
import ProductDetails from './components/Product/ProductDetails.component';
import CartPageContainer from './components/CartPage/CartPage.component';
import CategoryItemsContainer from './components/CategoryType/CategoryType.component';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/productscontainer' element={<ProductsContainer />} />
            <Route path='/categories/:categoryName' element={<CategoryItemsContainer />} />
            <Route path='/productdetails/:detailsId' element={<ProductDetails />} />
            <Route path='/cartpage' element={<CartPageContainer />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
