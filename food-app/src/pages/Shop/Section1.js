import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PizzaImg from '../../assets/menu/image.png';
import BurgerImg from '../../assets/menu/burger-11.jpg';
import SandwichImg from '../../assets/menu/burger-12.jpg';

// useState to store add to card pizza




// Sample Data for Products
const products = [
    { id: 1, category: "Pizza", name: "Margherita Pizza", description: "Classic tomato sauce, fresh mozzarella, and basil.", image: PizzaImg },
    { id: 2, category: "Pizza", name: "Pepperoni Pizza", description: "Topped with spicy pepperoni and extra cheese.", image: PizzaImg },
    { id: 3, category: "Burger", name: "Classic Cheeseburger", description: "Juicy beef patty, melted cheese, lettuce, and tomato.", image: BurgerImg },
    { id: 4, category: "Burger", name: "BBQ Bacon Burger", description: "Loaded with crispy bacon, BBQ sauce, and cheddar cheese.", image: BurgerImg },
    { id: 5, category: "Sandwich", name: "Grilled Chicken Sandwich", description: "Tender grilled chicken with fresh veggies and sauces.", image: SandwichImg },
    { id: 6, category: "Sandwich", name: "Club Sandwich", description: "Triple-layered goodness with turkey, ham, and cheese.", image: SandwichImg },
];

const Section1 = () => {
    // Used usestate to store cart item
    const [cart, setCart] = useState([]);

    const handlerCardToCart = (item) => {
        console.log("Cart Before : ", cart);
        setCart([...cart, item])
        cart.push(item);
        console.log("Cart After : ", cart);
    };
// Send the item in cart to my shop icon


    return (
        <Container className="shop-page py-5">
            <h2 className="text-center mb-4">🍽️ Our Menu</h2>
            {/* Pizza Section */}
            <h3 className="mt-4">🍕 Pizzas</h3>
            <Row className="gy-4">
                {products.filter(item => item.category === "Pizza").map(item => (
                    <Col lg={4} md={6} sm={12} key={item.id}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={item.image} alt={item.name} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant="primary" onClick={() => handlerCardToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Burger Section */}
            <h3 className="mt-4">🍔 Burgers</h3>
            <Row className="gy-4">
                {products.filter(item => item.category === "Burger").map(item => (
                    <Col lg={4} md={6} sm={12} key={item.id}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={item.image} alt={item.name} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant="primary" onClick={() => handlerCardToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Sandwich Section */}
            <h3 className="mt-4">🥪 Sandwiches</h3>
            <Row className="gy-4">
                {products.filter(item => item.category === "Sandwich").map(item => (
                    <Col lg={4} md={6} sm={12} key={item.id}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={item.image} alt={item.name} className="img-fluid" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant="primary" onClick={() => handlerCardToCart(item)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Section1;
