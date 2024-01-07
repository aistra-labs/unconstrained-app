import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { setUserdata, setToken } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';

function useLogin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);


  useEffect(() => {
    const profileData = {
      name: searchParams.get("name"),
      email: searchParams.get("email"),
      image: searchParams.get("image"),
    }
    const token = searchParams.get("token");
    if (token) {
      dispatch(setUserdata(profileData));
      dispatch(setToken(token));
      setSearchParams('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return token;
}

export default useLogin;