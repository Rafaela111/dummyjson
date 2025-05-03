import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // ✅ Importa o toast

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        toast.success('Detalhes do produto carregados!');
      })
      .catch(() => {
        toast.error('Erro ao carregar os detalhes do produto.');
      });
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Preço:</strong> ${product.price}</p>
      <img src={product.thumbnail} alt={product.title} width="200" />
    </div>
  );
}

export default ProductDetail;
