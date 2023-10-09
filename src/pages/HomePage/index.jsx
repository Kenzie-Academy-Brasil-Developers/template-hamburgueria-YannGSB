import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { kenzieBurgerApi } from "../../services/api";
import { toast } from "react-toastify";

export const HomePage = () => {
  const localStorageCart = localStorage.getItem("@CARTLIST");

  const [productList, setProductList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cartList, setCartList] = useState(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await kenzieBurgerApi.get("/products");
        setProductList(data);
      } catch (error) {
        toast.error(error);
      }
    };

    getProducts();
  }, []);

  const addItemToCartList = (itemToAdd) => {
    const hasItem = cartList.some((item) => item.id === itemToAdd.id);

    if (!hasItem) {
      setCartList([...cartList, itemToAdd]);
      toast.success("Produto adicionado ao carrinho.");
    } else {
      toast.error("Produto já adicionado ao carrinho.");
    }
  };

  const removeItemFromCart = (itemId) => {
    const newCartList = cartList.filter((item) => item.id !== itemId);
    setCartList(newCartList);
    toast.success("Item removido com sucesso.");
  };

  //exclusão geral do carrinho
  // renderizações condições e o estado para exibir ou não o carrinho

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <main>
        <ProductList
          productList={productList}
          addItemToCartList={addItemToCartList}
        />
        {isOpen && (
          <CartModal
            setIsOpen={setIsOpen}
            cartList={cartList}
            removeItemFromCart={removeItemFromCart}
          />
        )}
      </main>
    </>
  );
};
