const pool = require('../db/connect');



// Get All
const getAllUsers = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM users');

        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
};

//GET One User
const getOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

        if (result.length > 0) {
            res.json(result[0]); // Respond with the first user found
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching user');
    }
};




//Post Users  
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const result = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);

        // Respond with the ID of the newly inserted user
        res.json({ id: result.insertId, name, email });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
};

// delete users
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);

        if (result.affectedRows > 0) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting user');
    }
};





//export controller functions
module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    deleteUser

};
