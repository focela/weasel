import { useEffect } from 'react';
import { getUsers } from '~/store/slices/user';
import { RootState, useDispatch, useSelector } from '~/store';
import MainCard from '~/components/cards/MainCard';
import { UserProfile } from '~/types/user';

export default function User() {
  const dispatch = useDispatch();

  const { users } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUsers({}));
  }, [dispatch]);

  return (
    <MainCard content={false}>{users.length > 0 && users.map((user: UserProfile, index) => <p key={index}>{user.first_name}</p>)}</MainCard>
  );
}
