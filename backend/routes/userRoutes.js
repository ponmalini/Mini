const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const User = require('../models/user'); 
const WeddingDecorService = require('../models/weddingdecor'); 
const NamingCeremonyService = require('../models/NamingCeremony'); 
const BirthdayPartiesService = require('../models/BirthdayParties'); 
const ProductLaunchService = require('../models/ProductLaunch'); 





// Signup Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create and save user (schema middleware will hash the password)
        const newUser = new User({ username, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        if (error.code === 11000) { 
            return res.status(400).json({ message: 'Email already in use' });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//weddingdecor
router.post('/weddingdecor', async (req, res) => {
    const { title, url } = req.body;
    try {
    
        // Create and save user (schema middleware will hash the password)
        const newwed = new WeddingDecorService({ title, url });
        await newwed.save();

        res.status(201).json({ message: 'Saved successfully',newwed });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
    
router.get('/getweddingdecor', async (req, res) => {
    try {
        const services = await WeddingDecorService.find();
        res.status(200).json({ message: 'Services retrieved', services });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.delete('/deleteweddingdecor/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedService = await WeddingDecorService.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.put('/updateweddingdecor/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL
    const { title, url } = req.body; // Extract the updated fields from the request body
  
    try {
      
      const updatedDecor = await WeddingDecorService.findByIdAndUpdate(
        id,
        { title, url },
        { new: true } // Return the updated document
      );
  
      if (!updatedDecor) {
        return res.status(404).json({ message: 'Wedding decor not found' });
      }
  
      res.status(200).json({
        message: 'Wedding decor updated successfully',
        updatedDecor,
      });
    } catch (error) {
      console.error('Error updating wedding decor:', error);
      res.status(500).json({ message: 'Server error while updating wedding decor' });
    }
  });

   //namingceremony

  router.post('/namingceremony', async (req, res) => {
    const { title, url } = req.body;
    try {
    
        // Create and save user (schema middleware will hash the password)
        const newname = new NamingCeremonyService({ title, url });
        await newname.save();

        res.status(201).json({ message: 'Saved successfully',newname });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
    
router.get('/getnamingceremony', async (req, res) => {
    try {
        const services = await NamingCeremonyService.find();
        res.status(200).json({ message: 'Services retrieved', services });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.delete('/deletenamingceremony/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedService = await NamingCeremonyService.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.put('/updatenamingceremony/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL
    const { title, url } = req.body; // Extract the updated fields from the request body
  
    try {
      // Find and update the decor item by ID
      const updatedname = await NamingCeremonyService.findByIdAndUpdate(
        id,
        { title, url },
        { new: true } // Return the updated document
      );
  
      if (!updatedname) {
        return res.status(404).json({ message: 'Namingceremony  not found' });
      }
  
      res.status(200).json({
        message: 'Naming ceremony updated successfully',
        updatedname,
      });
    } catch (error) {
      console.error('Error updating naming ceremony:', error);
      res.status(500).json({ message: 'Server error while updating naming ceremony' });
    }
  });

  //birthdayparties
  router.post('/birthdayparties', async (req, res) => {
    const { title, url } = req.body;
    try {
    
        // Create and save user (schema middleware will hash the password)
        const newday = new BirthdayPartiesService({ title, url });
        await newday.save();

        res.status(201).json({ message: 'Saved successfully',newday });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
    // Fetch all services
router.get('/getbirthdayparties', async (req, res) => {
    try {
        const services = await BirthdayPartiesService.find();
        res.status(200).json({ message: 'Services retrieved', services });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.delete('/deletebirthdayparties/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedService = await BirthdayPartiesService.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.put('/updatebirthdayparties/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL
    const { title, url } = req.body; // Extract the updated fields from the request body
  
    try {
      // Find and update the decor item by ID
      const updatedBirthday = await BirthdayPartiesService.findByIdAndUpdate(
        id,
        { title, url },
        { new: true } // Return the updated document
      );
  
      if (!updatedBirthday) {
        return res.status(404).json({ message: 'Birthday Parties not found' });
      }
  
      res.status(200).json({
        message: 'Birthday Parties updated successfully',
        updatedBirthday,
      });
    } catch (error) {
      console.error('Error updating naming ceremony:', error);
      res.status(500).json({ message: 'Server error while updating naming ceremony' });
    }
  });

  //ProductLaunch

  router.post('/productlaunch', async (req, res) => {
    const { title, url } = req.body;
    try {
    
        // Create and save user (schema middleware will hash the password)
        const newproduct = new ProductLaunchService({ title, url });
        await newproduct.save();

        res.status(201).json({ message: 'Saved successfully' ,newproduct});
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
    
router.get('/getproductlaunch', async (req, res) => {
    try {
        const services = await ProductLaunchService.find();
        res.status(200).json({ message: 'Services retrieved', services });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.delete('/deleteproductlaunch/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedService = await ProductLaunchService.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


router.put('/updateproductlaunch/:id', async (req, res) => {
    const { id } = req.params; // Extract the ID from the URL
    const { title, url } = req.body; // Extract the updated fields from the request body
  
    try {
      
      const updatedDecor = await ProductLaunchService.findByIdAndUpdate(
        id,
        { title, url },
        { new: true } // Return the updated document
      );
  
      if (!updatedDecor) {
        return res.status(404).json({ message: 'Product Launch not found' });
      }
  
      res.status(200).json({
        message: 'Product Launch updated successfully',
        updatedDecor,
      });
    } catch (error) {
      console.error('Error updating product launch:', error);
      res.status(500).json({ message: 'Server error while updating product launch' });
    }
  });

  
module.exports = router;
