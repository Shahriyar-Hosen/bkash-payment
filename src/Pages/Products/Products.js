import React from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from '../../Card/ProductCard/ProductCard';
import useProducts from '../../Hooks/useProducts';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Products = () => {
    const [products, productsIsLoading] = useProducts();
    if (productsIsLoading) {
        return (
            <Stack sx={{ color: '#FF4A17', justifyContent: 'center', marginTop:'350px',  }} direction="row">
                <CircularProgress size={80} color="inherit" />
            </Stack>
        )
    }
    return (
        <div>
            <Header />
            <div className="container">
                <h1 className='text-4xl font-bold text-center my-5'>Our <span className='text-color'>Products</span></h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <ProductCard key={product._id} product={product} ></ProductCard>)
                    }
                </Row>
            </div>
            <Footer/>
        </div>
    );
};

export default Products;