import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Products } from "../types/Product";

export async function fetchProducts(): Promise<Products[]> {
  const querySnapshot = await getDocs(collection(db, "products"));
  
  const products: Products[] = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Products, "id">)
  }));
  
  return products;
}
