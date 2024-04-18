import express from "express";
const router = express.Router();
import handleSearch from '../search/handleSearch';

router.post('/customize', handleSearch.handleSearchCustomize);

module.exports = router;