import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // ✅ Importação do toast

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        toast.success('Produtos carregados com sucesso!'); // ✅ Notificação de sucesso
      })
      .catch(() => {
        toast.error('Erro ao carregar os produtos.'); // ✅ Notificação de erro
      });
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
