
const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: { user: 'Get all Users' },
  });
};


const getUserById = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: { user: 'Get User By ID' },
  });
};


const createUser = (req, res) => {
  res.status(201).json({
    status: 'Success',
    data: { user: 'User Created' },
  });
};


const updateUserById = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: { user: 'User Updated ...' },
  });
};


const deleteUserById = (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: null,
  });
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
