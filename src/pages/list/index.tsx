import styles from "./page.module.css";
import { products } from "@/services/mock";

export default function ListPage() {
  return (
    <div>
      <h1>List Page</h1>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCell}>
            <img
              src={product.image}
              alt={product.description}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.title}</h3>
            <p className={styles.productPrice}>${product.price}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
