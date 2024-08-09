import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiLogin } from '../services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = { email, password };
      const response = await apiLogin(payload);
      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful', response.data);
      // Redirect to another page or update the state to indicate the user is logged in
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-[60%] justify-center items-center">
        <form
          method="post"
          className="border rounded-lg shadow-lg py-[2.5rem] px-[2rem] flex flex-col gap-[1.5rem]"
          onSubmit={handleSubmit}
        >
          <div className="">
            <p className="font-bold text-center text-[15pt]">Hello!</p>
            <p className="text-center text-[10pt]">Sign in to your account</p>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex flex-col gap-3">
            <fieldset>
              <legend className="text-[9pt] text-blue-500">Email:</legend>
              <input
                type="email"
                name="email"
                id="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                required
              />
            </fieldset>
            <fieldset>
              <legend className="text-[9pt] text-blue-500">Password:</legend>
              <input
                type="password"
                name="password"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-blue-500 rounded outline-none w-full px-[0.5rem] py-1"
                required
              />
              <p className="flex gap-2 mt-[0.15rem] mb-1 text-[10pt]">
                <label htmlFor="check-box" className="flex gap-[0.15rem] ">
                  <input type="checkbox" name="remember" id="check-box" />
                  Remember me
                </label>
                <a href="#" className="text-blue-500">Forgot password?</a>
              </p>
            </fieldset>
            <button
              type="submit"
              className="border border-blue-500 rounded py-2 font-semibold bg-blue-500 text-white"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'SIGN IN'}
            </button>
          </div>
          <p className="text-center text-[10pt]">
            Don't have an account?{' '}
            <Link to={'/register'} className="text-blue-500 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="flex flex-[40%] justify-center items-center bg-blue-500">
        <div className="w-[70%]">
          <p className="text-center text-[20pt] text-white font-semibold mb-6">Welcome Back!</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime similique voluptatem accusamus quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
