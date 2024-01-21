import { createContext } from "react";
import UseLocal from "../hook/UseLocal";
import toast from "react-hot-toast";

 
 export const WishlistContext = createContext()

 export const WishlistProvider=({children})=>{

  const [wishlist, setWishlist] = UseLocal("wishlist");

  const addWishlist = (product) => {
    const index = wishlist.findIndex((item) => item._id === product._id);
    if (index === -1) {
      setWishlist([...wishlist, { ...product}]);
      toast.success(" Added to wishlist!");
      return
    } else {
      deleteWishlist(product._id)
    }
  };

  const deleteWishlist=(id)=>{
    setWishlist(wishlist.filter(item=>item._id !==id))
    toast.success("Deleted from Wishlist");
  }


    return (
        <WishlistContext.Provider value={{wishlist,addWishlist,deleteWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
 }