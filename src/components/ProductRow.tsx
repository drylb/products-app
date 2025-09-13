import { type Product } from "../types";
import ProductActions from "./ProductActions";

interface ProductRowProps {
  product: Product;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  onDelete: (id: string) => void;
  onShare: (product: Product) => void;
}

const ProductRow = ({ product, onDelete, onShare, openId, setOpenId }: ProductRowProps) => {
  return (
    <tr>
      <td>
        <div className="product-cell">
          <img src={product.image_url} alt={product.name} />
          <div className="product-info">
            <span className="name">{product.name}</span>
            <span className="description">{product.description}</span>
          </div>
        </div>
      </td>

      <td style={{ fontWeight: 600 }}>{product.category}</td>

      <td style={{ fontWeight: 600 }}>
        ${product.price.toFixed(2)} {product.currency}
      </td>

      <td style={{ textAlign: "right" }}>
        <ProductActions
          product={product}
          onDelete={onDelete}
          onShare={onShare}
          openId={openId}
          setOpenId={setOpenId}
        />
      </td>
    </tr>
  );
};

export default ProductRow;
