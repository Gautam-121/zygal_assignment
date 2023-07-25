const login = async (req, res, next) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {

      return res.status(400).json({
        status :  false,
        message : "Please Enter Email and Password"
      })
    }

    return res.status(200).json({
        success : true,
        message : "Login Succefull",
    })

  } catch (err) {
    return res.status(500).json({
        success : false,
        message : err.message,
    })
  }
};

module.exports = { login };
