import { createContext, useContext, useEffect, useState } from "react"
import Panier from "../pages/ozon_market/components/Panier"

const PanierContext = createContext({})

export function usePanier() {
  return useContext(PanierContext)
}

export function PanierProvider({ children }) {

  const [showPanier, setShowPanier] = useState(false);
  const [panierArticles, setPanierArticles] = useState([])

  useEffect(() => {
    if (showPanier) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }, [showPanier]);

  const cartQuantity = panierArticles.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // useEffect(() => {
  //   console.log(panierArticles)
  // }, [panierArticles])

  // const openCart = () => setIsOpen(true)
  // const closeCart = () => setIsOpen(false)

  function getItemQuantity(id) {
    return panierArticles.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {
    setPanierArticles(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id) {
    setPanierArticles(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id) {
    setPanierArticles(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <PanierContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        // openCart,
        // closeCart,
        setShowPanier,
        panierArticles,
        cartQuantity,
      }}
    >
      {children}
      <Panier showPanier={showPanier} setShowPanier={setShowPanier} />
    </PanierContext.Provider>
  )
}