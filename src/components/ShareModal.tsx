import { type Product } from "../types";
import "../styles/shareModal.css";

interface ShareModalProps {
  product: Product | null;
  onClose: () => void;
}

const ShareModal = ({ product, onClose }: ShareModalProps) => {
  if (!product) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(product.url);
      alert("Product URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Share your product!</h2>

        <div className="modal-product">
          <img src={product.image_url} alt={product.name} />
          <div className="modal-product-info">
            <span className="name">{product.name}</span>
            <span className="description">{product.description}</span>
          </div>
        </div>

        <div className="modal-actions">
          <button
            className="btn facebook"
            onClick={() =>
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${product.url}`, "_blank")
            }
          >
            Facebook
          </button>

          <button
            className="btn x"
            onClick={() =>
              window.open(
                `https://x.com/intent/post?url=${product.url}&text=${product.name}`,
                "_blank"
              )
            }
          >
            Share on X
          </button>

          <button className="btn copy" onClick={handleCopy}>
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
