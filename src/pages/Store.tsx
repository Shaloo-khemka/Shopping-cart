import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export function Store() {
    return (
    <>
    <h1>Store</h1>
    <Row md={2} sm={1} lg={3} style={{gap:".5rem"}}>
        {storeItems.map((item) => (
            <Col key={item.id}>
                <StoreItem {...item} />
                </Col>
        ))}
    </Row>
    </>
    )
}