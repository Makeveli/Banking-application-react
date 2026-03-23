import {useState, useEffect} from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import {apiService} from '../services/api';



export default function ResetPassword(){

  const [formData,setFormData] = useState({
    code:'',
    newPassword:'',
    confirmPassword:''
  });

  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  useEffect(()=>{
    const codeFromUrl= searchParam.get('code');

    if(codeFromUrl){
      setFormData(prev=>({
        ...prev,
        code:codeFromUrl
      }));
    }
  },[searchParam])

  const handleChange =(e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if(formData.newPassword.length < 6){
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try{

      const resetData = {
        code:formData.code,
        newPassword:formData.newPassword
      }
      const response = await apiService.resetPassword(resetData);

      if(response.data.statusCode === 200){
        setSuccess('Password has been reset');
        
        setTimeout(()=>{
          navigate('/login')
        },5000);
      }else{
        setError(response.data.message);
      }
    }catch(error){
        setError(error.response?.data?.message || 'An error occured while resetting password');
    }finally{
      setLoading(false)
    }

  }

  return( <div className="auth-container">
      <div className="auth-form">
        <h2>Reset Password</h2>
        <p className="auth-subtitle">Enter your reset code and new password</p>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="code">Reset Code</label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="TN6DR"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm new Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your new password"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <div className="auth-links-container">
          <div className="auth-link">
            Need a new code? <Link to="/forgot-password">Request another</Link>
          </div>
          <div className="auth-link">
            Remember your password? <Link to="/login">Login Here</Link>
          </div>
        </div>
      </div>
    </div>
    );

}