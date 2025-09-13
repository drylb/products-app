import { type Product } from "../types";
import ProductRow from "./ProductRow";
import "../styles/productTable.css";

interface ProductsTableProps {
  products: Product[];
  openId: string | null;
  setOpenId: (id: string | null) => void;
  onDelete: (id: string) => void;
  onShare: (product: Product) => void;
}

const ProductsTable = ({ products, onDelete, onShare, openId, setOpenId }: ProductsTableProps) => {
  return (
    <table className="products-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductRow
            key={p._id}
            product={p}
            onDelete={onDelete}
            onShare={onShare}
            openId={openId}
            setOpenId={setOpenId}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
