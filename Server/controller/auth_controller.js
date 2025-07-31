const supabase = require("../utilis/supabaseclient");

const SendMagicLink = async (req, res) => {
  try {
    const { email } = req.body;

    const { data, error } = await supabase.auth.signInWithOtp({ email });
    if (error) return res.status(400).json({ error: error.message });
    res.json({ message: "Magic link sent to your email!" });
    
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports=SendMagicLink