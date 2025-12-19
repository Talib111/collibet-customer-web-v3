//
import propTypes from 'prop-types';
// import useAuth from '../hooks/useAuth';

// ----------------------------------------------------------------------

RoleBasedGuard.PropTypes = {
  hasContent: propTypes.bool,
  roles: propTypes,
  children: propTypes.node
};

export default function RoleBasedGuard({ hasContent, roles, children }) {
  // Logic here to get current user role
  // const { user } = useAuth();

  const currentRole = 'user';
  // const currentRole = user?.role as string; // admin;

  if (typeof roles !== 'undefined' && !roles.includes(currentRole)) {
    return hasContent ? (
      <div className="flex items-center justify-center min-h-full">
        <div className="flex flex-col items-center">
          <div className="text-400 text-gray-400">403</div>
          <div className="text-700 text-gray-700">You are not authorized!</div>
        </div>
      </div>
    ) : null;
  }

  return <>{children}</>;
}
