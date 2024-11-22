import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface UserFormValues {
  name: string;
  email: string;
  password: string;
  contactNo: string;
}

interface ManagementFormValues extends UserFormValues {
  role: 'Staff' | 'Manager';
  staffOrManagerId: string;
}

const SignupComponent: React.FC = () => {
  const [isManagement, setIsManagement] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues | ManagementFormValues>();

  const onSubmit = (data: UserFormValues | ManagementFormValues) => {
    // Handle form submission logic here (e.g., API call to create user)
    console.log(data);
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md"> 1 
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            {/* User or Management selection */}
            <div className="flex items-center">
              <input
                type="radio"
                id="user"
                name="userType"
                value="user"
                onChange={() => setIsManagement(false)}
              />
              <label htmlFor="user" className="ml-2">
                User
              </label>
              <input
                type="radio"
                id="management"
                name="userType"
                value="management"
                onChange={() => setIsManagement(true)}
              />
              <label htmlFor="management" className="ml-2">
                Management
              </label>
            </div>

            {/* User fields */}
            {!isManagement && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  className="border border-gray-300 p-2 rounded"
                />
                {errors.name && <p className="text-red-500">Name is required</p>}

                <input
                  type="email"
                  placeholder="Email"
                  {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  className="border border-gray-300 p-2 rounded"
                />
                {errors.email && <p className="text-red-500">Invalid email address</p>}

                <input
                  type="password"
                  placeholder="Password"
                  {...register('password', { required: true, minLength: 8 })}
                  className="border border-gray-300 p-2 rounded"
                />
                {errors.password && <p className="text-red-500">Password must be at least 8 characters</p>}

                <input
                  type="tel"
                  placeholder="Contact Number"
                  {...register('contactNo', { required: true, pattern: /^\d{10}$/ })}
                  className="border border-gray-300 p-2 rounded"
                />
                {errors.contactNo && <p className="text-red-500">Invalid contact number</p>}
              </>
            )}

            {/* Management fields */}
            {isManagement && (
              <>
                {/* Name, email, password, contact no, role, staff/manager ID fields */}
                {/* ... similar to user fields, with additional role and ID fields */}
              </>
            )}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;