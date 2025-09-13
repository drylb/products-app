import { useEffect, useState } from "react";
import { type Product } from "../types";
import { fetchProducts } from "../services/api";
import ProductsTable from "./ProductsTable";
import ShareModal from "../components/ShareModal";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".menu-dropdown")) {
        return;
      }

      setOpenId(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleShare = (product: Product) => {
    setSelectedProduct(product);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <ProductsTable
        products={products}
        onDelete={handleDelete}
        onShare={handleShare}
        openId={openId}
        setOpenId={setOpenId}
      />
      <ShareModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
