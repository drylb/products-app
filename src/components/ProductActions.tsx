import { type Product } from "../types";
import "../styles/productActions.css";

interface ProductActionsProps {
  product: Product;
  openId: string | null;
  setOpenId: (id: string | null) => void;
  onDelete: (id: string) => void;
  onShare: (product: Product) => void;
}

const ProductActions = ({ product, onDelete, onShare, openId, setOpenId }: ProductActionsProps) => {
  const isOpen = openId === product._id;

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenId(isOpen ? null : product._id);
        }}
      >
        ⋮
      </button>

      {isOpen && (
        <div className="menu-dropdown" onClick={(e) => e.stopPropagation()}>
          <button
            className="menu-item"
            onClick={() => {
              onDelete(product._id);
              setOpenId(null);
            }}
          >
            Delete
          </button>
          <button
            className="menu-item"
            onClick={() => {
              onShare(product);
              setOpenId(null);
            }}
          >
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductActions;
