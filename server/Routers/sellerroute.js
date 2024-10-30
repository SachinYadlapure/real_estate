const express = require('express');
const router = express.Router();
const Seller = require('../Models/seller');

// POST a new seller
router.post('/', async (req, res) => {
  try {
    const seller = new Seller(req.body);
    await seller.save();
    res.status(200).json(seller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET a specific seller by ID
router.get('/:id', async (req, res) => {
  try {
    const seller = await Seller.findById(req.params.id);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.json(seller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get seller by sellerid
router.post('/seller/:sellerid', async (req, res) => {
    try {
        console.log(req.body.sellerid);
        const sellerId = String(req.body.sellerid); // Cast to string using concatenation
        
        console.log(sellerId);
        const seller = await Seller.find({ sellerid: sellerId });
        console.log(seller);
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        } 
        

        res.json(seller);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a seller by ID
router.put('/:id', async (req, res) => {
  try {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.json(seller);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get land by producttype
router.get('/seller/:producttype', async (req, res) => {
  try {
      console.log(req.params.producttype);
      const producttype = String(req.params.producttype);

      const sellers = await Seller.find({ producttype: producttype });
      if (!sellers || sellers.length === 0) {
          return res.status(404).json({ message: 'Seller not found' });
      }
      res.json(sellers);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


// Delete a seller by ID
router.delete('/:id', async (req, res) => {
  try {
    const seller = await Seller.findByIdAndDelete(req.params.id);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.json({ message: 'Seller deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;