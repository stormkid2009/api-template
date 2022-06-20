import {Router} from 'express';
import productController from '../controllers/productController';


const router:Router = Router();

router.get("/",productController.getAllProducts);

router.get("/:productId",productController.getOneProduct);

router.post("/",productController.createNewProduct);

router.patch("/:productId",productController.updateOneProduct);

router.delete("/:productId",productController.deleteOneProduct);


export default router;