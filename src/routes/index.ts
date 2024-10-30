import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'


const router = Router()

router.get('/',PageController.home)
router.get('/terror',PageController.terror)
router.get('/acao',PageController.acao)
router.get('/animacao',PageController.animacao)

router.get('/search',SearchController.search)

export default router